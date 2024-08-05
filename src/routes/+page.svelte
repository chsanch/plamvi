<script>
	import * as Dialog from '$lib/components/ui/dialog';
</script>

<div
	class="flex h-full min-h-[calc(100vh-64px)] w-screen flex-col justify-between bg-[url('/landing/background.png')] bg-cover"
>
	<div class="m-6 flex flex-col gap-y-6 sm:mx-10 sm:my-8 md:mx-24 md:my-16">
		<h1 class="font-heading text-4xl text-primary sm:text-6xl">Plamvi</h1>
		<span class="w-full text-sm text-muted-foreground sm:w-1/2 sm:text-xl"
			>Selecciona el tipo de IA con el que deseas realizar el itinerario e introduce el destino y
			los ajustes que quieras para personalizarlo. Clica en "Viaje" para empezar y ¡Buen viaje!</span
		>

		<span class="w-full text-sm text-muted-foreground sm:w-1/2 sm:text-xl">
			Si quieres ver como funciona, aquí tienes algunos videos:
			<Dialog.Root>
				<Dialog.Trigger class="font-bold underline">Demo OpenAI,</Dialog.Trigger>
				<Dialog.Content class="w-full max-w-5xl">
					<video controls src="/demo_plamvi.mp4">
						<track kind="captions" />
					</video>
				</Dialog.Content>
			</Dialog.Root>
			<Dialog.Root>
				<Dialog.Trigger class="font-bold underline">Demo Gemini</Dialog.Trigger>
				<Dialog.Content class="w-full max-w-5xl">
					<video controls src="/demo_gemini.mp4">
						<track kind="captions" />
					</video>
				</Dialog.Content>
			</Dialog.Root>
		</span>
	</div>

	<div>
		<h2
			class="flex flex-wrap overflow-hidden font-heading text-6xl font-bold opacity-50 sm:text-8xl md:text-[9rem] xl:text-[14rem]"
		>
			Planificador
		</h2>
		<h2
			class="flex flex-wrap overflow-hidden font-heading text-6xl font-bold opacity-50 sm:text-8xl md:text-[9rem] xl:text-[14rem]"
		>
			de itinerarios
		</h2>
		<h2
			class="flex flex-wrap overflow-hidden font-heading text-6xl font-bold opacity-50 sm:text-8xl md:text-[9rem] xl:text-[14rem]"
		>
			con IA
		</h2>
	</div>
</div>
