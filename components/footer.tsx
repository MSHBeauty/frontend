"use client";

import { Instagram } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
	const t = useTranslations("Footer");

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
							{t("description")}
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-bold mb-4">
							{t("quickLinks")}
						</h4>
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
						<h4 className="font-bold mb-4">
							{t("hoursTitle")}
						</h4>
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
