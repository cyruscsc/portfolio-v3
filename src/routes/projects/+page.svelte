<script lang="ts">
	import config from '$lib/assets/config.json';
	import { Heading, Paragraph, Subheading } from '$lib/components';
</script>

<svelte:head>
	<title>{config.pages.projects.meta.title}</title>
</svelte:head>

<div class="flex flex-col gap-2">
	<Heading text={config.pages.projects.content.heading} />
	{#each config.pages.projects.content.paragraphs as paragraph}
		<Paragraph text={paragraph} />
	{/each}
</div>
