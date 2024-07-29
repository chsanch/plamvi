<script lang="ts">
	import { type DateValue } from '@internationalized/date';
	import type { DateRange } from 'bits-ui';
	import CalendarIcon from 'svelte-radix/Calendar.svelte';

	import { Button } from '$lib/components/ui/button/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { RangeCalendar } from '$lib/components/ui/range-calendar/index.js';
	import type { DateRangePickerProps } from '$lib/types';
	import { dateRangeValue } from '$lib/utils/dates';
	import { cn } from '$lib/utils/ui.js';

	let { updateDates, disabled }: DateRangePickerProps = $props();

	let value: DateRange | undefined = $state();
	let startValue: DateValue | undefined = $state();

	$effect(() => {
		updateDates(value);
	});
</script>

<div class={cn('grid w-fit gap-2', { 'cursor-not-allowed': disabled })}>
	<Popover.Root openFocus>
		<Popover.Trigger asChild let:builder>
			<Button
				{disabled}
				variant="outline"
				class={cn('w-72 justify-start text-left font-normal sm:w-80', {
					'text-muted-foreground': !value
				})}
				builders={[builder]}
			>
				<CalendarIcon class="mr-2 h-4 w-4" />
				{dateRangeValue(value, startValue)}
			</Button>
		</Popover.Trigger>
		<Popover.Content class="w-auto p-0" align="start">
			<RangeCalendar
				bind:value
				bind:startValue
				placeholder={value?.start}
				initialFocus
				numberOfMonths={2}
			/>
		</Popover.Content>
	</Popover.Root>
</div>
