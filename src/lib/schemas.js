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
	general_info: z.object({
		destination: z.string(),
		dates: z.string(),
		description: z.string(),
		images: z.array(z.object({ src: z.string(), alt: z.string() }))
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
			link: z.string().or(z.null()),
			image: z.string().or(z.null())
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
					link: z.string().or(z.null()),
					image: z.string().or(z.null())
				})
			),
			restaurants: z.array(
				z.object({
					name: z.string(),
					description: z.string(),
					cost: z.number().or(z.string()),
					link: z.string().or(z.null()),
					image: z.string().or(z.null())
				})
			)
		})
	)
});
