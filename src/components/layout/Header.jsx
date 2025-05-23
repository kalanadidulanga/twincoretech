import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Top multi-color gradient line */}
      <div className="h-1 w-full multi-color-gradient"></div>

      <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
          <div className=" w-32 h-auto">
            <img src="/TwinCoreTechLogo.png" alt="TwinCoreTech" className="w-full object-cover object-center" srcset="" />
          </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="font-medium text-neutral-900 hover:text-primary-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-primary-500 after:to-accent-500 hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="font-medium text-neutral-900 hover:text-accent-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-accent-500 after:to-tertiary-500 hover:after:w-full after:transition-all after:duration-300"
            >
              Products
            </Link>
            <Link
              to="/services"
              className="font-medium text-neutral-900 hover:text-tertiary-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-tertiary-500 after:to-secondary-500 hover:after:w-full after:transition-all after:duration-300"
            >
              Services
            </Link>
            <Link
              to="/team"
              className="font-medium text-neutral-900 hover:text-secondary-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-secondary-500 after:to-gold-500 hover:after:w-full after:transition-all after:duration-300"
            >
              Team
            </Link>
            <Link
              to="/investors"
              className="font-medium text-neutral-900 hover:text-gold-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-gold-500 after:to-primary-500 hover:after:w-full after:transition-all after:duration-300"
            >
              Investors
            </Link>
            <Link
              to="/contact"
              className="bg-tertiary-700 hover:bg-tertiary-800 text-white font-medium px-5 py-2 rounded-md transition-colors duration-300"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-neutral-900"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden py-4 bg-white border-t border-neutral-200 shadow-md">
          <div className="container max-w-[var(--container-max)] mx-auto px-4">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="px-4 py-2 font-medium text-neutral-900 hover:text-primary-600 hover:bg-neutral-50 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="px-4 py-2 font-medium text-neutral-900 hover:text-accent-600 hover:bg-neutral-50 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/services"
                className="px-4 py-2 font-medium text-neutral-900 hover:text-tertiary-600 hover:bg-neutral-50 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/team"
                className="px-4 py-2 font-medium text-neutral-900 hover:text-secondary-600 hover:bg-neutral-50 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                to="/investors"
                className="px-4 py-2 font-medium text-neutral-900 hover:text-gold-600 hover:bg-neutral-50 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Investors
              </Link>
              <Link
                to="/contact"
                className="bg-tertiary-700 hover:bg-tertiary-800 text-white font-medium px-4 py-2 rounded-md transition-colors duration-300 mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
