"use client";

import { useState, useTransition } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const t = useTranslations("Header");
	const [pending, startTransition] = useTransition();
	const locale = useLocale() as "ru" | "en";

	const setLocale = (locale: "ru" | "en") => {
		document.cookie = `locale=${locale}; path=/; max-age=31536000`;
		startTransition(() => {
			window.location.reload();
		});
	};

	return (
		<header className="sticky top-0 z-50 bg-background border-b border-border">
			{/* Добавляем стили для анимации прямо здесь, либо можно перенести в global.css */}
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

			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
				<div className="flex justify-between items-center">
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

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center gap-8">
						<nav className="flex items-center gap-8">
							<a
								href="#home"
								className="text-foreground hover:text-golden-gradient transition"
							>
								{t("home")}
							</a>
							<a
								href="#services"
								className="text-foreground hover:text-golden-gradient transition"
							>
								{t("services")}
							</a>
							<a
								href="#about"
								className="text-foreground hover:text-golden-gradient transition"
							>
								{t("about")}
							</a>
							<a
								href="#blog"
								className="text-foreground hover:text-golden-gradient transition"
							>
								{t("blog")}
							</a>
							<a
								href="#faq"
								className="text-foreground hover:text-golden-gradient transition"
							>
								{t("faq")}
							</a>
						</nav>
						{/* <div className="flex items-center gap-1 rounded-full bg-muted px-1 py-0.5 text-xs font-medium">
							<button
								type="button"
								onClick={() => setLocale("ru")}
								disabled={pending}
								className="px-2 py-1 rounded-full data-[active=true]:bg-golden-gradient data-[active=true]:text-primary-foreground transition-colors"
								data-active={locale === "ru"}
							>
								RU
							</button>
							<button
								type="button"
								onClick={() => setLocale("en")}
								disabled={pending}
								className="px-2 py-1 rounded-full data-[active=true]:bg-golden-gradient data-[active=true]:text-primary-foreground transition-colors"
								data-active={locale === "en"}
							>
								EN
							</button>
						</div> */}
					</div>

					<div className="flex items-center gap-2">
						<div className="flex items-center gap-1 rounded-full bg-muted px-1 py-0.5 text-xs font-medium">
							{locale === "en" && (
								<button
									type="button"
									onClick={() => setLocale("ru")}
									disabled={pending}
									className="px-2 py-1 rounded-full data-[active=true]:bg-golden-gradient data-[active=true]:text-primary-foreground transition-colors"
								>
									RU
								</button>
							)}
							{locale === "ru" && (
								<button
									type="button"
									onClick={() => setLocale("en")}
									disabled={pending}
									className="px-2 py-1 rounded-full data-[active=true]:bg-golden-gradient data-[active=true]:text-primary-foreground transition-colors"
								>
									EN
								</button>
							)}
						</div>

						{/* Mobile Menu Button */}
						<button
							className="md:hidden"
							onClick={() => setIsOpen(!isOpen)}
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="md:hidden mt-4 space-y-4 pb-4">
						<a
							href="#home"
							className="block text-foreground hover:text-golden-gradient"
						>
							{t("home")}
						</a>
						<a
							href="#services"
							className="block text-foreground hover:text-golden-gradient"
						>
							{t("services")}
						</a>
						<a
							href="#about"
							className="block text-foreground hover:text-golden-gradient"
						>
							{t("about")}
						</a>
						<a
							href="#blog"
							className="block text-foreground hover:text-golden-gradient"
						>
							{t("blog")}
						</a>
						<a
							href="#faq"
							className="block text-foreground hover:text-golden-gradient"
						>
							{t("faq")}
						</a>

						<div className="flex items-center gap-2 pt-2">
							<button
								type="button"
								onClick={() => setLocale("ru")}
								disabled={pending}
								className="px-3 py-1 rounded-full border border-border text-xs font-medium hover:bg-golden-gradient hover:text-primary-foreground transition-colors"
							>
								RU
							</button>
							<button
								type="button"
								onClick={() => setLocale("en")}
								disabled={pending}
								className="px-3 py-1 rounded-full border border-border text-xs font-medium hover:bg-golden-gradient hover:text-primary-foreground transition-colors"
							>
								EN
							</button>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
}
