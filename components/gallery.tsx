"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function Gallery() {
  const [current, setCurrent] = useState(0)

  const images = [
    { id: 1, query: "beauty portrait woman pink background" },
    { id: 2, query: "luxury beauty girl skincare treatment" },
    { id: 3, query: "beauty woman spa portrait" },
  ]

  const handlePrev = () => setCurrent(current === 0 ? images.length - 1 : current - 1)
  const handleNext = () => setCurrent(current === images.length - 1 ? 0 : current + 1)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Gallery Grid */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {images.map((img, idx) => (
              <div
                key={img.id}
                className={`relative h-64 rounded-3xl overflow-hidden cursor-pointer transition-all ${
                  idx === current ? "ring-4 ring-primary" : "opacity-60 hover:opacity-100"
                }`}
                onClick={() => setCurrent(idx)}
              >
                <img
                  src={`/.jpg?height=400&width=300&query=${img.query}`}
                  alt={`Gallery ${img.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4">
            <button
              onClick={handlePrev}
              className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2 items-center">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-3 rounded-full transition-all ${idx === current ? "bg-primary w-8" : "bg-border w-3"}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
