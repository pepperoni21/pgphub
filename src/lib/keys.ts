import { get, writable, type Writable } from "svelte/store";
import * as openpgp from 'openpgp';
import ls from 'localstorage-slim';
import { getProfilePicture } from "./profile";

ls.config.encrypt = true;

export const isLoggedIn: Writable<boolean> = writable(false);

export const privateKey: Writable<openpgp.PrivateKey | null> = writable(null);
export const publicKey: Writable<openpgp.Key | null> = writable(null);
export const passphrase: Writable<string | null> = writable(null);

if(ls.get('privateKey') && ls.get('publicKey') && ls.get('passphrase')) {
    // Check
    setKeys(ls.get('privateKey')!, ls.get('publicKey')!, ls.get('passphrase')!, false);
    isLoggedIn.set(true);
}

export async function setKeys(privateK: string, publicK: string, passP: string, save: boolean): Promise<boolean> {

    let decryptedPrivateKey: openpgp.PrivateKey;
    let decryptedPublicKey: openpgp.Key;

    try {
        decryptedPublicKey = await openpgp.readKey({ armoredKey: publicK });
    }catch(e){
        let stringError: string = (e as Object).toString();
        if(stringError.includes("Misformed armored text")){
            alert("Invalid public key");
        }
        return false;
    }

    try {
        decryptedPrivateKey = await openpgp.decryptKey({
            privateKey: await openpgp.readPrivateKey({ armoredKey: privateK }),
            passphrase: passP
        });
    } catch(e){
        let stringError: string = (e as Object).toString();
        if(stringError.includes("Incorrect key passphrase")){
            alert("Incorrect key passphrase");
        }else if(stringError.includes("Misformed armored text")){
            alert("Invalid private key");
        }
        return false;
    }

    let valid: boolean = await validateKeys(decryptedPublicKey, decryptedPrivateKey);
    if(!valid){
        alert("Invalid keypair");
        return false;
    }

    privateKey.set(decryptedPrivateKey);
    publicKey.set(decryptedPublicKey);
    passphrase.set(passP);

    if(save){
        ls.set('privateKey', privateK);
        ls.set('publicKey', publicK);
        ls.set("passphrase", passP);
    }

    return true;
}

export async function validateKeys(publicK: openpgp.Key, privateK: openpgp.PrivateKey): Promise<boolean> {
    await openpgp.encrypt({
        message: await openpgp.createMessage({ text: "Test" }),
        encryptionKeys: publicK,
        signingKeys: privateK
    }).catch(_e => {
        return false;
    });
    return true;
}