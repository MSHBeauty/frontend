"use client";

import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Hero() {
	const leftRef = useScrollReveal();
	const rightRef = useScrollReveal();

	return (
		<section className="relative py-12 md:py-20 overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
					{/* Left Content */}
					<div
						ref={leftRef as any}
						className="z-10 animate-fade-in-left"
					>
						<div className="inline-block bg-muted px-4 py-2 rounded-full text-sm font-medium text-foreground mb-6 animate-fade-in-down">
							✨ Лучший выбор 2024 года - Выбор Vogue
						</div>

						<h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
							ПРЕОБРАЗИТЕ
							<br />
							СВОЙ ДЕНЬ С
							<br />
							<span className="text-golden-gradient">
								РОСКОШНЫМ
							</span>{" "}
							УХОДОМ
						</h1>

						<p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-lg">
							В Msh Beauty наш премиум-уход за кожей поможет вам
							стать еще красивее, подчеркнуть лучшее в вашей коже
							и оставить вас уверенными и сияющими.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 items-start">
							<Link
								href="#contact"
								className="bg-golden-gradient text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-[#C6A664]/25 hover:shadow-xl hover:shadow-[#C6A664]/40"
							>
								Записаться на сеанс
								<span className="text-xl transition-transform inline-block group-hover:translate-x-1">
									→
								</span>
							</Link>
							<Link
								href="#services"
								className="text-golden-gradient font-semibold hover:opacity-80 hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-2"
							>
								Изучить услуги →
							</Link>
						</div>
					</div>

					{/* Right Video */}
					<div
						ref={rightRef as any}
						className="relative animate-fade-in-right"
					>
						<div
							className="absolute -top-10 -right-10 w-80 h-80 rounded-[3rem] z-0 animate-float"
							style={{
								background:
									"linear-gradient(135deg, #C6A664 0%, #E7D9A5 40%, #B08D34 80%, #82622F 100%)",
								boxShadow:
									"0 6px 50px 0 rgba(198,166,100,0.25)",
							}}
						></div>
						<div className="relative z-10 rounded-[2.5rem] overflow-hidden animate-scale-in">
							<video
								controls
								width="100%"
								poster="/luxury-beauty-woman-skincare.jpg"
								className="w-full h-[600px] object-cover"
							>
								<source
									src="https://files.catbox.moe/u7d14f.MOV"
									type="video/mp4"
								/>
							</video>
						</div>
					</div>
					{/* Image Below */}
					{/* <div className="relative">
						<div className="absolute -top-10 -right-10 w-80 h-80 bg-primary rounded-[3rem] -z-0"></div>
						<div className="relative z-10 rounded-[2.5rem] overflow-hidden">
							<img
								src="/luxury-beauty-woman-skincare.jpg"
								alt="Beauty model"
								className="w-full h-auto object-cover"
							/>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
}
