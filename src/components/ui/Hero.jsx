import React, { useRef } from "react";
import { Link } from "react-router";

const Hero = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const ctaRef = useRef(null);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
      {/* Colorful background elements using logo colors */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary green circular gradient */}
        <div className="absolute -left-[10%] -top-[20%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-primary-400/40 to-primary-600/30 blur-[80px] animate-float"></div>
        
        {/* Accent/orange circular gradient */}
        <div className="absolute -right-[10%] top-[10%] w-[45%] h-[45%] rounded-full bg-gradient-to-br from-accent-400/35 to-accent-600/25 blur-[80px] animate-float-delayed"></div>
        
        {/* Tertiary/blue circular gradient */}
        <div className="absolute left-[10%] bottom-[10%] w-[35%] h-[35%] rounded-full bg-gradient-to-br from-tertiary-400/30 to-tertiary-600/20 blur-[70px] animate-float-slow"></div>
        
        {/* Secondary circular gradient */}
        <div className="absolute right-[15%] bottom-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-secondary-400/30 to-secondary-600/20 blur-[60px] animate-float-slower"></div>

        {/* Gold/yellow accent */}
        <div className="absolute right-[40%] top-[40%] w-[15%] h-[15%] rounded-full bg-gradient-to-br from-gold-400/20 to-gold-500/15 blur-[40px] animate-pulse-slow"></div>
      </div>
      
      {/* Optional subtle grid overlay for texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>
      
      <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8 relative z-10 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-neutral-900">Specialist Support for</span>
            <div className="mt-2 bg-gradient-to-r from-primary-500 via-accent-500 to-tertiary-500 bg-clip-text text-transparent inline-block">
              Digital Transformation
            </div>
          </h1>

          <p
            ref={subheadingRef}
            className="text-xl md:text-2xl text-neutral-700 mb-8 leading-relaxed relative glass-panel py-4 px-6"
          >
            We help organisations streamline processes, unlock efficiencies, and
            prepare for the future with our digital transformation expertise and
            Omadeas Product Suite.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center mt-8"
          >
            <Link
              to="/services"
              className="relative overflow-hidden group rounded-md"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-500 to-tertiary-500 group-hover:from-primary-600 group-hover:via-accent-600 group-hover:to-tertiary-600 transition-all duration-300"></span>
              <span className="relative block text-white font-medium px-8 py-4 z-10">
                Our Services
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/30"></span>
              </span>
              <span className="absolute -inset-[100%] bg-gradient-to-r from-primary-400/20 via-accent-400/20 to-tertiary-400/20 blur-xl transform rotate-45 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
            </Link>
            <Link
              to="/products"
              className="px-8 py-4 text-neutral-900 font-medium bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-md rounded-md transition-all duration-300"
            >
              Our Products
            </Link>
          </div>
          
          {/* Featured clients or achievements */}
          <div className="mt-16">
            <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">
              Trusted by organisations across financial services, insurance, and pensions
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              <div className="h-10 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                <div className="w-24 h-10 bg-neutral-300 rounded-md flex items-center justify-center text-neutral-600 text-xs">Client Logo</div>
              </div>
              <div className="h-10 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                <div className="w-24 h-10 bg-neutral-300 rounded-md flex items-center justify-center text-neutral-600 text-xs">Client Logo</div>
              </div>
              <div className="h-10 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                <div className="w-24 h-10 bg-neutral-300 rounded-md flex items-center justify-center text-neutral-600 text-xs">Client Logo</div>
              </div>
              <div className="h-10 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                <div className="w-24 h-10 bg-neutral-300 rounded-md flex items-center justify-center text-neutral-600 text-xs">Client Logo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
