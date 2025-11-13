"use client"

export default function Contact() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative hidden md:block">
            <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-80 h-80 bg-primary rounded-full -z-0"></div>
            <div className="relative z-10 rounded-full overflow-hidden w-72 h-72 mx-auto">
              <img src="/beauty-woman-portrait-spa.jpg" alt="Contact" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Form */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              GET IN TOUCH WITH
              <br />
              US TODAY!
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Our expert team delivers top-tier services using premium products.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="px-6 py-3 rounded-full border-2 border-border focus:border-primary focus:outline-none transition"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="px-6 py-3 rounded-full border-2 border-border focus:border-primary focus:outline-none transition"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-3 rounded-full border-2 border-border focus:border-primary focus:outline-none transition"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full px-6 py-3 rounded-full border-2 border-border focus:border-primary focus:outline-none transition"
              />
              <textarea
                placeholder="How can we help?"
                rows={4}
                className="w-full px-6 py-3 rounded-2xl border-2 border-border focus:border-primary focus:outline-none transition resize-none"
              />

              <div className="flex items-center gap-3">
                <input type="checkbox" id="privacy" className="w-4 h-4" />
                <label htmlFor="privacy" className="text-sm text-foreground/70">
                  I agree with the privacy policy
                </label>
              </div>

              <button className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold hover:bg-primary/90 transition">
                Send Message
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-border space-y-2 text-sm">
              <p>
                <strong>Somerville, NY 210 USSP</strong>
              </p>
              <p className="text-foreground/70">+880 012-423-4453 · +880 89 567 57 29</p>
              <p className="text-foreground/70">hello@luxure.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
