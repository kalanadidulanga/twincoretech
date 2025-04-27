import React, { useRef } from "react";
import { Link } from "react-router";

const Hero = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const ctaRef = useRef(null);
  const overlayRef = useRef(null);

  return (
    <div
      ref={heroRef}
      className="relative min-h-[100vh] flex items-center bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-900 overflow-hidden"
    >
      {/* Modern mesh gradient overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(120, 100, 255, 0.4) 0%, transparent 30%),
                          radial-gradient(circle at 80% 10%, rgba(72, 219, 251, 0.3) 0%, transparent 40%),
                          radial-gradient(circle at 40% 80%, rgba(173, 81, 255, 0.4) 0%, transparent 50%),
                          radial-gradient(circle at 90% 90%, rgba(50, 172, 223, 0.4) 0%, transparent 40%)`,
        }}
      ></div>

      {/* Animated particles overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      ></div>

      {/* Enhanced glossy sphere decorative elements */}
      <div className="absolute left-10 top-1/4 w-60 h-60 rounded-full bg-gradient-to-br from-primary-400/40 to-accent-600/30 blur-3xl animate-pulse-slow"></div>
      <div className="absolute right-20 bottom-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-secondary-400/30 to-secondary-600/20 blur-3xl animate-pulse-slow animation-delay-2000"></div>
      <div className="absolute left-1/3 bottom-1/3 w-32 h-32 rounded-full bg-gradient-to-br from-accent-400/20 to-accent-600/20 blur-xl animate-pulse-slow animation-delay-4000"></div>

      <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8 relative z-10 py-12">
        <div className="max-w-3xl">
          <h1
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Specialist Support for</span>
            <div className="mt-2 bg-gradient-to-r from-accent-300 via-secondary-300 to-accent-400 bg-clip-text text-transparent inline-block">
              Digital Transformation
            </div>
          </h1>

          <p
            ref={subheadingRef}
            className="text-xl md:text-2xl text-neutral-100 mb-8 leading-relaxed backdrop-blur-sm bg-black/5 rounded-lg p-4"
          >
            We help organisations streamline processes, unlock efficiencies, and
            prepare for the future with our digital transformation expertise and
            Omadeas Product Suite.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link
              to="/services"
              className="relative overflow-hidden group rounded-md"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:from-primary-600 group-hover:to-secondary-600 transition-all duration-300"></span>
              <span className="relative block text-center text-white font-medium px-6 py-3 z-10">
                Explore Our Services
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/30"></span>
              </span>
              <span className="absolute -inset-[100%] bg-gradient-to-r from-primary-400/20 to-secondary-400/20 blur-xl transform rotate-45 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 text-center font-medium rounded-md px-6 py-3 transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced modern abstract shapes */}
      <div className="hidden lg:block absolute bottom-0 right-0 w-1/3 h-full overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 200 600"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-30"
        >
          <defs>
            <linearGradient
              id="shape-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="rgb(100, 130, 255)"
                stopOpacity="0.6"
              />
              <stop
                offset="100%"
                stopColor="rgb(180, 100, 255)"
                stopOpacity="0.6"
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#shape-gradient)"
            d="M38.5,-64.7C47.9,-56,52.3,-40.4,57.5,-26.5C62.7,-12.6,68.6,-0.3,67.5,11.1C66.3,22.5,58,33.2,48.1,41.1C38.3,49.1,27,54.4,14.2,59.8C1.3,65.1,-13.1,70.6,-25.7,67.9C-38.3,65.3,-49,54.5,-57.8,42.1C-66.6,29.7,-73.5,15.8,-74.6,0.8C-75.7,-14.2,-71.1,-30.3,-62,-42.7C-52.9,-55.1,-39.2,-63.8,-25.7,-70.5C-12.2,-77.2,1,-81.8,13,-78.3C25,-74.9,29,-73.4,38.5,-64.7Z"
            transform="translate(100 300)"
          >
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="M38.5,-64.7C47.9,-56,52.3,-40.4,57.5,-26.5C62.7,-12.6,68.6,-0.3,67.5,11.1C66.3,22.5,58,33.2,48.1,41.1C38.3,49.1,27,54.4,14.2,59.8C1.3,65.1,-13.1,70.6,-25.7,67.9C-38.3,65.3,-49,54.5,-57.8,42.1C-66.6,29.7,-73.5,15.8,-74.6,0.8C-75.7,-14.2,-71.1,-30.3,-62,-42.7C-52.9,-55.1,-39.2,-63.8,-25.7,-70.5C-12.2,-77.2,1,-81.8,13,-78.3C25,-74.9,29,-73.4,38.5,-64.7Z;
                      M47.7,-73.2C59.2,-67.7,63.8,-48,67.8,-30.8C71.9,-13.5,75.3,1.3,73.6,16.2C71.9,31.1,65,46.1,53.5,58.9C42,71.7,25.8,82.2,9.7,79.3C-6.3,76.4,-22.4,60.1,-35.8,46.9C-49.1,33.7,-59.7,23.7,-64.4,10.6C-69.2,-2.5,-68.1,-18.8,-60.5,-31.3C-53,-43.9,-39,-52.8,-25.8,-57.2C-12.7,-61.6,-0.3,-61.6,14,-67C28.2,-72.4,56.4,-84.3,47.7,-73.2Z;
                      M36.1,-62.2C46.2,-53.6,53.3,-41.8,60,-28.7C66.8,-15.7,73.3,-1.4,72.2,12.6C71.1,26.7,62.5,40.3,50.9,51.1C39.3,61.9,24.7,69.8,9.2,73.3C-6.3,76.9,-22.9,76.2,-35.4,68.8C-47.9,61.4,-56.4,47.2,-64.2,32.3C-71.9,17.4,-78.8,1.9,-77.9,-13.9C-77,-29.8,-68.3,-45.8,-55.5,-54.7C-42.7,-63.5,-25.8,-65.1,-9.9,-66C6,-67,18,-70.8,36.1,-62.2Z;
                      M38.5,-64.7C47.9,-56,52.3,-40.4,57.5,-26.5C62.7,-12.6,68.6,-0.3,67.5,11.1C66.3,22.5,58,33.2,48.1,41.1C38.3,49.1,27,54.4,14.2,59.8C1.3,65.1,-13.1,70.6,-25.7,67.9C-38.3,65.3,-49,54.5,-57.8,42.1C-66.6,29.7,-73.5,15.8,-74.6,0.8C-75.7,-14.2,-71.1,-30.3,-62,-42.7C-52.9,-55.1,-39.2,-63.8,-25.7,-70.5C-12.2,-77.2,1,-81.8,13,-78.3C25,-74.9,29,-73.4,38.5,-64.7Z"
            />
          </path>
        </svg>
      </div>

      {/* Enhanced scroll down indicator with subtle animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/90 text-sm mb-2 font-medium backdrop-blur-sm bg-white/5 px-4 py-1 rounded-full">
          Scroll Down
        </span>
        <svg
          className="w-6 h-6 text-white/80 animate-bounce"
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
