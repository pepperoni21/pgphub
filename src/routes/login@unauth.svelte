<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { isLoggedIn, setKeys } from "../lib/keys";

    let publicKey: string = "";
    let privateKey: string = "";
    let passphrase: string = "";

    onMount(() => {
        if($isLoggedIn){
            goto("/");
        }
    });

    function login(){
        if(publicKey.length > 0 && privateKey.length > 0){
            // TODO: Check
            setKeys(privateKey, publicKey, passphrase, true).then((value) => {
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
        <textarea type="text" placeholder="Public key" bind:value={publicKey}></textarea>
        <textarea class="password" placeholder="Private key" bind:value={privateKey}></textarea>
        <textarea class="password" placeholder="Passphrase" bind:value={passphrase}></textarea>
        <button class="border-background border-2 rounded-2xl w-24 h-8" on:click|preventDefault={login}>Login</button>
    </form>
</div>

<style>
    .password {
        -webkit-text-security: disc;
    }
</style>