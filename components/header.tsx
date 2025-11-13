"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 bg-background border-b border-border">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-2">
						<div className="w-8 h-8 bg-primary rounded-full"></div>
						<span className="text-2xl font-bold text-foreground">
							Logo
						</span>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center gap-8">
						<a
							href="#home"
							className="text-foreground hover:text-primary transition"
						>
							Home
						</a>
						<a
							href="#services"
							className="text-foreground hover:text-primary transition"
						>
							Service
						</a>
						<a
							href="#about"
							className="text-foreground hover:text-primary transition"
						>
							About Us
						</a>
						<a
							href="#blog"
							className="text-foreground hover:text-primary transition"
						>
							Blog
						</a>
						<a
							href="#faq"
							className="text-foreground hover:text-primary transition"
						>
							FAQs
						</a>
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
							className="block text-foreground hover:text-primary"
						>
							Home
						</a>
						<a
							href="#services"
							className="block text-foreground hover:text-primary"
						>
							Service
						</a>
						<a
							href="#about"
							className="block text-foreground hover:text-primary"
						>
							About Us
						</a>
						<a
							href="#blog"
							className="block text-foreground hover:text-primary"
						>
							Blog
						</a>
						<a
							href="#faq"
							className="block text-foreground hover:text-primary"
						>
							FAQs
						</a>
					</div>
				)}
			</nav>
		</header>
	);
}
