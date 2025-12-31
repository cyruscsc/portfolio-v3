<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import config from '$lib/assets/config.json';
	import { MainLayout } from '$lib/components';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{config.site.meta.title}</title>
	<meta name="description" content={config.site.meta.description} />
	<meta name="author" content={config.site.meta.author} />
</svelte:head>

<MainLayout>
	{@render children()}
</MainLayout>
