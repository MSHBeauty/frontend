"use client";

import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Contact() {
	const leftRef = useScrollReveal();
	const rightRef = useScrollReveal();

	return (
		<section className="py-16 md:py-24 bg-background" id="contact">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					{/* Left Image */}
					<div ref={leftRef as any} className="relative hidden md:block scroll-reveal-left">
						<div 
							className="absolute -left-10 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full -z-0 animate-float"
							style={{
								background: "linear-gradient(135deg, #C6A664 0%, #E7D9A5 40%, #B08D34 80%, #82622F 100%)",
								boxShadow: "0 6px 50px 0 rgba(198,166,100,0.25)",
							}}
						></div>
						<div className="relative z-10 rounded-full overflow-hidden w-72 h-72 mx-auto animate-scale-in">
							<img
								src="/owner.jpg"
								alt="Contact"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>

					{/* Right Form */}
					<div ref={rightRef as any} className="scroll-reveal-right">
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
							СВЯЖИТЕСЬ С НАМИ
							<br />
							СЕГОДНЯ!
						</h2>
						<p className="text-lg text-foreground/70 mb-8">
							Наша команда экспертов предоставляет первоклассные
							услуги с использованием премиальных продуктов.
						</p>

						<div className="flex flex-col items-start gap-6">
							<p className="text-lg text-foreground/70">
								Для записи и вопросов, пожалуйста, свяжитесь с
								нами в Instagram.
							</p>

							<a
								href="https://www.instagram.com/shaxlo_beauty_studio_ny"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-4 group"
							>
								<div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="white"
										viewBox="0 0 24 24"
										className="w-8 h-8"
									>
										<path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-.001 2.501A1.25 1.25 0 0116.5 8.25z" />
									</svg>
								</div>

								<span className="text-xl font-semibold text-foreground group-hover:underline">
									Shaxlo beauty studio NY
								</span>
							</a>
						</div>

						<div className="mt-8 pt-8 border-t border-border space-y-2 text-sm">
							<p>
								<strong>
									1662 Coney Island Avenue Brooklyn New York
									11230
								</strong>
							</p>
							<p className="text-foreground/70 flex items-center gap-2">
								<Link
									href="tel:+9175339999"
									className="hover:text-golden-gradient transition"
								>
									+9175339999
								</Link>{" "}
								·{" "}
								<Link
									href="tel:+9295540000"
									className="hover:text-golden-gradient transition"
								>
									+9295540000
								</Link>
							</p>
							<p className="text-foreground/70">
								mshcosmetologyspa@gmail.com
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
