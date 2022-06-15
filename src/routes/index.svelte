<script lang="ts">
	import ContactLinks from '$lib/components/contactLinks.svelte';
	import WorkExperience from '$lib/components/workExperience.svelte';

	import contactLinks from '$data/contactLinks';
	import workExperience from '$data/workExperiences';

</script>

<h1>Hi, I'm Billy Thomas</h1>

<ContactLinks data={contactLinks} />
<WorkExperience workExperience={workExperience} />
