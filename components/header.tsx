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
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-2">
						<Image
							width={200}
							height={200}
							src="/icon.svg"
							alt="logo"
							className="w-15 h-15"
						/>
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
						<div className="flex items-center gap-1 rounded-full bg-muted px-1 py-0.5 text-xs font-medium">
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
						</div>
					</div>

					{/* <div className="hidden md:flex items-center gap-4">
						<button className="text-primary hover:text-primary/80 transition">
							Log In
						</button>
						<button className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition">
							Sign Up
						</button>
					</div> */}

					{/* Mobile Menu Button */}
					<button
						className="md:hidden"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
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
