'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <button onClick={toggleMenu} className="p-2">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <div className="absolute top-14 left-0 right-0 bg-white shadow-md">
          <nav className="flex flex-col p-4">
            <Link href="#services" className="py-2" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="#how-it-works" className="py-2" onClick={toggleMenu}>
              How It Works
            </Link>
            <Link href="#pricing" className="py-2" onClick={toggleMenu}>
              Pricing
            </Link>
            <Link href="#contact" className="py-2" onClick={toggleMenu}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}