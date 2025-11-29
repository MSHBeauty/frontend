"use client";

import Link from "next/link";

export default function Hero() {
	return (
		<section className="relative py-12 md:py-20 overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
					{/* Left Content */}
					<div className="z-10">
						<div className="inline-block bg-muted px-4 py-2 rounded-full text-sm font-medium text-foreground mb-6">
							✨ Лучший выбор 2024 года - Выбор Vogue
						</div>

						<h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
							ПРЕОБРАЗИТЕ
							<br />
							СВОЙ ДЕНЬ С
							<br />
							<span className="text-primary">РОСКОШНЫМ</span>{" "}
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
								className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition inline-flex items-center gap-2"
							>
								Записаться на сеанс
								<span className="text-xl">→</span>
							</Link>
							<Link
								href="#services"
								className="text-primary font-semibold hover:text-primary/80 transition"
							>
								Изучить услуги →
							</Link>
						</div>
					</div>

					{/* Right Video */}
					<div className="relative">
						<div className="absolute -top-10 -right-10 w-80 h-80 bg-primary rounded-[3rem] -z-0"></div>
						<div className="relative z-10 rounded-[2.5rem] overflow-hidden">
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
