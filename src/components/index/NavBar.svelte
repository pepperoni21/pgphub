<script>
    import { publicKey, signOut } from "$lib/keys";
    import { getProfileName, getProfilePicture } from "$lib/profile";
</script>

{#if $publicKey}
    <div class="w-9/12 h-32 bg-primary mx-auto rounded-b-3xl px-24 flex flex-row justify-between items-center select-none">
        <div class="text-3xl font-bold text-text">
            PGPHub
        </div>
        <div class="h-full flex flex-col justify-evenly items-center text-center">
            <img class="w-16 h-16" src="{getProfilePicture($publicKey)}" alt="">
            <span class="font-bold text-neutral-300">{getProfileName($publicKey)}</span>
        </div>
        <div class="h-10 w-28 flex flex-col justify-center items-center">
            <div class="h-10 w-28 btn btn-outline btn-error" on:click={signOut}>
                Sign out
            </div>
        </div>
    </div>
{/if}