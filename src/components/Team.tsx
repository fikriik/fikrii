import React from "react";
import Link from "next/link";

// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#090909] text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about">About</Link></li>
            <li>
              <Link href="/careers" className="text-green-400">
                Careers 
                <span className="ml-1 text-xs bg-green-600 px-2 py-0.5 rounded">
                  We’re hiring!
                </span>
              </Link>
            </li>
            <li><Link href="/customers">Customers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/privacy">Privacy policy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white font-semibold mb-3">Products</h3>
          <ul className="space-y-2">
            <li><Link href="/explorer">Explorer</Link></li>
            <li><Link href="/sheets">Sheets</Link></li>
            <li><Link href="/api">API</Link></li>
            <li><Link href="/data-room">Data Room</Link></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-white font-semibold mb-3">Explore</h3>
          <ul className="space-y-2">
            <li><Link href="/api-docs">API Docs</Link></li>
            <li><Link href="/changelog">Changelog</Link></li>
            <li><Link href="/docs">Docs</Link></li>
            <li><Link href="/mvtti0f">MVTTI0F (index)</Link></li>
            <li><Link href="/mvtti0m">MVTTI0M (index)</Link></li>
            <li><Link href="/resources">Resources</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white font-semibold mb-3">Socials</h3>
          <ul className="space-y-2">
            <li><a href="https://x.com" target="_blank" rel="noopener noreferrer">X</a></li>
            <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            <li><a href="#">Podcast</a></li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-12 max-w-7xl mx-auto">
        <p className="mb-4">Subscribe to our weekly newsletter</p>
        <div className="flex max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-l bg-gray-800 border border-gray-700 focus:outline-none"
          />
          <button className="px-4 py-2 bg-green-500 text-black font-semibold rounded-r hover:bg-green-400 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} maldinurfikry
      </div>
    </footer>
  );
}
