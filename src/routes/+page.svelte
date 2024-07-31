<script lang="ts">
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
					Planifica tu viaje con la ayuda de la IA. Solo ingresa tu destino y a soñar.
				</p>
			</div>
			<div class="hidden lg:col-span-5 lg:mt-0 lg:flex">
				<img
					class="rounded-xl w-3/4"
					src="logo.svg"
					alt="hero image"
				/>
			</div>
		</div>
	</section>

	<!-- Start block -->
	<section class="bg-gray-50 dark:bg-gray-800">
		<div class="mx-auto max-w-screen-xl space-y-12 px-4 py-8 lg:space-y-20 lg:px-6 lg:py-24">
			<!-- Row -->
			<div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
				<div class="text-gray-500 dark:text-gray-400 sm:text-lg">
					<h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
						Define tus requisitos
					</h2>
					<p class="mb-8 font-light lg:text-xl">
						Con el sistema de requerimientos, puedes definir los requisitos que necesitas para tu
						viaje, desde la cantidad de personas que
						van a viajar hasta el presupesto.
					</p>
					<!-- List -->
					<ul role="list" class="my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-gray-700">
						<li class="flex space-x-3">
							<!-- Icon -->
							<svg
								class="h-5 w-5 flex-shrink-0 text-purple-500 dark:text-purple-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								></path></svg
							>
							<span class="text-base font-medium leading-tight text-gray-900 dark:text-white"
								>Fechas</span
							>
						</li>
						<li class="flex space-x-3">
							<!-- Icon -->
							<svg
								class="h-5 w-5 flex-shrink-0 text-purple-500 dark:text-purple-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								></path></svg
							>
							<span class="text-base font-medium leading-tight text-gray-900 dark:text-white"
								>Tipo de viaje</span
							>
						</li>
						<li class="flex space-x-3">
							<!-- Icon -->
							<svg
								class="h-5 w-5 flex-shrink-0 text-purple-500 dark:text-purple-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								></path></svg
							>
							<span class="text-base font-medium leading-tight text-gray-900 dark:text-white"
								>Presupuesto</span
							>
						</li>
						<li class="flex space-x-3">
							<!-- Icon -->
							<svg
								class="h-5 w-5 flex-shrink-0 text-purple-500 dark:text-purple-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								></path></svg
							>
							<span class="text-base font-medium leading-tight text-gray-900 dark:text-white"
								>Cantidad de viajeros</span
							>
						</li>
					</ul>
				</div>
				<img
					class="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
					src="https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=658&h=640&dpr=1"
					alt="dashboard feature image"
				/>
			</div>
			<!-- Row -->
		</div>
	</section>
	<!-- End block -->
</main>
