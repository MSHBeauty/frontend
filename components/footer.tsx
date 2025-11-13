"use client"

import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-full"></div>
              <span className="text-xl font-bold">Logo</span>
            </div>
            <p className="text-sm opacity-90">
              Transform your beauty routine with our premium skincare and wellness services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Facial Treatments
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Massages
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Skincare
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Wellness
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Monday-Friday: 8 AM - 8 PM</li>
              <li>Saturday: 9 AM - 7 PM</li>
              <li>Sunday: 10 AM - 6 PM</li>
              <li>Closed Holidays</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left */}
          <div className="text-sm opacity-90">
            <p>© 2025 Luxurious Care. All rights reserved.</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-100 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:opacity-100 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:opacity-100 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:opacity-100 transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
