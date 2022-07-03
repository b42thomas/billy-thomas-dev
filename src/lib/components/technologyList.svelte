<script lang="ts">
    import TechnologyBubble from "./technologyBubble.svelte";
    export let technologies: string[];
</script>
<div>
{#each technologies as technology}
    <TechnologyBubble {technology}/>
{/each}
</div>

<style>
    div {
		display: flex;
        flex-wrap: wrap;
        margin: 20px;
        width: 100%;
    }
</style>