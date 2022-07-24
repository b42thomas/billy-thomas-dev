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

<h2 class="page-break">Employment History</h2>
{#each employmentExperiences as workExperience}
	<hr />
	<WorkExperience employmentExperience={workExperience} />
{/each}

<div class="page-break">
	<h2>Education</h2>
	<hr/>
	<h3>Butler University <span style="font-weight: normal">- B.S., Computer Science</span></h3>
	<p>August 2014 - December 2017</p>
</div>


<div class="page-break">
	<h2>Projects</h2>
	<hr class="page-break"/>
	<h3>Smokey Frame</h3>
	<p>May 2020</p>
	<TechnologyList technologies={["AWS Lambda", "AWS S3", "Raspberry Pi", "Node.js", "Twilio"]} />
	<p>A digital picture frame you can SMS pictures to via an AWS Lambda function uploading to a S3 bucket.  A present for mother's day so I can send my mom pictures of my dog, Smokey 🐶</p>
	<div class="project-img-div">
		<img class="smokeyframe-img" alt="a computer monitor displaying a dog" src={smokeyFrame} />
		<img class="smokeyframe-img" alt="screenshot of SMS upload to the smokey frame" src={smokeyFrameSMS} />
	</div>
	<hr class="page-break"/>
	<h3>Pickle - Running Bases</h3>
	<p>July 2016</p>
	<TechnologyList technologies={["Swift"]} />
	<p>
		A running bases games, where the player tries to tag the bases as many times as possible without getting 
		caught on the base where the ball is.  The two basemen throw the ball back and forth to which base the player is closest to.
	</p>
	<div class="project-img-div">
		<img id="pickleImg" alt="8 bit cartoon man running between two baseball players" src={pickleScreenShot} />
	</div>
</div>
<style>
	@media print {
	.page-break {page-break-after: always;}
	}
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
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-around;
	}
	#pickleImg {
		height: auto;
		width: 100%;
		margin: auto 0;
	}
	.smokeyframe-img {
		height: 100%;
		width: 250px;
		margin: auto 0;
	}
</style>
