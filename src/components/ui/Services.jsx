import React, { useRef } from "react";
import { Link } from "react-router";

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  const services = [
    {
      title: "Digital Strategy",
      description:
        "We help you create a comprehensive digital roadmap aligned with your business goals.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "Process Optimization",
      description:
        "We identify inefficiencies and redesign processes to improve productivity and reduce costs.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Technology Selection",
      description:
        "We help you navigate the complex technology landscape to choose the right solutions.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    },
    {
      title: "Program Management",
      description:
        "We provide experienced program management to lead your digital transformation initiatives.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Change Management",
      description:
        "We help your organization adapt to new systems and processes with minimal disruption.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      title: "System Integration",
      description:
        "We integrate your existing systems with new technologies to create a seamless ecosystem.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-gradient-to-br from-secondary-900 via-primary-900 to-primary-950"
    >
      {/* Modern mesh gradient background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 20%, rgba(120, 100, 255, 0.3) 0%, transparent 35%),
                          radial-gradient(circle at 20% 40%, rgba(72, 219, 251, 0.3) 0%, transparent 30%),
                          radial-gradient(circle at 60% 80%, rgba(173, 81, 255, 0.2) 0%, transparent 40%)`,
        }}
      ></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/10 to-transparent"></div>
      <div className="absolute left-1/4 top-20 w-72 h-72 rounded-full bg-accent-500/10 blur-3xl"></div>
      <div className="absolute right-1/4 bottom-20 w-80 h-80 rounded-full bg-secondary-500/10 blur-3xl"></div>

      <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <h2
            ref={headingRef}
            className="text-3xl font-bold mb-6 relative inline-block"
          >
            <span className="bg-gradient-to-r from-secondary-300 via-white to-accent-300 bg-clip-text text-transparent">
              Our Services
            </span>
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-secondary-400/70 to-accent-400/70 rounded-full"></span>
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto backdrop-blur-sm bg-primary-950/30 rounded-lg py-2 px-4">
            We offer comprehensive digital transformation services tailored to
            your organization's specific needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br from-primary-800/70 via-primary-900/70 to-secondary-900/70 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col h-full shadow-lg shadow-primary-950/50 hover:shadow-xl hover:shadow-primary-900/30"
            >
              {/* Service card shine effect */}
              <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-white/10 to-white/5 rotate-12 transform transition-transform duration-1000 group-hover:translate-x-24 group-hover:translate-y-24 rounded-full"></div>

              {/* Service card hover glow effect */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(45deg, rgba(100, 150, 255, 0.1), rgba(140, 100, 255, 0.1)) border-box`,
                  boxShadow: `0 0 30px 5px rgba(120, 130, 255, 0.15)`,
                  pointerEvents: "none",
                }}
              ></div>

              <div className="relative z-10">
                <div className="p-3 bg-gradient-to-br from-accent-500/30 to-secondary-600/30 rounded-lg inline-flex items-center justify-center mb-5 backdrop-blur-sm border border-white/10 shadow-inner shadow-white/5">
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white via-accent-100 to-white bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-white/80 mb-5 flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto pt-4">
                  <Link
                    to="/services"
                    className="inline-flex items-center text-accent-300 hover:text-accent-200 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA with gradient button */}
        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="inline-block relative overflow-hidden group rounded-md"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-accent-500 group-hover:from-secondary-600 group-hover:to-accent-600 transition-all duration-300"></span>
            <span className="relative block text-white font-medium px-8 py-3 z-10">
              View All Services
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/30"></span>
            </span>
            <span className="absolute -inset-[100%] bg-gradient-to-r from-secondary-400/20 to-accent-400/20 blur-xl transform rotate-45 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
