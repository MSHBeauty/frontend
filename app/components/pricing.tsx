"use client"

export default function Pricing() {
  const plans = [
    {
      name: "ESSENTIAL CARE PLAN",
      price: "$149",
      featured: false,
      features: [
        "Basic face cleaning",
        "Basic moisturizing",
        "Basic face cleaning",
        "Basic moisturizing",
        "Basic face cleaning",
      ],
    },
    {
      name: "ESSENTIAL CARE PLAN",
      price: "$149",
      featured: true,
      features: [
        "Premium treatments",
        "Full skin analysis",
        "Premium treatments",
        "Full skin analysis",
        "Premium treatments",
      ],
    },
    {
      name: "ESSENTIAL CARE PLAN",
      price: "$149",
      featured: false,
      features: ["Advanced skincare", "Regular checkups", "Advanced skincare", "Regular checkups", "Advanced skincare"],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            PAMPER YOURSELF AT
            <br />
            EVERY BUDGET
          </h2>
          <p className="text-lg text-foreground/70">
            Our expert team delivers top-tier services using premium products for amazing results.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 ${
                plan.featured
                  ? "bg-primary text-primary-foreground ring-4 ring-primary/20 transform md:scale-105"
                  : "bg-card border-2 border-border text-foreground"
              }`}
            >
              <h3 className={`font-bold text-lg mb-4 ${plan.featured ? "text-primary-foreground" : ""}`}>
                {plan.name}
              </h3>
              <div className="text-5xl font-bold mb-8">{plan.price}</div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span
                      className={`w-5 h-5 rounded-full ${plan.featured ? "bg-primary-foreground" : "bg-primary"}`}
                    ></span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-full font-semibold transition ${
                  plan.featured
                    ? "bg-primary-foreground text-primary hover:bg-opacity-90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
