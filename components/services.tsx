"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Services() {
	const [activeTab, setActiveTab] = useState(0);
	const titleRef = useScrollReveal();

	const services = [
		{
			icon: "✨",
			title: "Процедуры для лица и пилинги",
			items: [
				{ name: "Классическая процедура для лица", price: "$100" },
				{ name: "Глубоко очищающая процедура для лица", price: "$200" },
				{ name: "Антивозрастная процедура для лица", price: "$300" },
				{ name: "Сезонный пилинг для лица", price: "$100" },
				{ name: "Карбокситерапия", price: "$100" },
				{ name: "Миндальный пилинг", price: "$150" },
				{ name: "Желтый пилинг", price: "$150" },
			],
		},
		{
			icon: "🔥",
			title: "Лазерные процедуры",
			items: [
				{ name: "Лазерная эпиляция - Все тело", price: "$150" },
				{
					name: "Morpheus8 - Подтяжка кожи и лица",
					price: "$400",
				},
				{ name: "Эндосфера-терапия - Все тело", price: "$150" },
				{ name: "CO2 Лазер - Шлифовка кожи", price: "$500" },
				{ name: "Интимное кресло - Emsella", price: "$300" },
				{ name: "Удаление купероза - Все лицо", price: "$250" },
				{ name: "Удаление татуировок - Брови", price: "$100" },
				{ name: "Карбоновый лазерный пилинг", price: "$100" },
				{ name: "Жироудаляющая кавитация живота", price: "$150" },
				{ name: "Удаление папиллом", price: "$10" },
				{ name: "Отбеливание зубов", price: "$100" },
			],
		},
	];

	return (
		<section id="services" className="py-16 md:py-24 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 ref={titleRef as any} className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center text-balance scroll-reveal">
					Услуги и цены
				</h2>

				<div className="max-w-5xl mx-auto">
					<div className="flex gap-3 mb-8 flex-wrap justify-center">
						{services.map((category, index) => (
							<button
								key={index}
								onClick={() => setActiveTab(index)}
								className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
									activeTab === index
										? "bg-golden-gradient text-primary-foreground shadow-lg scale-105 shadow-[#C6A664]/25"
										: "bg-card text-foreground/70 hover:bg-accent hover:text-white hover:scale-105 border border-border"
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
						className="grid md:grid-cols-2 gap-3"
						key={activeTab}
					>
						{services[activeTab].items.map((service, index) => (
							<div
								key={index}
								className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:scale-[1.02] transition-all duration-300 hover:border-[#C6A664]/50 group animate-fade-in-up"
								style={{ animationDelay: `${index * 0.05}s` }}
							>
								<div className="flex justify-between items-start gap-4">
									<h4 className="text-foreground font-medium group-hover:text-golden-gradient transition-colors text-balance">
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
