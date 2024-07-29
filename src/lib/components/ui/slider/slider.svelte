<script>
	import { cn } from '$lib/utils/ui.js';
	import { Slider as SliderPrimitive } from 'bits-ui';
	let className = undefined;
	export let value = [0];
	export { className as class };
</script>

<SliderPrimitive.Root
	bind:value
	class={cn('relative flex w-full touch-none select-none items-center', className)}
	{...$$restProps}
	let:thumbs
	let:ticks
>
	<span class="relative h-1.5 w-full grow overflow-hidden bg-primary/20">
		<SliderPrimitive.Range class="absolute h-full rounded-sm bg-primary" />
	</span>

	{#each thumbs as thumb}
		<SliderPrimitive.Thumb
			{thumb}
			class={cn(
				'z-20 block h-4 w-4 cursor-pointer rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
				{
					'cursor-not-allowed': $$restProps.disabled
				}
			)}
		/>
	{/each}

	{#each ticks as tick, idx}
		<SliderPrimitive.Tick class="top-full h-1 border border-primary/20" {tick} />
		<span
			class={cn('absolute top-[calc(100%+0.5rem)] -translate-x-1/2 text-xs text-primary/50', {
				'text-primary': tick['data-value'] <= value[0]
			})}
			style="left: calc({idx} * {$$restProps.percentage});"
		>
			{#if idx >= ticks.length - 1}+{/if}{tick['data-value']}
		</span>
	{/each}
</SliderPrimitive.Root>
