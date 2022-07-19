<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { isLoggedIn, setKeys } from "../lib/keys";

    import LoginButton from "../components/login/LoginButton.svelte";
    import PublicKeyArea from "../components/login/PublicKeyArea.svelte";
    import PrivateKeyArea from "../components/login/PrivateKeyArea.svelte";
    import PassphraseArea from "../components/login/PassphraseArea.svelte";
    import { writable, type Writable } from "svelte/store";

    let publicKey: Writable<string> = writable("");
    let privateKey: Writable<string> = writable("");
    let passphrase: Writable<string> = writable("");

    onMount(() => {
        if($isLoggedIn){
            goto("/");
        }
    });

    function login(){
        if($publicKey.length > 0 && $privateKey.length > 0){
            // TODO: Check
            setKeys($privateKey, $publicKey, $passphrase, true).then((value) => {
                if(value){
                    isLoggedIn.set(true)
                    goto("/");
                }
            });
        }
    }

</script>

<div class="w-full h-full flex flex-col justify-center items-center">
    <form class="h-[32rem] w-[24rem] bg-cyan-700 rounded-3xl shadow-gray-900 shadow-md flex flex-col justify-evenly items-center">
        <PublicKeyArea publicKey={publicKey}/>
        <PrivateKeyArea privateKey={privateKey}/>
        <PassphraseArea passphrase={passphrase}/>
        <LoginButton login={login}/>
    </form>
</div>