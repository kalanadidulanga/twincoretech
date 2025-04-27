import React, { useEffect, useRef } from "react";
import { Link } from "react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const ctaRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate the hero section elements
    tl.from(headingRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        subheadingRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        ctaRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        overlayRef.current,
        {
          width: "0%",
          opacity: 0.7,
          duration: 1.5,
          ease: "power3.inOut",
        },
        "-=1.5"
      );

    // Animate gradient as user scrolls
    gsap.to(heroRef.current, {
      backgroundPosition: "100% 50%",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-[100vh] flex items-center bg-gradient-to-tr from-neutral-900 via-primary-900 to-accent-900 bg-[length:200%_200%] bg-[position:0%_50%]"
    >
      {/* Overlay pattern */}
      <div
        ref={overlayRef}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      ></div>

      <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8 relative z-10 py-12">
        <div className="max-w-3xl">
          <h1
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Specialist Support for
            <span className="bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">
              {" "}
              Digital Transformation
            </span>
          </h1>

          <p
            ref={subheadingRef}
            className="text-xl md:text-2xl text-neutral-200 mb-8 leading-relaxed"
          >
            We help organisations streamline processes, unlock efficiencies, and
            prepare for the future with our digital transformation expertise and
            Omadeas Product Suite.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link to="/services" className="btn-primary text-center">
              Explore Our Services
            </Link>
            <Link
              to="/contact"
              className="btn-outline bg-black/30 border-white text-white hover:bg-white/10 text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Abstract shapes with animations */}
      <div className="hidden lg:block absolute bottom-0 right-0 w-1/3 h-full overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 200 600"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            className="blob"
            fill="rgba(255, 255, 255, 0.05)"
            d="M38.5,-64.7C47.9,-56,52.3,-40.4,57.5,-26.5C62.7,-12.6,68.6,-0.3,67.5,11.1C66.3,22.5,58,33.2,48.1,41.1C38.3,49.1,27,54.4,14.2,59.8C1.3,65.1,-13.1,70.6,-25.7,67.9C-38.3,65.3,-49,54.5,-57.8,42.1C-66.6,29.7,-73.5,15.8,-74.6,0.8C-75.7,-14.2,-71.1,-30.3,-62,-42.7C-52.9,-55.1,-39.2,-63.8,-25.7,-70.5C-12.2,-77.2,1,-81.8,13,-78.3C25,-74.9,29,-73.4,38.5,-64.7Z"
            transform="translate(100 300)"
          />
        </svg>
      </div>

      {/* Adding scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
