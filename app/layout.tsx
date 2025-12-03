import type React from "react";
import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const lora = Lora({
	subsets: ["latin", "cyrillic"],
	variable: "--font-display",
	display: "swap",
});

const inter = Inter({
	subsets: ["latin", "cyrillic"],
	variable: "--font-sans",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Msh Beauty - Премиум Красота и Уход за Кожей",
	description:
		"Преобразите свой день с нашими роскошными услугами красоты и ухода за кожей. Мы предлагаем широкий спектр услуг, включая массаж, SPA-процедуры, косметологию и многое другое.",
	openGraph: {
		images: [
			{
				url: "https://mshbeauty.com/owner.jpg",
				width: 1200,
				height: 630,
			},
		],
	},
	icons: {
		icon: [
			{
				url: "/icon.svg",
				media: "(prefers-color-scheme: light)",
			},
			{
				url: "/icon.svg",
				media: "(prefers-color-scheme: dark)",
			},
			{
				url: "/icon.svg",
				type: "image/svg+xml",
			},
		],
		apple: "/icon.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body
				className={`${inter.variable} ${lora.variable} font-sans antialiased`}
			>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
