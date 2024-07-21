<script>
	import CalendarIcon from 'svelte-radix/Calendar.svelte';
	import { CalendarDate, DateFormatter, getLocalTimeZone, today } from '@internationalized/date';
	import { cn } from '$lib/utils/ui.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { RangeCalendar } from '$lib/components/ui/range-calendar/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
    import { dateRangeValue } from '$lib/utils/dates';

	/** @type {{ updateDates: function} }*/
	let { updateDates } = $props();

	const localDate = today(getLocalTimeZone());

	/** @type {import('bits-ui').DateRange | undefined}*/
	let value = $state({
		start: new CalendarDate(localDate.year, localDate.month, 1),
		end: new CalendarDate(localDate.year, localDate.month, 1).add({ days: 5 })
	});

	/** @type {import('@internationalized/date').DateValue | undefined}*/
	let startValue = $state();

	$effect(() => {
		updateDates(value);
	});
</script>

<div class="grid gap-2">
	<Popover.Root openFocus>
		<Popover.Trigger asChild let:builder>
			<Button
				variant="outline"
				class={cn(
					'w-[300px] justify-start text-left font-normal',
					!value && 'text-muted-foreground'
				)}
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

<!--
    @component
    - DateRangePicker: A component to select a range of dates
    
    @props
        - updateDates: function: A function to update the selected dates in the parent

    @example
    ```svelte
    <DateRangePicker updateDates={updateDates}/>
    ```
-->
