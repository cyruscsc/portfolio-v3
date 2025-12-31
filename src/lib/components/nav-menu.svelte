<script lang="ts">
	import config from '$lib/assets/config.json';
	import { page } from '$app/state';
</script>

<nav>
	<ul class="hidden h-full w-full flex-col items-end justify-center gap-2 text-right lg:flex">
		{#each Object.values(config.pages) as p}
			<li class="text-sm font-light">
				{#if page.url.pathname === p.meta.path}
					<a href={p.meta.path} class="pointer-events-none cursor-default">
						{p.meta.nav}
						<span>&#9679;</span>
					</a>
				{:else}
					<a href={p.meta.path} class="cursor-pointer opacity-50 duration-300 hover:opacity-75">
						{p.meta.nav}
						<span>&#9675;</span>
					</a>
				{/if}
			</li>
		{/each}
	</ul>
</nav>
