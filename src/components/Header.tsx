import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Hem' },
    { href: '#services', label: 'Tjänster' },
    { href: '#about', label: 'Om oss' },
    { href: '#jobs', label: 'Lediga jobb' },
    { href: '#contact', label: 'Kontakt' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="bg-bidma-blue text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+46123456789" className="flex items-center gap-2 hover:text-gray-200">
              <Phone size={14} />
              <span>+46 12 345 67 89</span>
            </a>
            <a href="mailto:info@bidma.se" className="flex items-center gap-2 hover:text-gray-200">
              <Mail size={14} />
              <span>info@bidma.se</span>
            </a>
          </div>
        </div>
      </div>
      
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-bidma-blue">
            BIDMA
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-bidma-blue transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-bidma-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;