"use client";

import pricingPlans from "@/lib/plans";
import { Instagram } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
	return (
		<section className="py-16 md:py-24 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
						ПОБАЛУЙТЕ СЕБЯ
						<br />
						ПРИ ЛЮБОМ БЮДЖЕТЕ
					</h2>
					<p className="text-lg text-foreground/70">
						Наша команда экспертов предоставляет первоклассные
						услуги с использованием премиальных продуктов для
						достижения потрясающих результатов.
					</p>
				</div>

				{/* Pricing Cards */}
				<div className="grid md:grid-cols-3 gap-8">
					{pricingPlans.map((plan, idx) => (
						<div
							key={idx}
							className={`relative rounded-3xl p-8 ${
								plan.isPopular
									? "bg-primary text-primary-foreground ring-4 ring-primary/20 transform md:scale-105"
									: "bg-card border-2 border-border text-foreground"
							}`}
						>
							<h3
								className={`font-bold text-lg mb-4 ${
									plan.isPopular
										? "text-primary-foreground"
										: ""
								}`}
							>
								{plan.title}
							</h3>
							<div className="text-5xl font-bold mb-8">
								{plan.price}
							</div>
							<ul className="space-y-3 mb-8">
								{plan.features.map((feature, i) => (
									<li
										key={i}
										className="flex items-center gap-3"
									>
										<span
											className={`w-5 h-5 rounded-full ${
												plan.isPopular
													? "bg-primary-foreground"
													: "bg-primary"
											}`}
										></span>
										<span className="text-sm">
											{feature}
										</span>
									</li>
								))}
							</ul>
							<a
								href="https://www.instagram.com/shaxlo_beauty_studio_ny"
								target="_blank"
								rel="noopener noreferrer"
								className={`flex items-center justify-center w-full py-3 rounded-full font-semibold transition ${
									plan.isPopular
										? "bg-primary-foreground text-primary hover:bg-opacity-90"
										: "bg-primary text-primary-foreground hover:bg-primary/90"
								}`}
							>
								Book via <Instagram className="mx-2" />
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
