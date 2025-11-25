const pricingPlans = [
	{
		id: 1,
		title: "FACIALS & PEELS", // Заголовок первой карточки
		price: "$100", // Стартовая цена для крупного шрифта
		period: "starting from", // Приписка (опционально)
		isPopular: false, // Обычный стиль (белая карточка)
		features: [
			"Facials (3 types) – $100–$300",
			"Seasonal Facial Peeling – $100",
			"Carboxy Therapy – $100",
			"Mandelic Peel – $150",
			"Yellow Peel – $150",
		],
		buttonText: "Book Facial",
	},
	{
		id: 2,
		title: "PREMIUM DEVICES", // Заголовок центральной (розовой) карточки
		price: "$250", // Средний чек или стартовая цена
		period: "starting from",
		isPopular: true, // Флаг для выделения цветом (розовый фон)
		features: [
			"Morpheus8 (Face Lift) – $400",
			"CO2 Laser (Resurfacing) – $500",
			"Intimate Chair (Emsella) – $300",
			"Couperose Removal – $250",
			"Endospheres Therapy – $150",
		],
		buttonText: "Choose Premium",
	},
	{
		id: 3,
		title: "LASER & BODY", // Заголовок третьей карточки
		price: "$100",
		period: "starting from",
		isPopular: false, // Обычный стиль
		features: [
			"Laser Hair Removal – $150",
			"Carbon Laser Peel – $100",
			"Fat-Reducing Cavitation – $150",
			"Teeth Whitening – $100",
			"Tattoo Removal – from $100",
			"Papilloma Removal – $10/ea",
		],
		buttonText: "Book Session",
	},
];

export default pricingPlans;
