<script lang="ts">
    import { writable, type Writable } from "svelte/store";

    export let passphrase: Writable<string> = writable("");
</script>

<input type="text" name="" id="" placeholder="Passphrase" class="input w-full max-w-xs password" bind:value={$passphrase}>