"use client";

import { Instagram } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-golden-gradient text-primary-foreground">
			{/* Top Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
				<div className="grid md:grid-cols-4 gap-8 mb-12">
					{/* Brand */}
					<div>
						<div className="flex items-center gap-2 mb-4">
							<div
								className="w-8 h-8 bg-primary-foreground rounded-full bg-image"
								style={{
									backgroundImage: "/icon.svg",
									backgroundRepeat: "no-repeat",
									backgroundPosition: "center",
								}}
							></div>
						</div>
						<p className="text-sm opacity-90">
							Преобразите свою рутину красоты с нашими
							премиальными услугами по уходу за кожей и
							оздоровлению.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-bold mb-4">Быстрые ссылки</h4>
						<ul className="space-y-2 text-sm opacity-90">
							<li>
								<a
									href="#home"
									className="hover:opacity-100 transition"
								>
									Главная
								</a>
							</li>
							<li>
								<a
									href="#services"
									className="hover:opacity-100 transition"
								>
									Услуги
								</a>
							</li>
							<li>
								<a
									href="#home"
									className="hover:opacity-100 transition"
								>
									О нас
								</a>
							</li>
							<li>
								<a
									href="#contact"
									className="hover:opacity-100 transition"
								>
									Контакты
								</a>
							</li>
						</ul>
					</div>

					{/* Services */}
					{/* Hours */}
					<div>
						<h4 className="font-bold mb-4">Часы работы</h4>
						<ul className="space-y-2 text-sm opacity-90">
							<li>Понедельник-Пятница: 10:00 - 18:00</li>
							<li>
								Выходные дни: 10:00 - 18:00 (часы могут
								меняться)
							</li>
						</ul>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					{/* Left */}
					<div className="text-sm opacity-90">
						<p>© 2025 Msh Beauty. Все права защищены.</p>
					</div>

					{/* Social Icons */}
					<div className="flex gap-4">
						{/* <a href="#" className="hover:opacity-100 transition">
							<Facebook size={20} />
						</a> */}
						<a href="#" className="hover:opacity-100 transition">
							<Instagram size={20} />
						</a>
						{/* <a href="#" className="hover:opacity-100 transition">
							<Twitter size={20} />
						</a>
						<a href="#" className="hover:opacity-100 transition">
							<Linkedin size={20} />
						</a> */}
					</div>
				</div>
			</div>
		</footer>
	);
}
