<script lang="ts">
	import type { EmploymentExperience } from '$lib/types/employmentExperience';

	export let employmentExperience: EmploymentExperience;
</script>

<div>
	<h2>{employmentExperience.employer} - {employmentExperience.jobTitle}</h2>
	{#each employmentExperience.technologies as technology}
		<span>{technology}</span>
	{/each}
	<ul>
		{#each employmentExperience.bulletPoints as bulletPoint}
			<li>{bulletPoint}</li>
		{/each}
	</ul>
</div>

<style>
	div {
		width: 100%;
	}
	span {
		background-color: rgb(245, 237, 0);
		color: rgb(82, 1, 82);
		border-radius: 20px;
		margin: 5px;
		padding: 10px;
	}

	ul {
		margin-top: 25px;
		font-size: 16px;
	}

	li {
		margin: 5px;
	}
</style>
