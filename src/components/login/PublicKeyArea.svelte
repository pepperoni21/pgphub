<script lang="ts">
import type { Writable } from "svelte/store";


    export let publicKey: Writable<string>;
</script>

<textarea type="text" class="textarea w-full max-w-xs" placeholder="Public key" bind:value={$publicKey}></textarea>