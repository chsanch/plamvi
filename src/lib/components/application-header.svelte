<script>
	import { page } from '$app/stores';

	import { buttonVariants } from '$lib/components/ui/button';
	import { Icons } from '$lib/config/icons';
	import { NAV } from '$lib/config/nav';
	import { cn } from '$lib/utils/ui';
	import ModeToggle from './mode-toggle.svelte';
</script>

<header
	class="fixed top-0 z-20 flex h-16 w-full items-center justify-center border-b bg-background px-4"
>
	<nav class="flex items-center justify-center gap-4">
		{#each NAV as item}
			<a
				href={item.href}
				class={cn(buttonVariants({ variant: 'ghost' }), 'flex items-center gap-2', {
					'bg-muted': $page.url.pathname === item.href
				})}
			>
				<svelte:component this={Icons[item.icon]} class="h-5 w-5" />
				<span>{item.name}</span>
			</a>
		{/each}
	</nav>

	<ModeToggle />
</header>
