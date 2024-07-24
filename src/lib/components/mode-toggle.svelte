<script>
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Icons } from '$lib/config/icons';

	/** @type {import('$lib/types').Mode}*/
	let currentMode = 'light';

	function toggle(/** @type {import('$lib/types').Mode}*/ mode) {
		if (currentMode === mode) return;

		currentMode = mode;
		window.document.body.classList.toggle('dark');
	}
</script>

<DropdownMenu.Root preventScroll={false}>
	<DropdownMenu.Trigger class="absolute right-8 md:right-20 top-1/2 -translate-y-1/2">
		<svelte:component this={currentMode === 'light' ? Icons.sun : Icons.moon} class="h-5 w-5" />
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			<DropdownMenu.Item on:click={() => toggle('light')}>Light</DropdownMenu.Item>
			<DropdownMenu.Item on:click={() => toggle('dark')}>Dark</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
