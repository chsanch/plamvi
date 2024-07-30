<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { CATEGORIES } from '$lib/config/trip-categories';
	import type { CategoriesProps } from '$lib/types';
	import { cn } from '$lib/utils/ui';

	const { categories = [], onChange = () => {}, disabled }: CategoriesProps = $props();

	const categoriesSelected: Array<string> = $state(categories);

	function handleCategorySelected(category: string) {
		if (disabled) return;

		const index = categoriesSelected.indexOf(category);

		if (index !== -1) categoriesSelected.splice(index, 1);
		else categoriesSelected.push(category);

		onChange(categoriesSelected);
	}
</script>

{#each CATEGORIES as category}
	<Badge
		class={cn(
			'cursor-pointer py-1 text-xs text-muted-foreground transition-colors duration-150 hover:border-primary hover:text-primary',
			{
				'border-primary text-primary': categoriesSelected.includes(category),
				'cursor-not-allowed opacity-50 hover:border-border hover:text-muted-foreground': disabled
			}
		)}
		variant="outline"
		onclick={() => handleCategorySelected(category)}>{category}</Badge
	>
{/each}
