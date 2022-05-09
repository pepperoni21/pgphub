<script>
    import { goto } from "$app/navigation";

    import { isLoggedIn } from "../lib/keys";
    import "../app.css";
    import { onMount } from "svelte";
    import NavBar from "../components/NavBar.svelte";

    onMount(() => {
        if(!$isLoggedIn){
            goto("/login");
        }
    });
</script>

<div class="h-screen w-screen bg-background">
    <NavBar />
    <slot />
</div>