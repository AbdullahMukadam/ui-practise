import React from 'react'
import { Facebook, Twitter, Globe } from 'lucide-react';

export default function Footer() {

  const usefulLinks = ["About", "Services", "Team", "Prices"];
  const helpLinks = ["Customer Support", "Terms & Conditions", "Privacy Policy", "Contact Us"];

  // Updated to use lucide-react icons
  const socialIcons = [
    { icon: <Facebook size={16} />, href: "#" },
    { icon: <Twitter size={16} />, href: "#" },
    { icon: <Globe size={16} />, href: "#" } // Using Globe as a replacement for Google
  ];

  return (
    <div className='w-full p-2 bg-[#101010] text-gray-400 mt-10 font-modernist'>
      <div className="container mx-auto px-6 py-12">
        {/* Main footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Column 1: Description */}
          <div className="lg:col-span-1">
            <h2 className='text-3xl font-bold mb-4 text-white'>About Us</h2>
            <p className="text-sm leading-relaxed">
              We're a team of designers, engineers, and innovators building AI tools that empower anyone to turn imagination into stunning visuals—faster, smarter, and effortlessly.
            </p>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h3 className="text-orange-500 font-bold mb-4">Useful Links</h3>
            <ul>
              {usefulLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="hover:text-orange-500 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Help */}
          <div>
            <h3 className="text-orange-500 font-bold mb-4">Help</h3>
            <ul>
              {helpLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="hover:text-orange-500 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect With Us */}
          <div>
            <h3 className="text-orange-500 font-bold mb-4">Connect With Us</h3>
            <p className="mb-2">27 Division St, New York,<br />NY 10002, USA</p>
            <p className="mb-2">+123 324 2653</p>
            <p>username@mail.com</p>
          </div>

        </div>

        {/* Bottom footer bar */}
        <div className="border-t-[1px] w-full  border-orange-500 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <div className=" w-full flex items-center justify-between ">
            <p className='text-[20px] text-white'>© 2024 All Right Reserved.</p>
            <div className='flex space-x-2'>
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-orange-500 border border-orange-500 rounded-full p-2 hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
