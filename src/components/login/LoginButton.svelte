<script lang="ts">
    export let login: () => void;
</script>

<button class="btn btn-active" on:click|preventDefault={login}>Login</button>