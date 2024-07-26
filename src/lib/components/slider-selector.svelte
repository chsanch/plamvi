<script lang="ts">
	import { browser } from '$app/environment';

	import Slider from '$lib/components/ui/slider/slider.svelte';
	import type { SliderProps } from '$lib/types';

	const { value = [0], onChange = () => {} }: SliderProps = $props();

	let step = $state<number>(250);
	let percentage = $state<string>('5%');

	function handleBudgetChange(value: Array<number>) {
		onChange(value);
	}

	if (browser) {
		window.addEventListener('resize', () => {
			calculateStepWidth(window.innerWidth);
		});

		function calculateStepWidth(width: number) {
			step = width < 1024 ? 500 : 250;
			percentage = width < 1024 ? '10%' : '5%';
		}

		calculateStepWidth(window.innerWidth);
	}
</script>

<Slider {value} max={5000} {step} ticks={5000} {percentage} onValueChange={handleBudgetChange} />
