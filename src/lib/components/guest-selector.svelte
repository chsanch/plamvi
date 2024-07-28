<script lang="ts">
	import Counter from '$lib/components/counter.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { Icons } from '$lib/config/icons';
	import type { GuestSelectorProps } from '$lib/types';
	import { cn } from '$lib/utils/ui';

	const {
		value = {
			adults: 0,
			kids: 0,
			pets: 0
		},
		onChange = () => {}
	}: GuestSelectorProps = $props();

	let guests = $state({ ...value });

	function handleCounterChange(type: 'adults' | 'kids' | 'pets', event: { counter: number }) {
		guests[type] = event.counter;
		onChange(guests);
	}

	const triggerLabel = $derived(() => {
		const guestCount = guests.adults + guests.kids;
		const petCount = guests.pets;

		if (guestCount === 0 && petCount === 0) {
			return 'Añade viajeros';
		}

		let label = '';
		if (guestCount > 0) {
			label += `${guestCount} huésped${guestCount !== 1 ? 'es' : ''}`;
		}
		if (petCount > 0) {
			if (label) label += ' y ';
			label += `${petCount} mascota${petCount !== 1 ? 's' : ''}`;
		}

		return label;
	});

	let isOpen = $state(false);

	function handleOpenChange(open: boolean) {
		isOpen = open;
	}
</script>

<DropdownMenu.Root
	preventScroll={false}
	closeOnItemClick={false}
	disableFocusFirstItem={true}
	open={isOpen}
	onOpenChange={handleOpenChange}
>
	<DropdownMenu.Trigger
		class="flex w-72 items-center justify-between gap-x-2 rounded-lg border px-4 py-2 text-sm text-muted-foreground sm:w-80"
	>
		<span>{triggerLabel()}</span>
		<Icons.chevronDown
			class={cn('h-5 w-5 transition-transform duration-300', isOpen && '-rotate-180')}
		/>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			<DropdownMenu.Item class="flex items-center gap-2 hover:!bg-transparent">
				<Tooltip.Root openDelay={150}>
					<Tooltip.Trigger asChild>
						<span class="cursor-default">
							<Icons.adult class="h-4 w-4" />
						</span>
					</Tooltip.Trigger>
					<Tooltip.Content>Adultos</Tooltip.Content>
				</Tooltip.Root>
				<Counter
					initialCount={guests.adults}
					onChange={(event) => handleCounterChange('adults', event)}
				/>
			</DropdownMenu.Item>
			<DropdownMenu.Separator />
			<DropdownMenu.Item class="flex items-center gap-2 hover:!bg-transparent">
				<Tooltip.Root openDelay={150}>
					<Tooltip.Trigger asChild>
						<span class="cursor-default">
							<Icons.baby class="h-4 w-4" />
						</span>
					</Tooltip.Trigger>
					<Tooltip.Content>Niños</Tooltip.Content>
				</Tooltip.Root>
				<Counter
					initialCount={guests.kids}
					onChange={(event) => handleCounterChange('kids', event)}
				/>
			</DropdownMenu.Item>
			<DropdownMenu.Separator />
			<DropdownMenu.Item class="flex items-center gap-2 hover:!bg-transparent">
				<Tooltip.Root openDelay={150}>
					<Tooltip.Trigger asChild>
						<span class="cursor-default">
							<Icons.pet class="h-4 w-4" />
						</span>
					</Tooltip.Trigger>
					<Tooltip.Content>Mascotas</Tooltip.Content>
				</Tooltip.Root>
				<Counter
					initialCount={guests.pets}
					onChange={(event) => handleCounterChange('pets', event)}
				/>
			</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
