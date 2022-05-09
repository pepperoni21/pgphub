<script>
    import { isLoggedIn, publicKey } from "$lib/keys";
</script>


{#if $isLoggedIn}
    Logged!
{:else}
    Loading
{/if}