"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-dark border-bottom border-secondary">
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-dark py-2">
          <Link href="/" className="navbar-brand text-warning fw-bold">
            Star Wars Explorer
          </Link>
          
          <button 
            className="navbar-toggler border-0" 
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link 
                  href="/" 
                  className="nav-link text-white" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  href="/characters" 
                  className="nav-link text-white" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Characters
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  href="/contact" 
                  className="nav-link text-white" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}