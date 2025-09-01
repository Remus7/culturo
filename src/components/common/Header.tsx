import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Home', active: true, href: '#home' },
    { label: 'Contact', active: false, href: '#contact' },
    { label: 'Features', active: false, href: '#features' },
    { label: 'Pricing', active: false, href: '#pricing' },
    { label: 'Blog', active: false, href: '#blog' }
  ];

  const handleMenuClick = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const handleGetDemo = () => {
    navigate('/error');
    // Add a small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className="w-full border-b border-primary fixed top-0 left-0 right-0 bg-primary z-50">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-5 md:py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/assets/images/Gemini_Generated_Image_keqcvpkeqcvpkeqc_1_-removebg-preview-1756671918773.png" 
              alt="Culturo Logo" 
              className="w-[180px] h-[40px] sm:w-[200px] sm:h-[45px] md:w-[220px] md:h-[50px] object-contain"
            />
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button 
            className="block lg:hidden p-2 text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation Menu */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-primary lg:bg-transparent border-t lg:border-t-0 border-primary lg:border-0 z-50`}>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-[34px] p-4 lg:p-0">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  role="menuitem"
                  onClick={() => handleMenuClick(item.href)}
                  className={`font-inter text-sm sm:text-base font-normal leading-5 transition-colors duration-200 hover:text-primary ${
                    item.active ? 'text-primary' : 'text-secondary hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={handleGetDemo}
              variant="primary"
              size="medium"
              className="bg-lightblue text-primary font-satoshi font-medium rounded-[22px] px-4 sm:px-6 py-2 sm:py-2.5 hover:bg-opacity-90 transition-all duration-200"
            >
              Get a demo
            </Button>
          </div>
        </div>

        {/* Mobile CTA Button */}
        <div className={`${menuOpen ? 'block' : 'hidden'} lg:hidden pb-4`}>
          <Button
            onClick={handleGetDemo}
            variant="primary"
            size="medium"
            fullWidth
            className="bg-lightblue text-primary font-satoshi font-medium rounded-[22px] py-2.5 hover:bg-opacity-90 transition-all duration-200"
          >
            Get a demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;