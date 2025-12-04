"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useTranslations } from "next-intl";

export default function FAQ() {
	const [open, setOpen] = useState(0);
	const titleRef = useScrollReveal();
	const t = useTranslations("FAQ");

	const faqKeys = [
		"services",
		"booking",
		"safety",
		"giftCards",
		"cancellation",
	] as const;

	return (
		<section id="faq" className="py-16 md:py-24 bg-background">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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

				{/* FAQ Items */}
				<div className="space-y-4">
					{faqKeys.map((key, idx) => (
						<div
							key={idx}
							className="border-b-2 border-border pb-4 animate-fade-in-up"
							style={{ animationDelay: `${idx * 0.1}s` }}
						>
							<button
								onClick={() => setOpen(open === idx ? -1 : idx)}
								className="w-full flex items-center justify-between py-4 text-left group hover:opacity-80 transition-opacity"
							>
								<span
									className={`text-lg font-semibold transition ${
										open === idx
											? "text-golden-gradient"
											: "text-foreground"
									}`}
								>
									{t(`items.${key}.q`)}
								</span>
								<span
									className={`text-golden-gradient transition transform ${
										open === idx ? "rotate-180" : ""
									}`}
								>
									<ChevronDown size={24} />
								</span>
							</button>

							{open === idx && (
								<div className="pb-4 text-foreground/70 leading-relaxed animate-fade-in-down">
									{t(`items.${key}.a`)}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
