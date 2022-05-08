<script>
    import { goto } from "$app/navigation";

    import { isLoggedIn } from "../lib/keys";
    import "../app.css";
    import { onMount } from "svelte";

    onMount(() => {
        if($isLoggedIn){
            goto("/");
        }
    });
</script>

<div class="h-screen w-screen bg-background">
    <slot />
</div>