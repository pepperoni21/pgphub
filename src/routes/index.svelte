<script>
    import { isLoggedIn, publicKey } from "$lib/keys";
    import { getProfileName, getProfilePicture } from "$lib/profile";
</script>


{#if $isLoggedIn && $publicKey}
    Logged!
    <img class="w-24 h-24" src="{getProfilePicture($publicKey)}" alt="">
    <span>{getProfileName($publicKey)}</span>
{:else}
    Loading
{/if}