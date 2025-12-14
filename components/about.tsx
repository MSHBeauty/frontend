"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { useTranslations } from "next-intl";
import { Award, Sparkles, Heart } from "lucide-react";

export default function About() {
	const titleRef = useScrollReveal();
	const leftRef = useScrollReveal();
	const rightRef = useScrollReveal();
	const t = useTranslations("About");

	const benefits = [
		{
			icon: Award,
			titleKey: "benefit1Title",
			descriptionKey: "benefit1Description",
		},
		{
			icon: Sparkles,
			titleKey: "benefit2Title",
			descriptionKey: "benefit2Description",
		},
		{
			icon: Heart,
			titleKey: "benefit3Title",
			descriptionKey: "benefit3Description",
		},
	];

	return (
		<section id="about" className="py-16 md:py-24 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					ref={titleRef as any}
					className="text-center mb-16 scroll-reveal"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
						{t("titleLine1")}
						<br />
						{t("titleLine2")}
					</h2>
					<p className="text-lg text-foreground/70 max-w-3xl mx-auto">
						{t("description")}
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
					{/* Left Content */}
					<div ref={leftRef as any} className="scroll-reveal-left">
						<div className="space-y-6">
							<p className="text-lg text-foreground/80 leading-relaxed">
								{t("paragraph1")}
							</p>
							<p className="text-lg text-foreground/80 leading-relaxed">
								{t("paragraph2")}
							</p>
						</div>
					</div>

					{/* Right Image */}
					<div
						ref={rightRef as any}
						className="relative scroll-reveal-right"
					>
						<div
							className="absolute -right-10 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full -z-0 animate-float"
							style={{
								background:
									"linear-gradient(135deg, #C6A664 0%, #E7D9A5 40%, #B08D34 80%, #82622F 100%)",
								boxShadow:
									"0 6px 50px 0 rgba(198,166,100,0.25)",
							}}
						></div>
						<div className="relative z-10 rounded-3xl overflow-hidden shadow-xl">
							<img
								src="/beauty-woman-portrait-spa.jpg"
								alt={t("titleLine1")}
								className="w-full h-[500px] object-cover"
							/>
						</div>
					</div>
				</div>

				{/* Benefits Grid */}
				<div className="grid md:grid-cols-3 gap-8 mt-16">
					{benefits.map((benefit, idx) => {
						const Icon = benefit.icon;
						return (
							<div
								key={idx}
								className="bg-card border-2 border-border rounded-3xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-up"
								style={{ animationDelay: `${idx * 0.1}s` }}
							>
								<div className="w-16 h-16 rounded-2xl bg-golden-gradient flex items-center justify-center mb-6">
									<Icon className="w-8 h-8 text-primary-foreground" />
								</div>
								<h3 className="text-2xl font-bold text-foreground mb-4">
									{t(benefit.titleKey)}
								</h3>
								<p className="text-foreground/70 leading-relaxed">
									{t(benefit.descriptionKey)}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
