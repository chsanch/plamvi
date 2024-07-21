import { z } from 'zod';

export const tripSchema = z.object({
	id: z.string(),
	destination: z.string(),
	dates: z.string(),
	people: z.string(),
	preferences: z.string(),
	budget: z.string()
});

export const aiSchema = z.object({
	general_info: z.object({ description: z.string(), images: z.array(z.string()) }),
	recommendations: z.object({ description: z.string(), links: z.array(z.string()) }),
	hotels: z.array(
		z.object({
			name: z.string(),
			description: z.string(),
			cost: z.number().or(z.string()),
			link: z.string(),
			image: z.string()
		})
	),
	days: z.array(
		z.object({
			date: z.string(),
			description: z.string(),
			stops: z.array(
				z.object({
					name: z.string(),
					description: z.string(),
					cost: z.number().or(z.string()),
					link: z.string(),
					image: z.string()
				})
			),
			restaurants: z.array(
				z.object({
					name: z.string(),
					description: z.string(),
					cost: z.number().or(z.string()),
					link: z.string(),
					image: z.string()
				})
			)
		})
	)
});
