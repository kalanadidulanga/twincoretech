import React, { useEffect, useRef } from "react";
import { Link } from "react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactCTA = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.from(contentRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-primary-300 dark:bg-primary-800 blur-3xl opacity-20"></div>
        <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-accent-300 dark:bg-accent-800 blur-3xl opacity-20"></div>
        <div className="absolute right-1/3 bottom-1/3 w-20 h-20 rounded-full bg-secondary-300 dark:bg-secondary-800 blur-2xl opacity-20"></div>
      </div>

      <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={contentRef}
          className="bg-white dark:bg-neutral-800 rounded-xl shadow-xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-neutral-100 dark:border-neutral-700"
        >
          <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to discuss how TwinCoreTech can help
            streamline your processes, unlock efficiencies, and prepare your
            organization for the future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
            <Link to="/services" className="btn-outline">
              Learn More About Our Services
            </Link>
          </div>
          <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-700">
            <p className="text-neutral-600 dark:text-neutral-400">
              Or call us directly at{" "}
              <a
                href="tel:+447539730098"
                className="text-primary-600 dark:text-primary-400 font-medium"
              >
                +44 75 3973 0098
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
