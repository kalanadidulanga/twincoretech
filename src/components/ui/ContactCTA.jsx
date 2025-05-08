import React from "react";
import { Link } from "react-router";

const ContactCTA = () => {
  return (
    <section className="py-20 bg-neutral-900 relative">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>
      
      {/* Subtle dot pattern or texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>
      
      <div className="container max-w-[var(--container-max)] mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your business?</h2>
          
          <p className="text-neutral-300 text-lg mb-10 leading-relaxed">
            Let's discuss how our digital transformation expertise and the Omadeas Product Suite 
            can help your organization optimize operations and prepare for the future.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-3.5 border border-white/20 hover:border-white/40 text-white hover:bg-white/5 font-medium rounded-md transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-white">+44 75 3973 0098</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:sajithmudalige@twincoretech.com" className="text-white hover:text-primary-400 transition-colors">
                sajithmudalige@twincoretech.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
