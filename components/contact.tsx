"use client";

import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

export default function Contact() {
	const leftRef = useScrollReveal();
	const rightRef = useScrollReveal();
	const t = useTranslations("Contact");

	const contactInfo = [
		{
			icon: Phone,
			label: t("phoneLabel"),
			value: "+9175339999",
			href: "tel:+9175339999",
			value2: "+9295540000",
			href2: "tel:+9295540000",
		},
		{
			icon: Mail,
			label: t("emailLabel"),
			value: "mshcosmetologyspa@gmail.com",
			href: "mailto:mshcosmetologyspa@gmail.com",
		},
		{
			icon: MapPin,
			label: t("addressLabel"),
			value: t("address"),
		},
	];

	return (
		<section className="py-16 md:py-24 bg-background" id="contact">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
						{t("titleLine1")}
						<br />
						{t("titleLine2")}
					</h2>
					<p className="text-lg text-foreground/70 max-w-2xl mx-auto">
						{t("description")}
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12 items-start">
					{/* Left Image */}
					<div
						ref={leftRef as any}
						className="relative hidden md:block scroll-reveal-left"
					>
						<div
							className="absolute -left-10 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full -z-0 animate-float"
							style={{
								background:
									"linear-gradient(135deg, #C6A664 0%, #E7D9A5 40%, #B08D34 80%, #82622F 100%)",
								boxShadow:
									"0 6px 50px 0 rgba(198,166,100,0.25)",
							}}
						></div>
						<div className="relative z-10 rounded-3xl overflow-hidden shadow-xl">
							<img
								src="/owner.jpg"
								alt="Contact"
								className="w-full h-[600px] object-cover"
							/>
						</div>
					</div>

					{/* Right Contact Info */}
					<div
						ref={rightRef as any}
						className="scroll-reveal-right space-y-8"
					>
						<div>
							<p className="text-lg text-foreground/70 mb-6">
								{t("ctaText")}
							</p>

							<a
								href="https://www.instagram.com/shaxlo_beauty_studio_ny"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-4 group mb-8"
							>
								<div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
									<Instagram className="w-8 h-8 text-white" />
								</div>
								<span className="text-xl font-semibold text-foreground group-hover:underline">
									{t("instagramName")}
								</span>
							</a>
						</div>

						{/* Contact Information */}
						<div className="space-y-6">
							{contactInfo.map((info, idx) => {
								const Icon = info.icon;
								return (
									<div
										key={idx}
										className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-[#C6A664]/50 transition-colors"
									>
										<div className="w-12 h-12 rounded-xl bg-golden-gradient flex items-center justify-center flex-shrink-0">
											<Icon className="w-6 h-6 text-primary-foreground" />
										</div>
										<div className="flex-1">
											<p className="text-sm font-medium text-foreground/70 mb-1">
												{info.label}
											</p>
											{info.href ? (
												<div className="flex items-center gap-2 flex-wrap">
													<Link
														href={info.href}
														className="text-foreground hover:text-golden-gradient transition font-medium"
													>
														{info.value}
													</Link>
													{info.value2 && (
														<>
															<span className="text-foreground/30">
																·
															</span>
															<Link
																href={
																	info.href2!
																}
																className="text-foreground hover:text-golden-gradient transition font-medium"
															>
																{info.value2}
															</Link>
														</>
													)}
												</div>
											) : (
												<p className="text-foreground font-medium">
													{info.value}
												</p>
											)}
										</div>
									</div>
								);
							})}
						</div>

						{/* Business Hours */}
						<div className="pt-6 border-t border-border">
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 rounded-xl bg-golden-gradient flex items-center justify-center flex-shrink-0">
									<Clock className="w-6 h-6 text-primary-foreground" />
								</div>
								<div className="flex-1">
									<p className="text-sm font-medium text-foreground/70 mb-3">
										{t("hoursTitle")}
									</p>
									<ul className="space-y-2 text-sm">
										<li className="text-foreground">
											<strong>
												{t("hoursWeekdays")}
											</strong>
										</li>
										<li className="text-foreground/70">
											{t("hoursWeekend")}
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
