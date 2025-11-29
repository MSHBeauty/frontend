"use client";

export default function Contact() {
	return (
		<section className="py-16 md:py-24 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					{/* Left Image */}
					<div className="relative hidden md:block">
						<div className="absolute -left-10 top-1/2 -translate-y-1/2 w-80 h-80 bg-primary rounded-full -z-0"></div>
						<div className="relative z-10 rounded-full overflow-hidden w-72 h-72 mx-auto">
							<img
								src="/beauty-woman-portrait-spa.jpg"
								alt="Contact"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>

					{/* Right Form */}
					<div>
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
								href="https://instagram.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-4 group"
							>
								<div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center transition-transform group-hover:scale-110">
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
									Подпишитесь и запишитесь в Instagram
								</span>
							</a>
						</div>

						<div className="mt-8 pt-8 border-t border-border space-y-2 text-sm">
							<p>
								<strong>Сомервилль, Нью-Йорк 210 USSP</strong>
							</p>
							<p className="text-foreground/70">
								+880 012-423-4453 · +880 89 567 57 29
							</p>
							<p className="text-foreground/70">
								hello@luxure.com
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
