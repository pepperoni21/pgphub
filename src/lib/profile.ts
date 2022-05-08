import type { Key } from "openpgp";
import { uniqueNamesGenerator, adjectives, colors, animals, type Config } from 'unique-names-generator';

export function getProfilePicture(publicKey: Key): string {
    return "https://avatars.dicebear.com/api/bottts/" + publicKey.getFingerprint() + ".svg";
}

export function getProfileName(publicKey: Key): string {
    const config: Config = {
        dictionaries: [adjectives, colors, animals],
        separator: ' ',
        seed: publicKey.getFingerprint(),
    }
    const lowerCaseName = uniqueNamesGenerator(config);
    const arr = lowerCaseName.split(" ");
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}