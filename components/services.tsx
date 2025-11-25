"use client";

import { useState } from "react";

export default function Services() {
	const [activeTab, setActiveTab] = useState(0);

	const services = [
		{
			icon: "✨",
			title: "Facials & Peelings",
			items: [
				{ name: "Classic Facial", price: "$100" },
				{ name: "Deep Cleansing Facial", price: "$200" },
				{ name: "Anti-Aging Facial", price: "$300" },
				{ name: "Seasonal Facial Peeling", price: "$100" },
				{ name: "Carboxy Therapy", price: "$100" },
				{ name: "Mandelic Peel", price: "$150" },
				{ name: "Yellow Peel", price: "$150" },
			],
		},
		{
			icon: "🔥",
			title: "Laser Related Treatments",
			items: [
				{ name: "Laser Hair Removal - Full Body", price: "$150" },
				{
					name: "Morpheus8 - Skin Tightening & Face Lift",
					price: "$400",
				},
				{ name: "Endospheres Therapy - Full Body", price: "$150" },
				{ name: "CO2 Laser - Skin Resurfacing", price: "$500" },
				{ name: "Intimate Chair - Emsella", price: "$300" },
				{ name: "Couperose Removal - Full Face", price: "$250" },
				{ name: "Tattoo Removal - Brows", price: "$100" },
				{ name: "Carbon Laser Peel", price: "$100" },
				{ name: "Fat-Reducing Stomach Cavitation", price: "$150" },
				{ name: "Papilloma Removal", price: "$10" },
				{ name: "Teeth Whitening", price: "$100" },
			],
		},
	];

	return (
		<section id="services" className="py-16 md:py-24 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center text-balance">
					Services & Pricing
				</h2>

				<div className="max-w-5xl mx-auto">
					<div className="flex gap-3 mb-8 flex-wrap justify-center">
						{services.map((category, index) => (
							<button
								key={index}
								onClick={() => setActiveTab(index)}
								className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
									activeTab === index
										? "bg-primary text-primary-foreground shadow-lg scale-105"
										: "bg-card text-foreground/70 hover:bg-accent hover:text-white border border-border"
								}`}
							>
								<span className="text-xl">{category.icon}</span>
								<span className="text-sm md:text-base">
									{category.title}
								</span>
							</button>
						))}
					</div>

					<div
						className="grid md:grid-cols-2 gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500"
						key={activeTab}
					>
						{services[activeTab].items.map((service, index) => (
							<div
								key={index}
								className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:scale-[1.02] transition-all hover:border-primary/50 group"
							>
								<div className="flex justify-between items-start gap-4">
									<h4 className="text-foreground font-medium group-hover:text-primary transition-colors text-balance">
										{service.name}
									</h4>
									{/* <span className="font-bold text-primary text-lg whitespace-nowrap">
										{service.price}
									</span> */}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
