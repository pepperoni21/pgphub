<script>

    import FaHome from 'svelte-icons/fa/FaHome.svelte'
    import { publicKey } from "$lib/keys";
    import { getProfileName, getProfilePicture } from "$lib/profile";
</script>

{#if $publicKey}
    <div class="w-9/12 h-32 bg-primary mx-auto rounded-b-3xl flex flex-row justify-evenly items-center px-24">
        <div class="flex flex-row justify-evenly">
            <div class="flex flex-col justify-center text-center">
                <div class="w-9 h-9 mx-auto">
                    <FaHome />
                </div>
                <span>Home</span>
            </div>
        </div>
        <div class="flex flex-col justify-evenly text-center">
            <img class="w-16 h-16 mx-auto" src="{getProfilePicture($publicKey)}" alt="">
            <span class="font-bold text-neutral-300">{getProfileName($publicKey)}</span>
        </div>
    </div>
{/if}