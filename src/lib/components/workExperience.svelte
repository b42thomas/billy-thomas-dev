<script lang="ts">
	import type { WorkExperience } from "$lib/types/workExperience";
	
	export let workExperience: WorkExperience; 
</script>

<div>
	<h2>{workExperience.employer} - {workExperience.jobTitle}</h2>
</div>

<style>
	div {
		width: 100%;
	}
</style>
