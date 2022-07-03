<script lang="ts">
    import TechnologyBubble from "./technologyBubble.svelte";
    export let technologies: string[];
</script>
<div>

</div>
{#each technologies as technology}
    <TechnologyBubble {technology}/>
{/each}
<style>
    div {
		display: flex;
        margin: 20px;
    }
</style>