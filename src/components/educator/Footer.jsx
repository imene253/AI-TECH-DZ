import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 border-b border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Logo + About */}
          <div className="flex flex-col items-center md:items-start">
            <img className="h-16 w-auto" src={assets.logo} alt="logo" />
            <p className="mt-6 text-sm text-white/70 max-w-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>

          {/* Company Links */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-semibold text-white mb-5">Company</h2>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">About us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact us</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-semibold text-white mb-5">
              Subscribe to our newsletter
            </h2>
            <p className="text-sm text-white/70 mb-4 max-w-xs">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row items-center w-full gap-3 justify-center md:justify-start">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="border border-gray-600 bg-gray-800 text-gray-200 placeholder-gray-500 outline-none w-full sm:w-64 h-10 rounded px-3 text-sm"
              />
              <button className="bg-blue-600 px-6 h-10 text-sm text-white rounded hover:bg-blue-700 transition w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <p className="py-6 text-center text-xs md:text-sm text-white/50">
        © 2025 AI TECH DZ. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
