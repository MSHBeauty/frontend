"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { useTranslations } from "next-intl";

export default function Location() {
	const titleRef = useScrollReveal();
	const mapRef = useScrollReveal();
	const t = useTranslations("Location");

	// Google Maps embed URL for the address
	// Using embed format with the address coordinates and location
	// Coordinates: approximately 40.622651, -73.971468
	const encodedAddress = encodeURIComponent(
		"1662 Coney Island Avenue, Brooklyn, NY 11230"
	);
	const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

	return (
		<section className="py-16 md:py-24 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					ref={titleRef as any}
					className="text-center mb-12 scroll-reveal"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
						{t("title")}
					</h2>
					<p className="text-lg text-foreground/70 mb-8">
						{t("address")}
					</p>
					<a
						href="https://maps.app.goo.gl/rhwXbfvALUv9YGpYA?g_st=it"
						target="_blank"
						rel="noopener noreferrer"
						className="text-golden-gradient hover:underline transition inline-block"
					>
						{t("viewOnMap")}
					</a>
				</div>

				<div
					ref={mapRef as any}
					className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-xl border-2 border-border scroll-reveal"
				>
					<iframe
						src={mapUrl}
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className="w-full h-full"
						title={t("title")}
					/>
				</div>
			</div>
		</section>
	);
}
