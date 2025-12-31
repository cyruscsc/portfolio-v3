<script lang="ts">
	import config from '$lib/assets/config.json';
	import { Heading, Paragraph } from '$lib/components';
</script>

<svelte:head>
	<title>{config.pages.home.meta.title}</title>
</svelte:head>

<div class="flex flex-col justify-center gap-2">
	<Heading text={config.pages.home.content.heading} />
	{#each config.pages.home.content.paragraphs as paragraph}
		<Paragraph text={paragraph} />
	{/each}
</div>
