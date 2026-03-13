import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import contentData from '../content.json';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
            <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    We're here to fix your electrical problems quickly and safely.
                </h2>
                <Link to="/contact">
                  <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors">
                      {contentData.contactPhone}
                  </button>
                </Link>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-gray-800 pt-12 mb-12">
            <div>
                <h3 className="text-xl font-bold mb-6">Ideal Power</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Look no further, because Ideal Power is here to illuminate your world with excellence in electrical services.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                        <Facebook className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                        <Instagram className="w-4 h-4" />
                    </a>
                </div>
            </div>
            
            <div>
                <h3 className="text-lg font-bold mb-6">Services</h3>
                <ul className="space-y-4 text-sm text-gray-400">
                    <li><Link to="/services" className="hover:text-white transition-colors">Install & Upgrades</Link></li>
                    <li><Link to="/services" className="hover:text-white transition-colors">Faulty & Old Wiring</Link></li>
                    <li><Link to="/services" className="hover:text-white transition-colors">Diagnosis & Repair</Link></li>
                    <li><Link to="/services" className="hover:text-white transition-colors">Cable Networking</Link></li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-bold mb-6">Pages</h3>
                <ul className="space-y-4 text-sm text-gray-400">
                    <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                    <li>
                        <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
                    </li>
                    <li><Link to="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-bold mb-6">Contact</h3>
                <ul className="space-y-4 text-sm text-gray-400">
                    <li className="flex items-center gap-3">
                        <Phone className="w-4 h-4" />
                        <span>{contentData.contactPhone}</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Mail className="w-4 h-4" />
                        <span>{contentData.contactEmail}</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <MapPin className="w-4 h-4" />
                        <span>13 Seaeagle Cres, Green Valley NSW 2168</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>
                Copyright © 2023 - Ideal Power
            </div>
            <div className="flex gap-6">
                <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
