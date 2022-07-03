<script lang="ts">
	import type { EmploymentExperience } from '$lib/types/employmentExperience';
	import TechnologyList from './technologyList.svelte';

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
	<TechnologyList technologies={employmentExperience.technologies}/>
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
	ul {
		margin-top: 25px;
		font-size: 16px;
	}
	li {
		margin: 5px;
	}
</style>
