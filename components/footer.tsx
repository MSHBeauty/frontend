"use client";

import { Instagram } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
	const t = useTranslations("Footer");

	return (
		<footer className="bg-golden-gradient text-primary-foreground">
			<style jsx global>{`
				@keyframes flip-logo {
					0%,
					40% {
						transform: rotateY(0deg);
					} /* Ждем на первом лого */
					50%,
					90% {
						transform: rotateY(180deg);
					} /* Ждем на втором лого */
					100% {
						transform: rotateY(360deg);
					} /* Возвращаемся */
				}
				.animate-logo-flip {
					animation: flip-logo 6s infinite ease-in-out;
				}
			`}</style>
			{/* Top Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
				<div className="grid md:grid-cols-4 gap-8 mb-12">
					{/* Brand */}
					<div>
						<div className="flex items-center gap-2 mb-4">
							<div className="flex items-center gap-2">
								{/* --- НАЧАЛО АНИМАЦИИ ЛОГОТИПА --- */}
								<div className="group relative w-[60px] h-[60px] [perspective:1000px]">
									<div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] animate-logo-flip">
										{/* Логотип 1 (Лицевая сторона) */}
										<div className="absolute inset-0 w-full h-full flex items-center justify-center [backface-visibility:hidden]">
											<Image
												width={200}
												height={200}
												src="/icon.svg" // Твой первый логотип
												alt="logo front"
												className="w-full h-full object-contain"
											/>
										</div>

										{/* Логотип 2 (Задняя сторона) */}
										<div className="absolute inset-0 w-full h-full flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
											<Image
												width={200}
												height={200}
												src="/icon2.png"
												alt="logo back"
												className="w-full h-full object-contain"
											/>
										</div>
									</div>
								</div>
								{/* --- КОНЕЦ АНИМАЦИИ ЛОГОТИПА --- */}
							</div>
						</div>
						<p className="text-sm opacity-90">{t("description")}</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-bold mb-4">{t("quickLinks")}</h4>
						<ul className="space-y-2 text-sm opacity-90">
							<li>
								<a
									href="#home"
									className="hover:opacity-100 transition"
								>
									{t("linkHome")}
								</a>
							</li>
							<li>
								<a
									href="#services"
									className="hover:opacity-100 transition"
								>
									{t("linkServices")}
								</a>
							</li>
							<li>
								<a
									href="#home"
									className="hover:opacity-100 transition"
								>
									{t("linkAbout")}
								</a>
							</li>
							<li>
								<a
									href="#contact"
									className="hover:opacity-100 transition"
								>
									{t("linkContact")}
								</a>
							</li>
						</ul>
					</div>

					{/* Hours */}
					<div>
						<h4 className="font-bold mb-4">{t("hoursTitle")}</h4>
						<ul className="space-y-2 text-sm opacity-90">
							<li>{t("hoursWeekdays")}</li>
							<li>{t("hoursWeekend")}</li>
						</ul>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					{/* Left */}
					<div className="text-sm opacity-90">
						<p>{t("copyright")}</p>
					</div>

					{/* Social Icons */}
					<div className="flex gap-4">
						<a
							href="https://www.instagram.com/shaxlo_beauty_studio_ny"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:opacity-100 transition"
						>
							<Instagram size={20} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
