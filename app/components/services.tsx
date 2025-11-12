"use client"

export default function Services() {
  const services = [
    { icon: "💆", title: "Facial Treatments" },
    { icon: "✨", title: "Skin Brightening" },
    { icon: "🧴", title: "Moisturizing" },
    { icon: "💅", title: "Nail Care" },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              FEEL BEAUTIFUL
              <br />
              EVERY DAY FOR YOU!
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Our expert team delivers top-tier services using premium products, ensuring you achieve radiant,
              long-lasting results and feel your best.
            </p>
            <button className="mt-8 text-primary font-semibold hover:text-primary/80 transition">
              View All Services →
            </button>
          </div>

          {/* Service Cards */}
          <div className="space-y-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition"
              >
                <div className="text-4xl">{service.icon}</div>
                <div>
                  <h3 className="font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm text-foreground/60">Premium care service</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
