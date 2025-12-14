"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { useTranslations } from "next-intl";
import { Instagram } from "lucide-react";

export default function InstagramSection() {
	const titleRef = useScrollReveal();
	const t = useTranslations("Instagram");

	// Instagram posts - можно заменить на реальные URL изображений из Instagram
	const posts = [
		{
			id: 1,
			src: "/beauty-woman-portrait-spa.jpg",
			alt: "Instagram post 1",
		},
		{
			id: 2,
			src: "/luxury-beauty-woman-skincare.jpg",
			alt: "Instagram post 2",
		},
		{
			id: 3,
			src: "/owner.jpg",
			alt: "Instagram post 3",
		},
	];

	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					ref={titleRef as any}
					className="text-center mb-12 scroll-reveal"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
						{t("title")}
					</h2>
					<p className="text-lg text-foreground/70 mb-8">
						{t("description")}
					</p>
					<a
						href="https://www.instagram.com/shaxlo_beauty_studio_ny"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-golden-gradient hover:underline font-semibold text-lg"
					>
						<Instagram className="w-6 h-6" />
						{t("followText")}
					</a>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{posts.map((post, idx) => (
						<a
							key={post.id}
							href="https://www.instagram.com/shaxlo_beauty_studio_ny"
							target="_blank"
							rel="noopener noreferrer"
							className="group relative overflow-hidden rounded-3xl aspect-square animate-fade-in-up hover:scale-105 transition-all duration-300"
							style={{ animationDelay: `${idx * 0.1}s` }}
						>
							<img
								src={post.src}
								alt={post.alt}
								className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div className="absolute bottom-4 left-4 right-4 flex items-center justify-center">
									<div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
										<Instagram className="w-5 h-5 text-[#E4405F]" />
										<span className="text-sm font-semibold text-foreground">
											View on Instagram
										</span>
									</div>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
