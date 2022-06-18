<script lang="ts">
	import type { ContactLink } from "$lib/types/contactLink";

	export let data: readonly ContactLink[];
</script>

<div>
	{#each data as contactLink}
		<a href={contactLink.url} data-test={contactLink.dataTest}>{contactLink.text}</a>
	{/each}
</div>

<style>
	a {
		margin: 10px;
		color: mediumblue;
	}
</style>
