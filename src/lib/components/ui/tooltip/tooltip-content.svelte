<script>
	import { cn, flyAndScale } from '$lib/utils/ui.js';
	import { Tooltip as TooltipPrimitive } from 'bits-ui';
	let className = undefined;
	export let sideOffset = 4;
	export let transition = flyAndScale;
	export let transitionConfig = {
		y: 8,
		duration: 150
	};
	export { className as class };
</script>

<TooltipPrimitive.Content
	{transition}
	{transitionConfig}
	{sideOffset}
	class={cn(
		'z-50 overflow-hidden rounded-md bg-secondary px-3 py-1.5 text-xs text-accent-foreground',
		className
	)}
	{...$$restProps}
>
	<slot />
</TooltipPrimitive.Content>
