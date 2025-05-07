import React from "react";

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
            d="M13 10V3L4 14h7v7l9-11h-7z"
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
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
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
        bg: "bg-primary-100",
        text: "text-primary-600",
        hover: "group-hover:bg-primary-600 group-hover:text-white",
        shadow: "group-hover:shadow-primary-500/30",
        border: "border-primary-200 group-hover:border-primary-600",
      },
      accent: {
        bg: "bg-accent-100",
        text: "text-accent-600",
        hover: "group-hover:bg-accent-600 group-hover:text-white",
        shadow: "group-hover:shadow-accent-500/30",
        border: "border-accent-200 group-hover:border-accent-600",
      },
      tertiary: {
        bg: "bg-tertiary-100",
        text: "text-tertiary-600",
        hover: "group-hover:bg-tertiary-600 group-hover:text-white",
        shadow: "group-hover:shadow-tertiary-500/30",
        border: "border-tertiary-200 group-hover:border-tertiary-600",
      },
      secondary: {
        bg: "bg-secondary-100",
        text: "text-secondary-600",
        hover: "group-hover:bg-secondary-600 group-hover:text-white",
        shadow: "group-hover:shadow-secondary-500/30",
        border: "border-secondary-200 group-hover:border-secondary-600",
      },
      gold: {
        bg: "bg-gold-100",
        text: "text-gold-600",
        hover: "group-hover:bg-gold-600 group-hover:text-white",
        shadow: "group-hover:shadow-gold-500/30",
        border: "border-gold-200 group-hover:border-gold-600",
      },
    };

    return colorMap[color] || colorMap.primary;
  };

  return (
    <section className="py-20 bg-white relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 left-0 h-1 multi-color-gradient"></div>
        <div className="absolute -right-20 top-20 w-64 h-64 rounded-full bg-primary-500/20 blur-3xl"></div>
        <div className="absolute -left-20 bottom-20 w-72 h-72 rounded-full bg-accent-500/20 blur-3xl"></div>
        <div className="absolute right-1/3 bottom-1/3 w-32 h-32 rounded-full bg-tertiary-500/15 blur-xl"></div>
      </div>

      <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-tertiary-600 bg-clip-text text-transparent">
              Our Services
            </span>
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary-400/70 via-accent-400/70 to-tertiary-400/70 rounded-full"></span>
          </h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Our consultancy services focus on end-to-end digital transformation
            planning and operational setup, ensuring businesses are equipped for
            successful changes and financial efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-white rounded-xl border border-neutral-100 hover:border-transparent transition-all duration-500 shadow-sm hover:shadow-lg"
              >
                {/* Highlight border on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 rounded-xl ${colorClasses.border}`}></div>
                
                <div className="p-6">
                  <div className={`mb-6 p-4 rounded-lg inline-flex items-center justify-center ${colorClasses.bg} ${colorClasses.text} transition-all duration-300 ${colorClasses.hover}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-neutral-900 group-hover:text-neutral-800">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 group-hover:text-neutral-700">
                    {service.description}
                  </p>
                </div>
                
                {/* Subtle highlight effect */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${colorClasses.bg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
