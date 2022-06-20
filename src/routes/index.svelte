<script lang="ts">
	import ContactLinks from '$lib/components/contactLinks.svelte';
	import WorkExperience from '$lib/components/workExperience.svelte';

	import contactLinks from '$data/contactLinks';
	import employmentExperiences from '$data/employmentExperience';
</script>

<h1>Hi, I'm Billy Thomas</h1>

<ContactLinks data={contactLinks} />

<h2>Employment History</h2>
{#each employmentExperiences as workExperience}
	<hr />
	<WorkExperience employmentExperience={workExperience} />
{/each}

<div>
	<h2>Education</h2>
	<hr />
	<h3>Butler University <span style="font-weight: normal">- B.S., Computer Science</span></h3>
	<p>August 2014 - December 2017</p>
</div>

<style>
	div {
		width: 100%;
	}
	h2 {
		align-self: flex-start;
	}

	hr {
		width: 100%;
		border: 2px solid lightgray;
	}
</style>
