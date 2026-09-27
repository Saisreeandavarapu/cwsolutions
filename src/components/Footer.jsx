import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import BrandLogo from './BrandLogo';

export default function Footer({ onRequestQuote }) {
  const currentYear = 2026;

  const productCategories = [
    { name: 'Aluminium Ladders', path: '/products?category=Aluminium+Ladders' },
    { name: 'FRP Ladders', path: '/products?category=FRP+Ladders' },
    { name: 'Tower Ladders', path: '/products?category=Tower+Ladders' },
    { name: 'Trolley Ladders', path: '/products?category=Trolley+Ladders' },
    { name: 'Extension Ladders', path: '/products?category=Extension+Ladders' },
    { name: 'Scissor Lifts', path: '/products?category=Scissor+Lifts' },
    { name: 'Lifting Equipment', path: '/products?category=Lifting+Equipment' },
    { name: 'Material Handling', path: '/products?category=Material+Handling' },
    { name: 'Scaffolding', path: '/products?category=Scaffolding' },
  ];

  return (
    <footer className="bg-industrial-darker text-gray-300 border-t border-gray-800">
      {/* Top Footer Banner */}
      <div className="bg-industrial-dark border-b border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <BrandLogo iconOnly size="sm" />
            <div>
              <p className="text-white font-bold text-base tracking-wide">
                Need customized height access or lifting solutions?
              </p>
              <p className="text-gray-400 text-xs">
                Direct quotation and technical consultation for industrial plants, warehouses and contractors.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={onRequestQuote}
              className="w-full md:w-auto bg-industrial-steel hover:bg-industrial-steel-hover text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-sm transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request Quotation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="hidden sm:inline-flex items-center gap-2 border border-gray-700 hover:border-gray-500 text-white font-mono text-xs px-4 py-3 rounded-sm transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-industrial-steel" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BrandLogo size="default" />
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Industrial equipment supplier based in Hyderabad, Telangana. We provide dependable aluminium ladders, FRP non-conductive systems, tower ladders, scissor lifts, drum lifters, material trolleys, and aluminium scaffolding.
            </p>
            <div className="pt-2 text-xs text-gray-400 space-y-1 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Active Manufacturing & Supply</span>
              </div>
              <p className="text-gray-400">Website: cwsolutions.in</p>
            </div>
          </div>

          {/* Column 2: Equipment Range */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-industrial-steel pl-2">
              Equipment Range
            </h3>
            <ul className="space-y-2 text-xs">
              {productCategories.slice(0, 7).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 py-0.5"
                  >
                    <span className="text-industrial-steel font-bold">›</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/products"
                  className="text-industrial-steel hover:underline font-semibold flex items-center gap-1 pt-1"
                >
                  <span>View All Equipment ({`30+ Models`})</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-industrial-steel pl-2">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Creative Work Solutions
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Complete Product Catalogue
                </Link>
              </li>
              <li>
                <Link to="/about#applications" className="text-gray-400 hover:text-white transition-colors">
                  Industrial Applications
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact & Location
                </Link>
              </li>
              <li>
                <button
                  onClick={onRequestQuote}
                  className="text-left text-gray-400 hover:text-industrial-steel transition-colors"
                >
                  Request Technical Quotation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-industrial-steel pl-2">
              Contact Details
            </h3>
            <div className="space-y-3 text-xs text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-industrial-steel flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Saidabad Facility</p>
                  <p>17-1-388, Road No. 14, Saidabad,</p>
                  <p>Hyderabad, Telangana - 500 059</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-industrial-steel flex-shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="text-white hover:text-industrial-steel font-mono transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-industrial-steel flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-gray-300 hover:text-industrial-steel transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-2 border-t border-gray-800 text-gray-400 text-[11px]">
                <Clock className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                <span>{COMPANY_INFO.operatingHours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-gray-800/80 bg-[#070A11] py-4 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {currentYear} Creative Work Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4 text-gray-400 text-[11px]">
            <span>Industrial Equipment Manufacturer & Supplier</span>
            <span>•</span>
            <span>Hyderabad, Telangana</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
