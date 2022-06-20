<script lang="ts">
	import type { EmploymentExperience } from '$lib/types/employmentExperience';

	export let employmentExperience: EmploymentExperience;
	const language = 'en-US';
	const localeOptionMonth = 'long';
	const localeOptionYear = 'numeric';
	const startDate = employmentExperience.startDate.toLocaleString(language,  {month:localeOptionMonth, year:localeOptionYear});
	const endDate = employmentExperience.endDate instanceof Date ? 
		employmentExperience.endDate.toLocaleString(language, {month: localeOptionMonth, year: localeOptionYear}) 
		: employmentExperience.endDate;

</script>

<div>
	<h3>{employmentExperience.employer} - {employmentExperience.jobTitle}</h3>
	<p><em>{`${startDate} - ${endDate}`}</em></p>
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
	p {
		margin-bottom: 20px;
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
