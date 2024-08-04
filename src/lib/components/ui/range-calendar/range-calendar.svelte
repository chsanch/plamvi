<script>
	import { cn } from '$lib/utils/ui.js';
	import { parseDate } from '@internationalized/date';
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
	import * as RangeCalendar from './index.js';
	export let value = undefined;
	export let placeholder = undefined;
	export let weekdayFormat = 'short';
	export let startValue = undefined;
	let className = undefined;
	export { className as class };

	const today = parseDate(new Date().toISOString().split('T')[0]);
</script>

<RangeCalendarPrimitive.Root
	bind:value
	bind:placeholder
	bind:startValue
	{weekdayFormat}
	class={cn('p-3', className)}
	{...$$restProps}
	minValue={today}
	on:keydown
	let:months
	let:weekdays
>
	<RangeCalendar.Header>
		<RangeCalendar.PrevButton />
		<RangeCalendar.Heading />
		<RangeCalendar.NextButton />
	</RangeCalendar.Header>
	<RangeCalendar.Months>
		{#each months as month}
			<RangeCalendar.Grid>
				<RangeCalendar.GridHead>
					<RangeCalendar.GridRow class="flex">
						{#each weekdays as weekday}
							<RangeCalendar.HeadCell>
								{weekday.slice(0, 2)}
							</RangeCalendar.HeadCell>
						{/each}
					</RangeCalendar.GridRow>
				</RangeCalendar.GridHead>
				<RangeCalendar.GridBody>
					{#each month.weeks as weekDates}
						<RangeCalendar.GridRow class="mt-2 w-full">
							{#each weekDates as date}
								<RangeCalendar.Cell {date}>
									<RangeCalendar.Day {date} month={month.value} />
								</RangeCalendar.Cell>
							{/each}
						</RangeCalendar.GridRow>
					{/each}
				</RangeCalendar.GridBody>
			</RangeCalendar.Grid>
		{/each}
	</RangeCalendar.Months>
</RangeCalendarPrimitive.Root>
