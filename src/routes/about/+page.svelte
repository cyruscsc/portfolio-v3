<script lang="ts">
	import config from '$lib/assets/config.json';
	import { Heading } from '$lib/components';
</script>

<svelte:head>
	<title>{config.pages.about.meta.title}</title>
</svelte:head>

<Heading text={config.pages.about.content.heading} />
