"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Gallery() {
	const [current, setCurrent] = useState(0);
	const galleryRef = useScrollReveal();

	const images = [
		{
			id: 1,
			src: "/beauty-woman-portrait-spa.jpg",
			alt: "Beauty portrait woman",
		},
		{
			id: 2,
			src: "/luxury-beauty-woman-skincare.jpg",
			alt: "Luxury beauty skincare",
		},
		{ id: 3, src: "/owner.jpg", alt: "Beauty spa portrait" },
	];

	const handlePrev = () =>
		setCurrent(current === 0 ? images.length - 1 : current - 1);
	const handleNext = () =>
		setCurrent(current === images.length - 1 ? 0 : current + 1);

	return (
		<section className="py-16 md:py-24 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
					Галерея
				</h2>
				<div ref={galleryRef as any} className="relative">
					{/* Gallery Grid */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
						{images.map((img, idx) => (
							<div
								key={img.id}
								className={`relative h-64 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ${
									idx === current
										? "ring-4 ring-[#C6A664] scale-105 opacity-100"
										: "opacity-60 hover:opacity-100 hover:scale-105"
								} animate-fade-in-up`}
								style={{ animationDelay: `${idx * 0.1}s` }}
								onClick={() => setCurrent(idx)}
							>
								<img
									src={img.src}
									alt={img.alt}
									className="w-full h-full object-cover"
								/>
							</div>
						))}
					</div>

					{/* Navigation */}
					<div className="flex justify-center gap-4">
						<button
							onClick={handlePrev}
							className="bg-golden-gradient text-primary-foreground p-3 rounded-full hover:opacity-90 hover:scale-110 transition-all duration-300 shadow-md shadow-[#C6A664]/20"
						>
							<ChevronLeft size={20} />
						</button>
						<div className="flex gap-2 items-center">
							{images.map((_, idx) => (
								<button
									key={idx}
									onClick={() => setCurrent(idx)}
									className={`h-3 rounded-full transition-all duration-300 ${
										idx === current
											? "bg-golden-gradient w-8"
											: "bg-border w-3 hover:bg-[#C6A664]/50"
									}`}
								/>
							))}
						</div>
						<button
							onClick={handleNext}
							className="bg-golden-gradient text-primary-foreground p-3 rounded-full hover:opacity-90 hover:scale-110 transition-all duration-300 shadow-md shadow-[#C6A664]/20"
						>
							<ChevronRight size={20} />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
