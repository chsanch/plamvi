<script lang="ts">
	import LogoSvg from '$lib/components/logoSVG.svelte';
	import { getTripContext } from '$lib/state/trip.svelte';
	const tripState = getTripContext();
</script>

<main class="container">
	<section class="bg-white dark:bg-gray-900">
		<div
			class="mx-auto grid max-w-screen-xl px-4 pb-8 pt-20 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-28 xl:gap-0"
		>
			<div class="mr-auto place-self-center lg:col-span-7">
				<h1
					class="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl"
				>
					Plamvi
				</h1>
				<p
					class="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl"
				>
					Planifica tu viaje con la ayuda de la IA. Solo ingresa tu destino, tus días, presupuesto, tipo de viaje y a viajar!
				</p>
			</div>
			<div class="hidden lg:col-span-5 lg:mt-0 lg:flex">
				<LogoSvg fill="white" width={100} height={100}/>
			</div>
		</div>
	</section>
</main>
