<script lang="ts">
    import { partner_store } from "$lib/partner-store";


    let partners;

    partner_store.subscribe(val => {
        partners = val
    })
</script>

<div>
    {#if partners.eligible || partners.non_eligible}
        <h2>In range:</h2>
        <ul class='eligible'>
            {#each partners.eligible as partner}
                <li>
                    {partner.name}
                </li>
            {/each}
        </ul>

        <h2>Out of range:</h2>
        <ul class='non-eligible'>
            {#each partners.non_eligible as partner}
                <li>
                    {partner.name}
                </li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    .eligible {
        color: green
    }

    .non-eligible {
        color: red
    }
</style>