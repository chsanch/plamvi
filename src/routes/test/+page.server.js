const gemini_response = {
	general_info: {
		destination: 'Budapest',
		dates: '19 ago 2024 al 25 ago 2024',
		description:
			'Un viaje cultural a Budapest con actividades para niños, combinando turismo, buena comida y diversión.',
		images: [
			{
				src: 'https://images.pexels.com/photos/1640395/pexels-photo-1640395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
				alt: 'Vista panorámica de Budapest con el río Danubio y el Parlamento húngaro.'
			}
		]
	},
	recommendations: {
		description:
			'Budapest es una ciudad vibrante con una rica historia y cultura. Ofrece una amplia gama de atracciones para todas las edades, desde museos y galerías hasta parques y mercados. La ciudad también es conocida por su deliciosa comida, con una variedad de restaurantes que sirven cocina tradicional húngara y platos internacionales.',
		links: [
			{
				title: 'Turismo de Budapest',
				url: 'https://www.budapestinfo.hu/'
			},
			{
				title: 'Guía de Budapest',
				url: 'https://www.lonelyplanet.com/hungary/budapest'
			}
		]
	},
	hotels: [
		{
			name: 'Hotel Moments Budapest',
			description:
				'Hotel boutique de 4 estrellas en el corazón de Budapest, cerca de la Ópera Estatal Húngara y el río Danubio.',
			cost: '150 euros por noche',
			link: 'https://www.momentsbudapest.com/',
			image:
				'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
		},
		{
			name: 'Hotel Parlament Budapest',
			description: 'Hotel de 4 estrellas con vistas al Parlamento húngaro y al río Danubio.',
			cost: '120 euros por noche',
			link: 'https://www.hotelparlament.hu/',
			image:
				'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
		},
		{
			name: 'Hotel Memories OldTown',
			description:
				'Hotel de 3 estrellas en el barrio antiguo de Budapest, cerca de la Basílica de San Esteban.',
			cost: '80 euros por noche',
			link: 'https://www.memoriesoldtown.hu/',
			image:
				'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
		}
	],
	days: [
		{
			date: '19 de agosto',
			description: 'Llegada a Budapest y exploración del barrio del Castillo.',
			activities: [
				{
					name: 'Traslado desde el aeropuerto al hotel',
					description:
						'Traslado en taxi o transporte público desde el Aeropuerto Internacional Ferenc Liszt (BUD) hasta el hotel.',
					cost: '20 euros',
					link: 'https://www.bud.hu/en/passengers/getting-to-and-from-the-airport/',
					image:
						'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				},
				{
					name: 'Visita al Castillo de Buda',
					description:
						'Explorar el Castillo de Buda, declarado Patrimonio de la Humanidad por la UNESCO, con sus museos, iglesias y vistas panorámicas de la ciudad.',
					cost: '15 euros por persona',
					link: 'https://budacastle.hu/en/',
					image:
						'https://images.pexels.com/photos/1640395/pexels-photo-1640395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				},
				{
					name: 'Paseo por el barrio del Castillo',
					description:
						'Disfrutar de un paseo por las calles adoquinadas del barrio del Castillo, admirando la arquitectura medieval y las tiendas de artesanía.',
					cost: 'Gratis',
					link: 'https://www.budapestinfo.hu/en/budapest-districts/budai-var/',
					image:
						'https://images.pexels.com/photos/1640395/pexels-photo-1640395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				}
			],
			restaurants: [
				{
					name: 'Restaurant Gundel',
					description:
						'Restaurante elegante con cocina húngara tradicional y vistas al Parque de la Ciudad.',
					cost: '30 euros por persona',
					link: 'https://www.gundel.hu/',
					image:
						'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				},
				{
					name: 'Menza',
					description: 'Restaurante informal con platos húngaros y europeos a precios razonables.',
					cost: '15 euros por persona',
					link: 'https://www.menzabudapest.hu/',
					image:
						'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				}
			]
		},
		{
			date: '20 de agosto',
			description:
				'Día en el lado de Pest, explorando la ciudad y disfrutando de un crucero por el Danubio.',
			activities: [
				{
					name: 'Visita al Parlamento húngaro',
					description:
						'Recorrido por el Parlamento húngaro, uno de los edificios más impresionantes de Budapest.',
					cost: '20 euros por persona',
					link: 'https://www.parlament.hu/en/',
					image:
						'https://images.pexels.com/photos/1640395/pexels-photo-1640395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				},
				{
					name: 'Crucero por el Danubio',
					description:
						'Disfrutar de un crucero por el río Danubio con vistas panorámicas de los puentes y monumentos de Budapest.',
					cost: '25 euros por persona',
					link: 'https://www.budapestsightseeing.com/en/cruise/',
					image:
						'https://images.pexels.com/photos/1640395/pexels-photo-1640395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				},
				{
					name: 'Visita a la Plaza de los Héroes',
					description:
						'Explorar la Plaza de los Héroes, una plaza monumental con estatuas de los líderes húngaros.',
					cost: 'Gratis',
					link: 'https://www.budapestinfo.hu/en/budapest-districts/pest/',
					image:
						'https://images.pexels.com/photos/1640395/pexels-photo-1640395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				}
			],
			restaurants: [
				{
					name: 'Buda Bistro',
					description: 'Restaurante informal con platos húngaros y europeos a precios razonables.',
					cost: '15 euros por persona',
					link: 'https://www.budabistro.hu/',
					image:
						'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				},
				{
					name: 'Közép-európai Konyha',
					description: 'Restaurante elegante con cocina húngara moderna.',
					cost: '30 euros por persona',
					link: 'https://www.kozepeur.hu/',
					image:
						'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				}
			]
		},
		{
			date: '21 de agosto',
			description: 'Día de exploración y diversión en el Parque de la Ciudad.',
			activities: [
				{
					name: 'Visita al Zoológico y Jardín Botánico de Budapest',
					description:
						'Explorar el Zoológico y Jardín Botánico de Budapest, hogar de una gran variedad de animales y plantas.',
					cost: '20 euros por persona',
					link: 'https://www.zoobudapest.com/',
					image:
						'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				},
				{
					name: 'Paseo en trencito por el Parque de la Ciudad',
					description:
						'Disfrutar de un paseo en trencito por el Parque de la Ciudad, un parque extenso con áreas verdes, lagos y atracciones.',
					cost: '10 euros por persona',
					link: 'https://www.varosliget.hu/',
					image:
						'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				},
				{
					name: 'Visita al Museo de Bellas Artes',
					description:
						'Explorar el Museo de Bellas Artes, que alberga una colección de arte húngaro y europeo.',
					cost: '10 euros por persona',
					link: 'https://www.szepmuveszeti.hu/',
					image:
						'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				}
			],
			restaurants: [
				{
					name: 'Közép-európai Konyha',
					description: 'Restaurante elegante con cocina húngara moderna.',
					cost: '30 euros por persona',
					link: 'https://www.kozepeur.hu/',
					image:
						'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				},
				{
					name: 'Buda Bistro',
					description: 'Restaurante informal con platos húngaros y europeos a precios razonables.',
					cost: '15 euros por persona',
					link: 'https://www.budabistro.hu/',
					image:
						'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				}
			]
		},
		{
			date: '22 de agosto',
			description: 'Día de compras y exploración del barrio judío.',
			activities: [
				{
					name: 'Visita al Gran Mercado',
					description:
						'Explorar el Gran Mercado, un mercado cubierto con puestos de comida, souvenirs y productos locales.',
					cost: 'Gratis',
					link: 'https://www.budapestinfo.hu/en/budapest-districts/pest/',
					image:
						'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				},
				{
					name: 'Paseo por el barrio judío',
					description:
						'Explorar el barrio judío, un barrio histórico con sinagogas, museos y restaurantes.',
					cost: 'Gratis',
					link: 'https://www.budapestinfo.hu/en/budapest-districts/pest/',
					image:
						'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				},
				{
					name: 'Visita al Museo Judío Húngaro',
					description:
						'Explorar el Museo Judío Húngaro, que cuenta la historia de la comunidad judía de Hungría.',
					cost: '10 euros por persona',
					link: 'https://www.jewishmuseum.hu/',
					image:
						'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				}
			],
			restaurants: [
				{
					name: 'Közép-európai Konyha',
					description: 'Restaurante elegante con cocina húngara moderna.',
					cost: '30 euros por persona',
					link: 'https://www.kozepeur.hu/',
					image:
						'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				},
				{
					name: 'Buda Bistro',
					description: 'Restaurante informal con platos húngaros y europeos a precios razonables.',
					cost: '15 euros por persona',
					link: 'https://www.budabistro.hu/',
					image:
						'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				}
			]
		},
		{
			date: '23 de agosto',
			description: 'Día de relax y baños termales.',
			activities: [
				{
					name: 'Visita a los baños termales Széchenyi',
					description:
						'Disfrutar de un día de relax en los baños termales Széchenyi, uno de los complejos termales más grandes de Europa.',
					cost: '20 euros por persona',
					link: 'https://www.szechenyispa.hu/',
					image:
						'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				},
				{
					name: 'Visita al Museo de Historia de Budapest',
					description:
						'Explorar el Museo de Historia de Budapest, que cuenta la historia de la ciudad desde sus inicios.',
					cost: '10 euros por persona',
					link: 'https://www.btm.hu/',
					image:
						'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				}
			],
			restaurants: [
				{
					name: 'Közép-európai Konyha',
					description: 'Restaurante elegante con cocina húngara moderna.',
					cost: '30 euros por persona',
					link: 'https://www.kozepeur.hu/',
					image:
						'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				},
				{
					name: 'Buda Bistro',
					description: 'Restaurante informal con platos húngaros y europeos a precios razonables.',
					cost: '15 euros por persona',
					link: 'https://www.budabistro.hu/',
					image:
						'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				}
			]
		},
		{
			date: '24 de agosto',
			description: 'Salida de Budapest.',
			activities: [
				{
					name: 'Desayuno en el hotel',
					description: 'Disfrutar de un último desayuno en el hotel.',
					cost: 'Incluido en el precio del hotel',
					link: null,
					image: null
				},
				{
					name: 'Traslado al aeropuerto',
					description:
						'Traslado en taxi o transporte público desde el hotel hasta el Aeropuerto Internacional Ferenc Liszt (BUD).',
					cost: '20 euros',
					link: 'https://www.bud.hu/en/passengers/getting-to-and-from-the-airport/',
					image:
						'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				}
			],
			restaurants: []
		}
	]
};

const chatgpt_turbo_response = {
    "general_info": {
      "destination": "Budapest",
      "dates": "19 ago 2024 - 25 ago 2024",
      "description": "Budapest, la capital de Hungría, es conocida por su rica historia, arquitectura impresionante y vibrante vida cultural. Dividida por el río Danubio, la ciudad ofrece una mezcla fascinante de lo antiguo y lo nuevo, ideal para explorar en familia. Desde el majestuoso Parlamento hasta los relajantes baños termales, Budapest tiene algo para todos.",
      "images": [
        {
          "src": "https://cdn.pixabay.com/photo/2015/03/26/09/54/buildings-690364_1280.jpg",
          "alt": "Vista panorámica de Budapest"
        }
      ]
    },
    "recommendations": {
      "description": "Para un viaje familiar en Budapest que combine cultura, buena comida y diversión, aquí tienes algunas recomendaciones generales.",
      "links": [
        {
          "title": "Información turística oficial de Budapest",
          "url": "https://www.budapestinfo.hu/"
        }
      ]
    },
    "hotels": [
      {
        "name": "Hotel Palazzo Zichy",
        "description": "Este hotel de 4 estrellas está ubicado en el centro histórico, cerca de atracciones principales. Ofrece comodidades modernas y es ideal para familias.",
        "cost": "100 euros por noche",
        "link": "https://www.hotelpalazzozichy.hu",
        "image": "https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665_1280.jpg"
      },
      {
        "name": "Ibis Budapest City",
        "description": "Hotel económico pero cómodo, perfecto para familias que buscan una opción más asequible. Ubicado cerca del transporte público y atracciones principales.",
        "cost": "60 euros por noche",
        "link": "https://www.accorhotels.com/gb/hotel-1681-ibis-budapest-city/index.shtml",
        "image": "https://cdn.pixabay.com/photo/2017/08/10/07/32/ibis-hotel-2619202_1280.jpg"
      }
    ],
    "days": [
      {
        "date": "19 de agosto de 2024",
        "description": "Exploración del distrito del Castillo y paseo por el Danubio.",
        "activities": [
          {
            "name": "Castillo de Buda",
            "description": "Visita este icónico castillo que ofrece vistas espectaculares de la ciudad y una rica historia. Ideal para enseñar a los niños sobre la historia de Hungría.",
            "cost": "10 euros por persona",
            "link": "https://budaicastlebudapest.com/",
            "image": "https://cdn.pixabay.com/photo/2017/06/05/11/01/chain-bridge-2373348_1280.jpg"
          },
          {
            "name": "Crucero por el Danubio",
            "description": "Disfruta de un relajante crucero por el Danubio, una manera perfecta de ver la ciudad desde otra perspectiva. Especialmente mágico al atardecer.",
            "cost": "15 euros por persona",
            "link": "https://www.legenda.hu/en",
            "image": "https://cdn.pixabay.com/photo/2016/11/29/03/53/budapest-1867170_1280.jpg"
          }
        ],
        "restaurants": [
          {
            "name": "Halászbástya Restaurant",
            "description": "Ubicado cerca del Castillo de Buda, este restaurante ofrece platos húngaros tradicionales con una vista impresionante.",
            "cost": "25 euros por persona",
            "link": "https://www.halaszbastya.eu/",
            "image": "https://cdn.pixabay.com/photo/2016/11/29/03/53/budapest-1867170_1280.jpg"
          }
        ]
      },
      {
        "date": "20 de agosto de 2024",
        "description": "Día de museos y parques.",
        "activities": [
          {
            "name": "Museo Nacional Húngaro",
            "description": "Explora la historia y cultura de Hungría a través de sus exposiciones. Perfecto para un día educativo en familia.",
            "cost": "8 euros por persona",
            "link": "http://www.hnm.hu/en",
            "image": "https://cdn.pixabay.com/photo/2017/06/05/11/01/chain-bridge-2373348_1280.jpg"
          },
          {
            "name": "Parque de la Ciudad (Városliget)",
            "description": "Visita este amplio parque que ofrece muchas actividades para niños, incluyendo un castillo, un lago para paseos en bote y áreas de juego.",
            "cost": "Gratis",
            "link": "https://varosliget.info/en",
            "image": "https://cdn.pixabay.com/photo/2017/06/05/11/01/chain-bridge-2373348_1280.jpg"
          }
        ],
        "restaurants": [
          {
            "name": "Paprika",
            "description": "Restaurante casual que sirve platos húngaros auténticos, ideal para almorzar después de visitar el museo.",
            "cost": "20 euros por persona",
            "link": "https://www.paprikavendeglo.hu/",
            "image": "https://cdn.pixabay.com/photo/2016/11/29/03/53/budapest-1867170_1280.jpg"
          }
        ]
      },
      {
        "date": "21 de agosto de 2024",
        "description": "Exploración de la Isla Margarita y visita a un espectáculo local.",
        "activities": [
          {
            "name": "Isla Margarita",
            "description": "Un oasis en medio del Danubio, perfecto para un día de relajación en familia. Puedes alquilar bicicletas o simplemente disfrutar de un pícnic.",
            "cost": "Gratis",
            "link": "https://welovebudapest.com/en/venue/margaret-island-2/",
            "image": "https://cdn.pixabay.com/photo/2017/06/05/11/01/chain-bridge-2373348_1280.jpg"
          },
          {
            "name": "Espectáculo en el Teatro Nacional de Marionetas",
            "description": "Disfruta de un espectáculo cultural que fascinará tanto a adultos como a niños. Consulta la programación para elegir una obra adecuada.",
            "cost": "10 euros por persona",
            "link": "https://www.budapestpuppet.com/",
            "image": "https://cdn.pixabay.com/photo/2017/06/05/11/01/chain-bridge-2373348_1280.jpg"
          }
        ],
        "restaurants": [
          {
            "name": "Robinson Restaurant",
            "description": "Situado cerca de la Isla Margarita, este restaurante ofrece excelentes opciones para comer al aire libre con vistas al lago.",
            "cost": "30 euros por persona",
            "link": "https://www.robinsonrestaurant.hu/",
            "image": "https://cdn.pixabay.com/photo/2016/11/29/03/53/budapest-1867170_1280.jpg"
          }
        ]
      },
      {
        "date": "22 de agosto de 2024",
        "description": "Visita a los baños termales y tarde de compras.",
        "activities": [
          {
            "name": "Baños Széchenyi",
            "description": "Sumérgete en uno de los baños termales más grandes de Europa, ideal para relajarse después de días de turismo.",
            "cost": "20 euros por persona",
            "link": "http://www.szechenyibath.hu/",
            "image": "https://cdn.pixabay.com/photo/2017/06/05/11/01/chain-bridge-2373348_1280.jpg"
          },
          {
            "name": "Andrássy Út",
            "description": "Disfruta de una tarde de compras en esta avenida famosa por sus tiendas de lujo y arquitectura impresionante.",
            "cost": "Gratis",
            "link": "https://www.budapestbylocals.com/andrassy-avenue.html",
            "image": "https://cdn.pixabay.com/photo/2017/06/05/11/01/chain-bridge-2373348_1280.jpg"
          }
        ],
        "restaurants": [
          {
            "name": "Menza",
            "description": "Restaurante moderno y popular entre locales y turistas, ofrece una variedad de platos húngaros e internacionales.",
            "cost": "20 euros por persona",
            "link": "https://www.menzarestaurant.hu/",
            "image": "https://cdn.pixabay.com/photo/2016/11/29/03/53/budapest-1867170_1280.jpg"
          }
        ]
      },
      {
        "date": "23 de agosto de 2024",
        "description": "Día dedicado a la exploración de la historia judía y la vida nocturna.",
        "activities": [
          {
            "name": "Sinagoga de la Calle Dohány",
            "description": "Visita la sinagoga más grande de Europa y aprende sobre la historia judía de Budapest.",
            "cost": "15 euros por persona",
            "link": "https://www.dohanystreetsynagogue.hu/",
            "image": "https://cdn.pixabay.com/photo/2017/06/05/11/01/chain-bridge-2373348_1280.jpg"
          },
          {
            "name": "Ruina Pubs",
            "description": "Explora los famosos pubs de ruinas de Budapest, una experiencia única en la vida nocturna de la ciudad.",
            "cost": "Variable",
            "link": "https://ruinpubs.com/",
            "image": "https://cdn.pixabay.com/photo/2017/06/05/11/01/chain-bridge-2373348_1280.jpg"
          }
        ],
        "restaurants": [
          {
            "name": "Spinoza",
            "description": "Restaurante en el barrio judío que ofrece platos tradicionales y espectáculos de música en vivo durante la cena.",
            "cost": "25 euros por persona",
            "link": "http://www.spinozacafe.hu/",
            "image": "https://cdn.pixabay.com/photo/2016/11/29/03/53/budapest-1867170_1280.jpg"
          }
        ]
      },
      {
        "date": "24 de agosto de 2024",
        "description": "Último día: recorrido por la ciudad y despedida.",
        "activities": [
          {
            "name": "Parlamento de Budapest",
            "description": "Visita uno de los edificios legislativos más impresionantes del mundo, un símbolo icónico de la ciudad.",
            "cost": "15 euros por persona",
            "link": "https://www.parlament.hu/en/web/house-of-the-national-assembly",
            "image": "https://cdn.pixabay.com/photo/2017/06/05/11/01/chain-bridge-2373348_1280.jpg"
          },
          {
            "name": "Paseo por Váci Utca",
            "description": "Disfruta de un último paseo por esta famosa calle peatonal, perfecta para comprar recuerdos.",
            "cost": "Gratis",
            "link": "https://www.budapestbylocals.com/vaci-street.html",
            "image": "https://cdn.pixabay.com/photo/2017/06/05/11/01/chain-bridge-2373348_1280.jpg"
          }
        ],
        "restaurants": [
          {
            "name": "Gundel",
            "description": "Para una cena de despedida, disfruta de la alta cocina húngara en uno de los restaurantes más prestigiosos de Budapest.",
            "cost": "50 euros por persona",
            "link": "https://www.gundel.hu/",
            "image": "https://cdn.pixabay.com/photo/2016/11/29/03/53/budapest-1867170_1280.jpg"
          }
        ]
      }
    ]
  }

const chatgpt_response = {
	general_info: {
		destination: 'Budapest',
		dates: '19 ago 2024 al 25 ago 2024',
		description:
			'Budapest, la capital de Hungría, es conocida por su rica historia, arquitectura impresionante y vibrante vida cultural. Es un destino ideal para familias, con muchas actividades que pueden disfrutar tanto adultos como niños.',
		images: [
			{
				src: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36',
				alt: 'Budapest Parliament Building'
			},
			{
				src: 'https://images.unsplash.com/photo-1545156521-3d9c5d6e8b37',
				alt: 'Puente de las Cadenas'
			},
			{
				src: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36',
				alt: 'Baños termales de Budapest'
			}
		]
	},
	recommendations: {
		description:
			'Budapest ofrece una variedad de actividades culturales y de entretenimiento para toda la familia. Desde visitas a museos y monumentos históricos hasta paseos en barco por el Danubio y parques de atracciones, hay algo para todos los gustos.',
		links: [
			{
				title: 'Guía de Budapest',
				url: 'https://www.budapest.com/'
			},
			{
				title: 'Actividades para niños en Budapest',
				url: 'https://www.budapestbylocals.com/budapest-with-kids.html'
			}
		]
	},
	hotels: [
		{
			name: 'Hotel Zenit Budapest Palace',
			description:
				'Un hotel familiar ubicado en el centro de Budapest, cerca de muchas atracciones turísticas.',
			cost: '€100 por noche',
			link: 'https://www.zenithoteles.com/es/hotel-zenit-budapest-palace',
			image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
		},
		{
			name: 'Ibis Styles Budapest City',
			description: 'Hotel económico y moderno, ideal para familias, con desayuno incluido.',
			cost: '€70 por noche',
			link: 'https://all.accor.com/hotel/2025/index.es.shtml',
			image: 'https://images.unsplash.com/photo-1545156521-3d9c5d6e8b37'
		},
		{
			name: 'Danubius Hotel Helia',
			description: 'Hotel con spa y piscina, perfecto para relajarse después de un día de turismo.',
			cost: '€90 por noche',
			link: 'https://www.danubiushotels.com/en/our-hotels-budapest/danubius-hotel-helia',
			image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
		}
	],
	days: [
		{
			date: '19 ago 2024',
			description: 'Llegada a Budapest y exploración inicial de la ciudad.',
			activities: [
				{
					name: 'Llegada y check-in en el hotel',
					description:
						'Llegada a Budapest y traslado al hotel para hacer el check-in y descansar un poco.',
					cost: 'Incluido en el costo del hotel',
					link: null,
					image: null
				},
				{
					name: 'Paseo por la Avenida Andrássy',
					description:
						'Un paseo por una de las avenidas más famosas de Budapest, llena de tiendas, cafés y edificios históricos.',
					cost: 'Gratis',
					link: 'https://www.budapest.com/city_guide/sights/streets_squares/andrassy_avenue.en.html',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				},
				{
					name: 'Cena en el restaurante Menza',
					description:
						'Un restaurante popular que ofrece comida húngara moderna en un ambiente retro.',
					cost: '€20 por persona',
					link: 'http://www.menzaetterem.hu/',
					image: 'https://images.unsplash.com/photo-1545156521-3d9c5d6e8b37'
				}
			],
			restaurants: [
				{
					name: 'Café Gerbeaud',
					description: 'Un café histórico perfecto para un desayuno o merienda.',
					cost: '€10 por persona',
					link: 'https://www.gerbeaud.hu/',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				},
				{
					name: 'Menza',
					description:
						'Restaurante popular que ofrece comida húngara moderna en un ambiente retro.',
					cost: '€20 por persona',
					link: 'http://www.menzaetterem.hu/',
					image: 'https://images.unsplash.com/photo-1545156521-3d9c5d6e8b37'
				},
				{
					name: 'Pata Negra',
					description: 'Un restaurante de tapas español, ideal para una cena informal.',
					cost: '€15 por persona',
					link: 'https://patanegra.hu/',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				}
			]
		},
		{
			date: '20 ago 2024',
			description: 'Día de exploración cultural y diversión para los niños.',
			activities: [
				{
					name: 'Visita al Parlamento de Budapest',
					description:
						'Uno de los edificios más icónicos de Budapest, con visitas guiadas disponibles.',
					cost: '€10 por persona',
					link: 'https://www.parlament.hu/en/web/house-of-the-national-assembly/visitors',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				},
				{
					name: 'Paseo en barco por el Danubio',
					description:
						'Un paseo en barco para ver Budapest desde el río, una experiencia que encantará a los niños.',
					cost: '€15 por persona',
					link: 'https://www.budapestrivercruise.com/',
					image: 'https://images.unsplash.com/photo-1545156521-3d9c5d6e8b37'
				},
				{
					name: 'Visita al Museo de Historia de Budapest',
					description:
						'Un museo interactivo que ofrece una visión fascinante de la historia de la ciudad.',
					cost: '€5 por persona',
					link: 'https://www.btm.hu/',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				}
			],
			restaurants: [
				{
					name: 'Café New York',
					description: 'Un café histórico con una decoración impresionante, ideal para desayunar.',
					cost: '€15 por persona',
					link: 'https://www.newyorkcafe.hu/',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				},
				{
					name: 'Kiosk Budapest',
					description:
						'Restaurante moderno con una gran variedad de platos, ideal para el almuerzo.',
					cost: '€20 por persona',
					link: 'https://kiosk-budapest.hu/',
					image: 'https://images.unsplash.com/photo-1545156521-3d9c5d6e8b37'
				},
				{
					name: 'VakVarjú Restaurant',
					description: 'Restaurante familiar con platos tradicionales húngaros.',
					cost: '€20 por persona',
					link: 'https://www.vakvarju.com/',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				}
			]
		},
		{
			date: '21 ago 2024',
			description: 'Día de parques y actividades al aire libre.',
			activities: [
				{
					name: 'Visita al Parque de la Ciudad (Városliget)',
					description:
						'Un gran parque con muchas actividades para niños, incluyendo un zoológico y un parque de atracciones.',
					cost: 'Gratis (algunas atracciones tienen costo adicional)',
					link: 'https://www.varosliget.info/',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				},
				{
					name: 'Visita al Zoológico de Budapest',
					description:
						'Uno de los zoológicos más antiguos del mundo, con una gran variedad de animales.',
					cost: '€10 por persona',
					link: 'https://www.zoobudapest.com/',
					image: 'https://images.unsplash.com/photo-1545156521-3d9c5d6e8b37'
				},
				{
					name: 'Visita al Parque de Atracciones Holnemvolt',
					description: 'Un parque de atracciones con juegos y actividades para niños.',
					cost: '€15 por persona',
					link: 'https://www.holnemvoltpark.hu/',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				}
			],
			restaurants: [
				{
					name: 'Robinson Restaurant',
					description:
						'Restaurante junto al lago en el Parque de la Ciudad, ideal para desayunar o almorzar.',
					cost: '€20 por persona',
					link: 'https://robinsonrestaurant.hu/',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				},
				{
					name: 'Gundel Restaurant',
					description: 'Restaurante histórico con cocina húngara de alta calidad.',
					cost: '€30 por persona',
					link: 'https://www.gundel.hu/',
					image: 'https://images.unsplash.com/photo-1545156521-3d9c5d6e8b37'
				},
				{
					name: 'Paprika Vendéglő',
					description: 'Restaurante tradicional húngaro, ideal para una cena familiar.',
					cost: '€20 por persona',
					link: 'https://www.paprikavendeglo.hu/',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				}
			]
		},
		{
			date: '22 ago 2024',
			description: 'Día de exploración de la historia y la cultura de Budapest.',
			activities: [
				{
					name: 'Visita al Castillo de Buda',
					description: 'Un complejo histórico con museos y vistas impresionantes de la ciudad.',
					cost: '€10 por persona',
					link: 'https://www.budacastlebudapest.com/',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				},
				{
					name: 'Visita a la Iglesia de Matías',
					description: 'Una iglesia gótica con una rica historia y hermosos interiores.',
					cost: '€5 por persona',
					link: 'https://www.matyas-templom.hu/',
					image: 'https://images.unsplash.com/photo-1545156521-3d9c5d6e8b37'
				},
				{
					name: 'Paseo por el Bastión de los Pescadores',
					description: 'Un mirador con vistas panorámicas de Budapest y el Danubio.',
					cost: 'Gratis',
					link: 'https://www.fishermansbastion.com/',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				}
			],
			restaurants: [
				{
					name: 'Ruszwurm Confectionery',
					description:
						'Una de las pastelerías más antiguas de Budapest, ideal para un desayuno dulce.',
					cost: '€10 por persona',
					link: 'https://www.ruszwurm.hu/',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				},
				{
					name: 'Pest-Buda Bistro',
					description:
						'Bistró tradicional húngaro, perfecto para un almuerzo en el distrito del Castillo.',
					cost: '€20 por persona',
					link: 'https://www.pest-buda.com/',
					image: 'https://images.unsplash.com/photo-1545156521-3d9c5d6e8b37'
				},
				{
					name: '21 Hungarian Kitchen',
					description: 'Restaurante que ofrece una versión moderna de la cocina húngara.',
					cost: '€25 por persona',
					link: 'https://www.21restaurant.hu/',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				}
			]
		},
		{
			date: '23 ago 2024',
			description:
				'Día de relajación y diversión en los baños termales y exploración de la Isla Margarita.',
			activities: [
				{
					name: 'Visita a los Baños Széchenyi',
					description:
						'Uno de los baños termales más grandes y famosos de Europa, con piscinas interiores y exteriores.',
					cost: '€20 por persona',
					link: 'https://www.szechenyibath.hu/',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				},
				{
					name: 'Paseo por la Isla Margarita',
					description:
						'Una isla en el medio del Danubio con parques, jardines y actividades recreativas.',
					cost: 'Gratis',
					link: 'https://www.budapest.com/city_guide/sights/parks/margaret_island.en.html',
					image: 'https://images.unsplash.com/photo-1545156521-3d9c5d6e8b37'
				},
				{
					name: 'Visita al MiniPolisz',
					description:
						'Un parque temático interactivo donde los niños pueden jugar a ser adultos en una mini ciudad.',
					cost: '€10 por persona',
					link: 'https://www.minipolisz.hu/',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				}
			],
			restaurants: [
				{
					name: 'Széchenyi Kertvendéglő',
					description:
						'Restaurante dentro del complejo de los Baños Széchenyi, ideal para un almuerzo relajado.',
					cost: '€20 por persona',
					link: 'https://www.szechenyirestaurant.hu/',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				},
				{
					name: 'Holdudvar',
					description:
						'Restaurante y bar en la Isla Margarita, perfecto para una cena al aire libre.',
					cost: '€20 por persona',
					link: 'https://www.holdudvar.net/',
					image: 'https://images.unsplash.com/photo-1545156521-3d9c5d6e8b37'
				},
				{
					name: 'Trófea Grill',
					description: 'Restaurante buffet con una gran variedad de platos, ideal para familias.',
					cost: '€25 por persona',
					link: 'https://www.trofeagrill.com/',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				}
			]
		},
		{
			date: '24 ago 2024',
			description: 'Día de exploración de la cultura moderna y compras.',
			activities: [
				{
					name: 'Visita al Mercado Central',
					description:
						'Un mercado histórico donde se pueden comprar productos locales y souvenirs.',
					cost: 'Gratis',
					link: 'https://www.piaconline.hu/',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				},
				{
					name: 'Visita al Museo de Bellas Artes',
					description: 'Un museo con una impresionante colección de arte europeo.',
					cost: '€10 por persona',
					link: 'https://www.szepmuveszeti.hu/',
					image: 'https://images.unsplash.com/photo-1545156521-3d9c5d6e8b37'
				},
				{
					name: 'Paseo por la Calle Váci',
					description:
						'Una de las principales calles comerciales de Budapest, llena de tiendas y cafés.',
					cost: 'Gratis',
					link: 'https://www.budapest.com/city_guide/sights/streets_squares/vaci_street.en.html',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				}
			],
			restaurants: [
				{
					name: 'Café Central',
					description: 'Un café histórico con una gran variedad de pasteles y desayunos.',
					cost: '€15 por persona',
					link: 'https://www.centralkavehaz.hu/',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				},
				{
					name: 'Bors GasztroBár',
					description:
						'Un pequeño restaurante que ofrece sopas y sándwiches creativos, ideal para un almuerzo rápido.',
					cost: '€10 por persona',
					link: 'https://www.borsgasztrobar.com/',
					image: 'https://images.unsplash.com/photo-1545156521-3d9c5d6e8b37'
				},
				{
					name: 'Costes Downtown',
					description:
						'Restaurante de alta cocina con una estrella Michelin, perfecto para una cena especial.',
					cost: '€50 por persona',
					link: 'https://www.costesdowntown.hu/',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				}
			]
		},
		{
			date: '25 ago 2024',
			description: 'Último día en Budapest, tiempo para compras de última hora y regreso a casa.',
			activities: [
				{
					name: 'Visita al Museo del Transporte',
					description:
						'Un museo fascinante para los niños, con exhibiciones de trenes, coches y aviones.',
					cost: '€5 por persona',
					link: 'https://www.mmkm.hu/',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				},
				{
					name: 'Compras de última hora en WestEnd City Center',
					description: 'Un gran centro comercial con una variedad de tiendas y restaurantes.',
					cost: 'Gratis',
					link: 'https://westend.hu/',
					image: 'https://images.unsplash.com/photo-1545156521-3d9c5d6e8b37'
				},
				{
					name: 'Regreso al hotel y check-out',
					description: 'Regreso al hotel para recoger el equipaje y hacer el check-out.',
					cost: 'Incluido en el costo del hotel',
					link: null,
					image: null
				}
			],
			restaurants: [
				{
					name: 'Fruccola',
					description: 'Café saludable con opciones de desayuno y almuerzo.',
					cost: '€10 por persona',
					link: 'https://www.fruccola.hu/',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				},
				{
					name: 'Hummus Bar',
					description:
						'Restaurante informal que ofrece platos de Oriente Medio, ideal para un almuerzo rápido.',
					cost: '€10 por persona',
					link: 'https://www.hummusbar.hu/',
					image: 'https://images.unsplash.com/photo-1545156521-3d9c5d6e8b37'
				},
				{
					name: 'Kollázs Brasserie & Bar',
					description:
						'Restaurante elegante con una gran variedad de platos internacionales, perfecto para una última cena en Budapest.',
					cost: '€30 por persona',
					link: 'https://www.kollazs.hu/',
					image: 'https://images.unsplash.com/photo-1566740933430-3a9f0f5e1c36'
				}
			]
		}
	]
};

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		trip: gemini_response
	};
}
