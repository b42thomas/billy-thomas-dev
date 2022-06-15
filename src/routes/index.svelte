<script lang="ts">
	import ContactLinks from '$lib/components/contactLinks.svelte';
	import WorkExperience from '$lib/components/workExperience.svelte';

	import contactLinks from '$data/contactLinks';
	import workExperiences from '$data/workExperiences';

</script>

<h1>Hi, I'm Billy Thomas</h1>

<ContactLinks data={contactLinks} />
{#each workExperiences as workExperience }
	<WorkExperience workExperience={workExperience} />
{/each}

