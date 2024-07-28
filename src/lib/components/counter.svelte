<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Icons } from '$lib/config/icons';
	import type { CounterProps } from '$lib/types';
	import { cn } from '$lib/utils/ui';

	let {
		initialCount = 0,
		step = 1,
		min = 0,
		max = Infinity,
		onChange = () => {}
	}: CounterProps = $props();

	let counter = $state(initialCount);

	function increment() {
		if (counter + step <= max) {
			counter += step;
			onChange({ counter });
		}
	}

	function decrement() {
		if (counter - step >= min) {
			counter -= step;
			onChange({ counter });
		}
	}

	let canDecrement = $derived(counter > min);
	let canIncrement = $derived(counter < max);
</script>

<div class="flex items-center rounded-md border">
	<Button
		on:click={decrement}
		class={cn('flex h-8 w-8 justify-center rounded-none border-r p-0', {
			'cursor-default text-muted-foreground hover:bg-transparent hover:text-muted-foreground':
				!canDecrement
		})}
		variant="ghost"
	>
		<Icons.minus class="h-4 w-4" />
	</Button>
	<span class="flex h-8 w-8 select-none items-center justify-center text-sm text-muted-foreground">
		{counter}
	</span>
	<Button
		on:click={increment}
		class={cn('flex h-8 w-8 justify-center rounded-none border-l p-0', {
			'cursor-default hover:bg-transparent': !canIncrement
		})}
		variant="ghost"
	>
		<Icons.plus class="h-4 w-4" />
	</Button>
</div>
