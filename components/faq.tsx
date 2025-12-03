"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
	const [open, setOpen] = useState(0);

	const faqs = [
		{
			question: "Какие услуги вы предлагаете?",
			answer: "Мы предоставляем широкий спектр услуг по красоте и уходу за кожей, включая процедуры для лица, увлажнение, осветление кожи и многое другое с использованием премиальных продуктов.",
		},
		{
			question: "Как записаться на прием?",
			answer: "Вы можете записаться на прием через наш веб-сайт, позвонить нам напрямую или посетить наш салон. Мы предлагаем гибкие варианты расписания.",
		},
		{
			question:
				"Ваши продукты безопасны и подходят для чувствительной кожи?",
			answer: "Да, все наши продукты протестированы дерматологами и подходят для всех типов кожи, включая чувствительную. Мы используем продукты премиум-качества.",
		},
		{
			question: "Вы предлагаете подарочные сертификаты?",
			answer: "Да, мы предлагаем подарочные сертификаты на все наши услуги. Идеально подходит для подарков друзьям и семье.",
		},
		{
			question: "Какова ваша политика отмены?",
			answer: "При отмене за 24 часа возвращается полная сумма. Поздняя отмена может повлечь за собой сборы.",
		},
	];

	return (
		<section id="faq" className="py-16 md:py-24 bg-background">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
						ЧАСТО ЗАДАВАЕМЫЕ
						<br />
						ВОПРОСЫ
					</h2>
					<p className="text-lg text-foreground/70">
						Наша команда экспертов отвечает на частые вопросы
					</p>
				</div>

				{/* FAQ Items */}
				<div className="space-y-4">
					{faqs.map((faq, idx) => (
						<div
							key={idx}
							className="border-b-2 border-border pb-4"
						>
							<button
								onClick={() => setOpen(open === idx ? -1 : idx)}
								className="w-full flex items-center justify-between py-4 text-left group"
							>
								<span
									className={`text-lg font-semibold transition ${
										open === idx
											? "text-golden-gradient"
											: "text-foreground"
									}`}
								>
									{faq.question}
								</span>
								<span
									className={`text-golden-gradient transition transform ${
										open === idx ? "rotate-180" : ""
									}`}
								>
									<ChevronDown size={24} />
								</span>
							</button>

							{open === idx && (
								<div className="pb-4 text-foreground/70 leading-relaxed">
									{faq.answer}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
