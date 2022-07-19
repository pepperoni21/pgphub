<script>
    import { isLoggedIn } from "$lib/keys";
    import Loading from "../components/index/Loading.svelte";
</script>


{#if $isLoggedIn}
    
{:else}
    <Loading/>
{/if}