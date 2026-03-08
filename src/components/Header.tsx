import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="relative group">
               <div className="h-16 w-16 bg-black rounded-full border-2 border-yellow-400 flex items-center justify-center overflow-hidden">
                  <Zap className="h-8 w-8 text-red-600 fill-current" />
               </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-display font-bold text-3xl leading-none tracking-tight">
                <span className="text-red-600">Ideal</span>
                <span className="text-white">Power</span>
              </span>
              <span className="text-[10px] text-yellow-400 uppercase tracking-widest font-bold mt-1">Lic #393900C</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.href.startsWith('/') && !item.href.includes('#') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-bold text-gray-300 hover:text-yellow-400 transition-colors uppercase tracking-wide"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-bold text-gray-300 hover:text-yellow-400 transition-colors uppercase tracking-wide"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
             <a href="tel:0450500803" className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-bold transition-colors shadow-lg shadow-yellow-400/20">
              <Phone className="h-4 w-4" />
              <span>0450 500 803</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                item.href.startsWith('/') && !item.href.includes('#') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-lg font-bold text-gray-300 hover:text-yellow-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-lg font-bold text-gray-300 hover:text-yellow-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <a href="tel:0450500803" className="flex items-center justify-center gap-2 bg-yellow-400 text-black px-4 py-3 rounded-xl font-bold w-full">
                <Phone className="h-5 w-5" />
                0450 500 803
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
