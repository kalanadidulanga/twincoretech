import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 py-16 relative overflow-hidden">
      {/* Colorful bottom border based on all logo colors */}
      <div className="absolute top-0 left-0 right-0 h-1 multi-color-gradient"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent-400/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-tertiary-400/5 blur-3xl"></div>

      <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and brief description */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <div className=" w-32 h-auto">
                <img
                  src="/TwinCoreTechLogo.png"
                  alt="TwinCoreTech"
                  className="w-full object-cover object-center"
                  srcset=""
                />
              </div>
            </Link>
            <p className="text-neutral-600 mb-4">
              Specialist support for digital transformation, operational design,
              and programme delivery.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                className="bg-white text-primary-500 hover:text-primary-600 p-2 rounded-full border border-primary-100 hover:border-primary-200 hover:shadow-md transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="bg-white text-accent-500 hover:text-accent-600 p-2 rounded-full border border-accent-100 hover:border-accent-200 hover:shadow-md transition-all duration-300"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-neutral-800 mb-4 primary-gradient-text">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-neutral-600 hover:text-primary-500 transition-colors inline-block py-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-neutral-600 hover:text-accent-500 transition-colors inline-block py-1"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-neutral-600 hover:text-tertiary-500 transition-colors inline-block py-1"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-neutral-600 hover:text-secondary-500 transition-colors inline-block py-1"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/investors"
                  className="text-neutral-600 hover:text-gold-500 transition-colors inline-block py-1"
                >
                  Investors
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-neutral-800 mb-4 accent-gradient-text">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-neutral-600 hover:text-accent-500 transition-colors inline-block py-1"
                >
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-neutral-600 hover:text-accent-500 transition-colors inline-block py-1"
                >
                  Operations Consultancy
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-neutral-600 hover:text-accent-500 transition-colors inline-block py-1"
                >
                  Offshore Resourcing
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-neutral-600 hover:text-accent-500 transition-colors inline-block py-1"
                >
                  Commercial Modelling
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-neutral-800 mb-4 tertiary-gradient-text">
              Contact Us
            </h3>
            <address className="text-neutral-600 not-italic">
              <p>TwinCoreTech Ltd</p>
              <p>Bromley Old Town Hall</p>
              <p>30 Tweedy Road</p>
              <p>Bromley, BR1 3FE</p>
              <p>United Kingdom</p>
              <p className="mt-3">
                <a
                  href="tel:+447539730098"
                  className="text-primary-500 hover:text-primary-600 hover:underline transition-colors"
                >
                  +44 75 3973 0098
                </a>
              </p>
              <p className="mt-1">
                <a
                  href="mailto:sajithmudalige@twincoretech.com"
                  className="text-primary-500 hover:text-primary-600 hover:underline transition-colors"
                >
                  sajithmudalige@twincoretech.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm mb-4 sm:mb-0">
              &copy; {new Date().getFullYear()} TwinCoreTech Ltd. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-neutral-500 text-sm hover:text-primary-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-neutral-500 text-sm hover:text-primary-500 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
