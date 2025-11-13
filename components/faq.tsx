"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [open, setOpen] = useState(0)

  const faqs = [
    {
      question: "What service do you offer?",
      answer:
        "We provide a wide range of beauty and skincare services including facial treatments, moisturizing, skin brightening, and more using premium products.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment through our website, call us directly, or visit our physical location. We offer flexible scheduling options.",
    },
    {
      question: "Are your products safe and suitable for sensitive skin?",
      answer:
        "Yes, all our products are dermatologist tested and suitable for all skin types including sensitive skin. We use premium quality products.",
    },
    {
      question: "Do you offer gift vouchers?",
      answer: "Yes, we offer gift vouchers for all our services. Perfect for gifting to friends and family.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made 24 hours in advance receive a full refund. Late cancellations may incur charges.",
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            FREQUENTLY ASKED
            <br />
            QUESTIONS
          </h2>
          <p className="text-lg text-foreground/70">Our expert team answers common questions</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b-2 border-border pb-4">
              <button
                onClick={() => setOpen(open === idx ? -1 : idx)}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <span
                  className={`text-lg font-semibold transition ${open === idx ? "text-primary" : "text-foreground"}`}
                >
                  {faq.question}
                </span>
                <span className={`text-primary transition transform ${open === idx ? "rotate-180" : ""}`}>
                  <ChevronDown size={24} />
                </span>
              </button>

              {open === idx && <div className="pb-4 text-foreground/70 leading-relaxed">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
