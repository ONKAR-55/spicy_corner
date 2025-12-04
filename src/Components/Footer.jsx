import React from 'react'
import '../App.css'

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 mt-16 border-2 border-orange-500 rounded-lg">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">🌶️ Spicy Corner</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bringing authentic spicy flavors to your table. Experience culinary excellence with every bite.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-400 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors duration-300">Menu</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors duration-300">About</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-400 transition-colors duration-300">Dine In</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors duration-300">Takeaway</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors duration-300">Delivery</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors duration-300">Catering</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Contact</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>📍 123 Spicy Street, Flavor Town</p>
              <p>📞 (123) 456-7890</p>
              <p>✉️ contact@spicycorner.com</p>
              <p>🕒 Mon-Fri: 11AM - 10PM<br/>Sat-Sun: 11AM - 11PM</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Social Links */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-xl">
              <span>f</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-xl">
              <span>📷</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-xl">
              <span>𝕏</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-xl">
              <span>in</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-gray-500 text-sm">
            <p>&copy; 2024 Spicy Corner. All rights reserved.</p>
            <div className="space-x-4 mt-2">
              <a href="#" className="hover:text-orange-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400 transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
