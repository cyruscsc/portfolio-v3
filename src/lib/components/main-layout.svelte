<script lang="ts">
	import { NavMenu } from '$lib/components';

	let { children } = $props();
</script>

<div class="mx-auto flex h-screen items-center">
	<div class="mx-auto flex h-80 max-w-7xl flex-1 justify-between p-2">
		<div class="flex h-full flex-1">
			{@render children()}
		</div>
		<NavMenu />
	</div>
</div>
