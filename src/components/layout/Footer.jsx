import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 py-16">
      <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and brief description */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                TwinCoreTech
              </span>
            </Link>
            <p className="text-neutral-400 mb-4">
              Specialist support for digital transformation, operational design,
              and programme delivery.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                className="text-neutral-400 hover:text-primary-500"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="text-neutral-400 hover:text-primary-500"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-neutral-400 hover:text-primary-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-neutral-400 hover:text-primary-500 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-neutral-400 hover:text-primary-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-neutral-400 hover:text-primary-500 transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/investors"
                  className="text-neutral-400 hover:text-primary-500 transition-colors"
                >
                  Investors
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-neutral-400 hover:text-primary-500 transition-colors"
                >
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-neutral-400 hover:text-primary-500 transition-colors"
                >
                  Operations Consultancy
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-neutral-400 hover:text-primary-500 transition-colors"
                >
                  Offshore Resourcing
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-neutral-400 hover:text-primary-500 transition-colors"
                >
                  Commercial Modelling
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <address className="text-neutral-400 not-italic">
              <p>TwinCoreTech Ltd</p>
              <p>Bromley Old Town Hall</p>
              <p>30 Tweedy Road</p>
              <p>Bromley, BR1 3FE</p>
              <p>United Kingdom</p>
              <p className="mt-3">
                <a
                  href="tel:+447539730098"
                  className="text-primary-500 hover:text-primary-400"
                >
                  +44 75 3973 0098
                </a>
              </p>
              <p className="mt-1">
                <a
                  href="mailto:sajithmudalige@twincoretech.com"
                  className="text-primary-500 hover:text-primary-400"
                >
                  sajithmudalige@twincoretech.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 sm:mb-0">
              &copy; {new Date().getFullYear()} TwinCoreTech Ltd. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-neutral-400 text-sm hover:text-primary-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-neutral-400 text-sm hover:text-primary-500 transition-colors"
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
