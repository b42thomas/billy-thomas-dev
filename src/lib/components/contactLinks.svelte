<script lang="ts">
	import type { ContactLink } from '$lib/types/contactLink';

	export let data: readonly ContactLink[];
</script>

<div>
	{#each data as contactLink}
		<a href={contactLink.url} target="_blank" data-test={contactLink.dataTest}>{contactLink.text}</a
		>
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
	}
	a {
		margin: 10px;
		color: mediumblue;
	}
</style>
