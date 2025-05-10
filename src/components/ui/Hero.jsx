import React, { useRef } from "react";
import { Link } from "react-router";

const Hero = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const ctaRef = useRef(null);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-neutral-50">
      {/* Subtle background elements - more minimalist approach */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle accent color gradient in top right */}
        <div className="absolute -right-[15%] top-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-primary-300/10 to-primary-400/5 blur-[80px]"></div>
        
        {/* Subtle secondary accent in bottom left */}
        <div className="absolute -left-[5%] bottom-[5%] w-[20%] h-[20%] rounded-full bg-gradient-to-br from-tertiary-300/10 to-tertiary-400/5 blur-[60px]"></div>
        
        {/* Very subtle grid pattern overlay with animation */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] animate-subtle-shift" style={{ animationDuration: '70s' }}></div>
      </div>
      
      <div className="container max-w-[var(--container-max)] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="text-left">
            <h1
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-neutral-900">Specialist Support for</span>
              <div className="mt-2 text-primary-600">
                Digital Transformation
              </div>
            </h1>

            <p
              ref={subheadingRef}
              className="text-lg md:text-xl text-neutral-700 mb-8 leading-relaxed max-w-lg"
            >
              We help organisations streamline processes, unlock efficiencies, and
              prepare for the future with our digital transformation expertise and
              Omadeas Product Suite.
            </p>

            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8"
            >
              <Link
                to="/services"
                className="px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md shadow-sm transition-all duration-300"
              >
                Our Services
              </Link>
              <Link
                to="/products"
                className="px-8 py-3.5 text-neutral-900 font-medium bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 rounded-md transition-all duration-300"
              >
                Our Products
              </Link>
            </div>
          </div>
          
          {/* Right side logo with subtle animation */}
          <div className="flex justify-center lg:justify-end items-center">
            <div className="relative">
              {/* Logo */}
              <div className="relative z-10 transform hover:translate-y-[-5px] transition-transform duration-500">
                <img 
                  src="/TwinCoreTechLogo.svg" 
                  alt="TwinCoreTech Logo" 
                  className="w-full max-w-md" 
                />
              </div>
              
              {/* Very subtle decoration behind logo */}
              <div className="absolute inset-0 -m-6 bg-white/10 rounded-full border border-neutral-200/40 shadow-sm"></div>
            </div>
          </div>
        </div>
          
      </div>
    </section>
  );
};

export default Hero;
