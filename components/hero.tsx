"use client";

import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useState, useRef, useEffect } from "react";

export default function Hero() {
	const leftRef = useScrollReveal();
	const rightRef = useScrollReveal();
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isPlaying, setIsPlaying] = useState(true);
	const [isMuted, setIsMuted] = useState(true);

	useEffect(() => {
		// Ensure video autoplays when component mounts
		if (videoRef.current) {
			videoRef.current.play().catch(console.error);
		}
	}, []);

	const togglePlayPause = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause();
			} else {
				videoRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	const toggleMute = () => {
		if (videoRef.current) {
			videoRef.current.muted = !isMuted;
			setIsMuted(!isMuted);
		}
	};

	return (
		<section className="relative py-12 md:py-20 overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
					{/* Left Content */}
					<div
						ref={leftRef as any}
						className="z-10 animate-fade-in-left"
					>
						<div className="inline-block bg-muted px-4 py-2 rounded-full text-sm font-medium text-foreground mb-6 animate-fade-in-down">
							✨ Лучший выбор 2024 года - Выбор Vogue
						</div>

						<h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
							ПРЕОБРАЗИТЕ
							<br />
							СВОЙ ДЕНЬ С
							<br />
							<span className="text-golden-gradient">
								РОСКОШНЫМ
							</span>{" "}
							УХОДОМ
						</h1>

						<p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-lg">
							В Msh Beauty наш премиум-уход за кожей поможет вам
							стать еще красивее, подчеркнуть лучшее в вашей коже
							и оставить вас уверенными и сияющими.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 items-start">
							<Link
								href="#contact"
								className="bg-golden-gradient text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-[#C6A664]/25 hover:shadow-xl hover:shadow-[#C6A664]/40"
							>
								Записаться на сеанс
								<span className="text-xl transition-transform inline-block group-hover:translate-x-1">
									→
								</span>
							</Link>
							<Link
								href="#services"
								className="text-golden-gradient font-semibold hover:opacity-80 hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-2"
							>
								Изучить услуги →
							</Link>
						</div>
					</div>

					{/* Right Video */}
					<div
						ref={rightRef as any}
						className="relative animate-fade-in-right"
					>
						<div
							className="absolute -top-10 -right-10 w-80 h-80 rounded-[3rem] z-0 animate-float"
							style={{
								background:
									"linear-gradient(135deg, #C6A664 0%, #E7D9A5 40%, #B08D34 80%, #82622F 100%)",
								boxShadow:
									"0 6px 50px 0 rgba(198,166,100,0.25)",
							}}
						></div>
						<div className="relative z-10 rounded-[2.5rem] overflow-hidden animate-scale-in group">
							<video
								ref={videoRef}
								autoPlay
								muted
								loop
								playsInline
								width="100%"
								poster="/luxury-beauty-woman-skincare.jpg"
								className="w-full h-[600px] object-cover cursor-pointer"
								onClick={togglePlayPause}
								onPlay={() => setIsPlaying(true)}
								onPause={() => setIsPlaying(false)}
							>
								<source
									src="https://files.catbox.moe/u7d14f.MOV"
									type="video/mp4"
								/>
							</video>
							{/* Custom Controls */}
							<div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<button
									onClick={(e) => {
										e.stopPropagation();
										togglePlayPause();
									}}
									className="bg-black/70 hover:bg-black/90 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
									aria-label={
										isPlaying ? "Пауза" : "Воспроизвести"
									}
								>
									{isPlaying ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="w-5 h-5"
										>
											<path
												fillRule="evenodd"
												d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
												clipRule="evenodd"
											/>
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="w-5 h-5"
										>
											<path
												fillRule="evenodd"
												d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
												clipRule="evenodd"
											/>
										</svg>
									)}
								</button>
								<button
									onClick={(e) => {
										e.stopPropagation();
										toggleMute();
									}}
									className="bg-black/70 hover:bg-black/90 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
									aria-label={
										isMuted
											? "Включить звук"
											: "Выключить звук"
									}
								>
									{isMuted ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="w-5 h-5"
										>
											<path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06z" />
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="w-5 h-5"
										>
											<path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06c3.293-3.293 3.293-8.65 0-11.943a.75.75 0 010-1.06z" />
											<path d="M15.932 7.884a.75.75 0 011.06 0 6.5 6.5 0 010 9.192.75.75 0 11-1.06-1.06a5 5 0 000-7.072.75.75 0 010-1.06z" />
										</svg>
									)}
								</button>
							</div>
						</div>
					</div>
					{/* Image Below */}
					{/* <div className="relative">
						<div className="absolute -top-10 -right-10 w-80 h-80 bg-primary rounded-[3rem] -z-0"></div>
						<div className="relative z-10 rounded-[2.5rem] overflow-hidden">
							<img
								src="/luxury-beauty-woman-skincare.jpg"
								alt="Beauty model"
								className="w-full h-auto object-cover"
							/>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
}
