import React, { useRef } from "react";
import { Link } from "react-router";

const ContactCTA = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Colorful decorative elements using logo colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-gradient-to-br from-primary-400/15 to-primary-500/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -left-10 -bottom-10 w-64 h-64 rounded-full bg-gradient-to-br from-accent-400/15 to-accent-500/10 blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute right-1/3 bottom-1/3 w-40 h-40 rounded-full bg-gradient-to-br from-tertiary-400/15 to-tertiary-500/10 blur-2xl animate-pulse-slow animation-delay-4000"></div>
        <div className="absolute left-1/3 top-1/3 w-40 h-40 rounded-full bg-gradient-to-br from-secondary-400/15 to-secondary-500/10 blur-2xl animate-pulse-slow animation-delay-3000"></div>
      </div>

      <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={contentRef}
          className="bg-white rounded-xl shadow-xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden border border-neutral-100/80"
        >
          {/* Card shine effect */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-white/40 to-white/10 rotate-12 transform transition-transform duration-1000 group-hover:translate-x-24 group-hover:translate-y-24 rounded-full"></div>
          
          {/* Gradient border effect */}
          <div className="absolute inset-0 p-[1px] rounded-xl bg-gradient-to-r from-primary-300 via-accent-300 to-tertiary-300 opacity-50"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary-600 via-accent-600 to-tertiary-600 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
              Get in touch with our experts to discuss how TwinCoreTech can help
              streamline your processes, unlock efficiencies, and prepare your
              organization for the future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact"
                className="relative overflow-hidden group rounded-md inline-block"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-500 to-tertiary-500 group-hover:from-primary-600 group-hover:via-accent-600 group-hover:to-tertiary-600 transition-all duration-300"></span>
                <span className="relative block text-white font-medium px-8 py-3 z-10">
                  Contact Us
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/30"></span>
                </span>
                <span className="absolute -inset-[100%] bg-gradient-to-r from-primary-400/20 via-accent-400/20 to-tertiary-400/20 blur-xl transform rotate-45 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
              </Link>
              <Link 
                to="/services" 
                className="relative overflow-hidden group rounded-md inline-block"
              >
                <span className="absolute inset-0 bg-white border border-neutral-200 group-hover:bg-neutral-50 transition-all duration-300"></span>
                <span className="relative block text-primary-600 font-medium px-8 py-3 z-10">
                  Learn More About Our Services
                </span>
              </Link>
            </div>
            <div className="mt-8 pt-6 border-t border-neutral-200">
              <p className="text-neutral-600">
                Or call us directly at{" "}
                <a
                  href="tel:+447539730098"
                  className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  +44 75 3973 0098
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
