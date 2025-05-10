import React from "react";
import { Link } from "react-router";

const Services = () => {
  const services = [
    {
      title: "Digital Transformation",
      description:
        "We guide organisations through the full project lifecycle—from strategy to execution.",
      color: "primary",
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
      color: "accent",
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
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
    },
    {
      title: "Technology Selection",
      description:
        "We help you navigate the complex technology landscape to choose the right solutions.",
      color: "tertiary",
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
      title: "Legacy System Migrations",
      description:
        "We specialize in planning and executing complex migrations from legacy systems.",
      color: "secondary",
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
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
    },
    {
      title: "Commercial Modelling",
      description:
        "We design pricing strategies and operational models to improve margins and forecasting.",
      color: "gold",
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
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Training Programs",
      description:
        "We build capability within organisations through structured learning and hands-on support.",
      color: "primary",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      ),
    },
  ];

  // Function to get the tailwind classes based on the color
  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        icon: "text-primary-600",
        border: "border-primary-200 hover:border-primary-600",
      },
      accent: {
        icon: "text-accent-600",
        border: "border-accent-200 hover:border-accent-600",
      },
      tertiary: {
        icon: "text-tertiary-600",
        border: "border-tertiary-200 hover:border-tertiary-600",
      },
      secondary: {
        icon: "text-secondary-600",
        border: "border-secondary-200 hover:border-secondary-600",
      },
      gold: {
        icon: "text-gold-600",
        border: "border-gold-200 hover:border-gold-600",
      },
    };

    return colorMap[color] || colorMap.primary;
  };

  return (
    // <section className="py-24 bg-neutral-50 relative">
    <section className="py-24 bg-white relative">

    {/* Very subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute right-0 top-0 w-1/2 h-1/3 bg-gradient-to-b from-primary-200/10 to-transparent"></div>
        <div className="absolute left-0 bottom-0 w-1/2 h-1/3 bg-gradient-to-t from-accent-200/10 to-transparent"></div>
      </div>

      <div className="container max-w-[var(--container-max)] mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-5 text-center">Our Services</h2>
          <div className="h-0.5 w-12 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-700 text-center">
            Our consultancy services focus on digital transformation planning and operational setup,
            ensuring businesses are equipped for successful changes and financial efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all duration-300"
              >
                <div className={`mb-5 ${colorClasses.icon}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-6">
                  {service.description}
                </p>
                <Link 
                  to="/services" 
                  className={`text-sm font-medium inline-flex items-center ${colorClasses.icon} hover:underline`}
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/services"
            className="inline-block px-8 py-3 border-2 border-primary-600 text-primary-600 font-medium rounded-md hover:bg-primary-600 hover:text-white transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
