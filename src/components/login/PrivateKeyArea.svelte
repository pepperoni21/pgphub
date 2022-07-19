<script lang="ts">
    import { writable, type Writable } from "svelte/store";

    export let privateKey: Writable<string> = writable("");
</script>

<textarea class="password textarea w-full max-w-xs" placeholder="Private key" bind:value={$privateKey}></textarea>