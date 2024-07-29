import { z } from 'zod';

export const tripSchema = z.object({
	id: z.string(),
	destination: z.string().min(1, 'Por favor, ingrese un destino'),
	description: z.string().min(1, 'Por favor, ingrese una descripción').max(350, 'La descripción debe tener menos de 350 caracteres'),
	dates: z.string().min(1, 'Por favor, ingrese las fechas'),
	people: z.string().min(1, 'Por favor, ingrese el número de personas'),
	preferences: z.string().min(1, 'Por favor, ingrese sus preferencias'),
	budget: z.string().min(1, 'El presupuesto debe ser mayor a 0')
});

export const aiSchema = z.object({
	general_info: z.object({
		destination: z.string(),
		dates: z.string(),
		description: z.string()
	}),
	recommendations: z.object({
		description: z.string(),
		links: z.array(z.object({ title: z.string(), url: z.string() }))
	}),
	hotels: z.array(
		z.object({
			name: z.string(),
			description: z.string(),
			cost: z.number().or(z.string()),
			link: z.string().or(z.null())
		})
	),
	days: z.array(
		z.object({
			date: z.string(),
			description: z.string(),
			activities: z.array(
				z.object({
					name: z.string(),
					description: z.string(),
					cost: z.number().or(z.string()),
					link: z.string().or(z.null())
				})
			),
			restaurants: z.array(
				z.object({
					name: z.string(),
					description: z.string(),
					cost: z.number().or(z.string()),
					link: z.string().or(z.null())
				})
			)
		})
	)
});
