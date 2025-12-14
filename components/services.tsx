"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useTranslations } from "next-intl";

export default function Services() {
	const [activeTab, setActiveTab] = useState(0);
	const titleRef = useScrollReveal();
	const t = useTranslations("Services");

	const categories = [
		{ icon: "✨", key: "facials" as const },
		{ icon: "🔥", key: "laser" as const },
	];

	const itemKeys: Record<(typeof categories)[number]["key"], string[]> = {
		facials: [
			"classic",
			"deepClean",
			"antiAging",
			"seasonalPeel",
			"carboxy",
			"mandelic",
			"yellow",
		],
		laser: [
			"fullBodyLaser",
			"morpheus",
			"endosphere",
			"co2",
			"emsella",
			"couperose",
			"tattoo",
			"carbonPeel",
			"cavitation",
			"papilloma",
			"whitening",
		],
	};

	return (
		<section id="services" className="py-16 md:py-24 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					ref={titleRef as any}
					className="text-center mb-12 scroll-reveal"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
						{t("title")}
					</h2>
					<p className="text-lg text-foreground/70 max-w-3xl mx-auto">
						{t("subtitle")}
					</p>
				</div>

				<div className="max-w-5xl mx-auto">
					<div className="flex gap-3 mb-8 flex-wrap justify-center">
						{categories.map((category, index) => (
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
									{t(`categories.${category.key}.title`)}
								</span>
							</button>
						))}
					</div>

					<div className="grid md:grid-cols-2 gap-3" key={activeTab}>
						{itemKeys[categories[activeTab].key].map(
							(itemKey, index) => (
								<div
									key={index}
									className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:scale-[1.02] transition-all duration-300 hover:border-[#C6A664]/50 group animate-fade-in-up"
									style={{
										animationDelay: `${index * 0.05}s`,
									}}
								>
									<div className="flex justify-between items-start gap-4">
										<h4 className="text-foreground font-medium group-hover:text-golden-gradient transition-colors text-balance">
											{t(
												`categories.${categories[activeTab].key}.items.${itemKey}`
											)}
										</h4>
										{/* <span className="font-bold text-primary text-lg whitespace-nowrap">
										{service.price}
									</span> */}
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
