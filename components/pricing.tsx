"use client";

import pricingPlans from "@/lib/plans";
import { Instagram } from "lucide-react";
import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useTranslations } from "next-intl";

export default function Pricing() {
	const titleRef = useScrollReveal();
	const t = useTranslations("Pricing");

	return (
		<section className="py-16 md:py-24 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div ref={titleRef as any} className="text-center mb-16 scroll-reveal">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
						{t("titleLine1")}
						<br />
						{t("titleLine2")}
					</h2>
					<p className="text-lg text-foreground/70">
						{t("description")}
					</p>
				</div>

				{/* Pricing Cards */}
				<div className="grid md:grid-cols-3 gap-8">
					{pricingPlans.map((plan, idx) => (
						<div
							key={idx}
							className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
								plan.isPopular
									? "bg-golden-gradient text-primary-foreground ring-4 ring-[#C6A664]/20 transform md:scale-105 shadow-lg shadow-[#C6A664]/25"
									: "bg-card border-2 border-border text-foreground hover:shadow-xl"
							} animate-fade-in-up`}
							style={{ animationDelay: `${idx * 0.1}s` }}
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
													: "bg-golden-gradient"
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
								className={`flex items-center justify-center w-full py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
									plan.isPopular
										? "bg-primary-foreground text-golden-gradient hover:bg-opacity-90"
										: "bg-golden-gradient text-primary-foreground hover:opacity-90 shadow-md shadow-[#C6A664]/20"
								}`}
							>
								{t("bookViaInstagram")}{" "}
								<Instagram className="mx-2" />
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
