<script lang="ts">
	import ContactLinks from '$lib/components/contactLinks.svelte';
	import WorkExperience from '$lib/components/workExperience.svelte';
	import TechnologyList from '$lib/components/technologyList.svelte';

	import contactLinks from '$data/contactLinks';
	import employmentExperiences from '$data/employmentExperience';
	import smokeyFrame from '../static/smokeyframe.jpeg';
	import smokeyFrameSMS from '../static/smokeyframe_sms.jpeg';
	import pickleScreenShot from '../static/pickle-screenshot.png';
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
	<hr/>
	<h3>Butler University <span style="font-weight: normal">- B.S., Computer Science</span></h3>
	<p>August 2014 - December 2017</p>
</div>


<div>
	<h2>Projects</h2>
	<hr/>
	<h3>Smokey Frame</h3>
	<p>May 2020</p>
	<TechnologyList technologies={["AWS Lambda", "AWS S3", "Raspberry Pi", "Node.js", "Twilio"]} />
	<p>A digital picture frame you can SMS pictures to via an AWS Lambda function uploading to a S3 bucket</p>
	<div class="project-img-div">
		<img class="smokeyframe-img" alt="a computer monitor displaying a dog" src={smokeyFrame} />
		<img class="smokeyframe-img" alt="screenshot of SMS upload to the smokey frame" src={smokeyFrameSMS} />
	</div>
	<hr/>
	<h3>Pickle - Running Bases</h3>
	<p>July 2016</p>
	<TechnologyList technologies={["Swift"]} />
	<p>Unfortunatley I've stopped paying the Apple developer fee so it's removed from the app store :/ </p>
	<div class="project-img-div">
		<img id="pickleImg" alt="8 bit cartoon man running between two baseball players" src={pickleScreenShot} />
	</div>
	
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
	.project-img-div {
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	#pickleImg {
		height: 100%;
		width: 500px;
		margin: auto 0;
	}
	.smokeyframe-img {
		height: 100%;
		width: 250px;
		margin: auto 0;
	}
</style>
