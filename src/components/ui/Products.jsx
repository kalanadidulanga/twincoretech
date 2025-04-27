import React, { useRef } from "react";
import { Link } from "react-router";

const ProductsSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  const products = [
    {
      name: "Omadeas TimeKeeper",
      description:
        "A comprehensive time & project tracking solution designed for digital transformation teams.",
      features: ["Time tracking", "Project management", "Resource allocation"],
      status: "Phase 1 (Coming Q4 2025)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "Omadeas SalesOps",
      description:
        "Simplified sales pipeline management with pricing & planning integration.",
      features: [
        "Pipeline visualization",
        "Deal structuring",
        "Sales forecasting",
      ],
      status: "Phase 2",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"
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
      name: "Omadeas ProjectOps",
      description:
        "Advanced project management suite including dependency modeling and resource planning.",
      features: [
        "Dependency management",
        "Financial modeling",
        "Resource planning",
      ],
      status: "Coming soon",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-primary-900 via-primary-950 to-secondary-900 text-white relative overflow-hidden"
    >
      {/* Enhanced decorative elements with modern gradients */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
      <div className="absolute -left-24 top-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-accent-600/20 via-accent-400/10 to-accent-600/20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute -right-24 bottom-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-secondary-500/20 via-primary-400/10 to-secondary-400/20 blur-3xl animate-pulse-slow animation-delay-2000"></div>

      {/* Subtle mesh gradient overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 10% 20%, rgba(100, 120, 255, 0.3) 0%, transparent 40%),
                          radial-gradient(circle at 90% 30%, rgba(73, 150, 255, 0.3) 0%, transparent 40%),
                          radial-gradient(circle at 50% 80%, rgba(120, 81, 255, 0.3) 0%, transparent 40%)`,
        }}
      ></div>

      <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            ref={headingRef}
            className="text-3xl font-bold mb-6 relative inline-block"
          >
            <span className="bg-gradient-to-r from-accent-300 via-white to-secondary-300 bg-clip-text text-transparent">
              Omadeas Product Suite
            </span>
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-accent-400/70 to-secondary-400/70 rounded-full"></span>
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto backdrop-blur-sm bg-primary-950/30 rounded-lg py-2 px-4">
            Born from real-world experience delivering complex digital
            transformation programmes across UK and European financial services,
            insurance, and pensions sectors.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-gradient-to-r from-primary-800/60 via-primary-900/60 to-secondary-900/60 backdrop-blur-md rounded-xl p-6 lg:p-8 hover:from-primary-700/70 hover:via-primary-800/70 hover:to-secondary-800/70 transition-all duration-500 border border-white/10 hover:border-white/20 shadow-lg shadow-primary-950/50 hover:shadow-xl hover:shadow-primary-900/30 relative overflow-hidden"
            >
              {/* Enhanced glassmorphism shine effect */}
              <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-white/10 to-white/5 rotate-12 transform transition-transform duration-1000 group-hover:translate-x-24 group-hover:translate-y-24 rounded-full"></div>

              {/* Product border glow effect on hover */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                style={{
                  background: `linear-gradient(45deg, rgba(100, 150, 255, 0.1), rgba(140, 100, 255, 0.1)) border-box`,
                  boxShadow: `0 0 40px 5px rgba(120, 130, 255, 0.15)`,
                  pointerEvents: "none",
                }}
              ></div>

              <div className="flex flex-col md:flex-row md:items-center relative z-10">
                <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center md:justify-start">
                  <div className="p-4 bg-gradient-to-br from-accent-500/40 to-secondary-600/40 rounded-lg backdrop-blur-sm border border-white/10 shadow-inner shadow-white/5 flex items-center justify-center">
                    {product.icon}
                  </div>
                </div>
                <div className="md:w-3/4 md:pl-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <h3 className="text-2xl font-bold mb-2 md:mb-0 bg-gradient-to-r from-white via-accent-100 to-white bg-clip-text text-transparent">
                      {product.name}
                    </h3>
                    <span className="bg-gradient-to-r from-secondary-500/40 to-secondary-700/40 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm border border-secondary-500/30 shadow-sm">
                      {product.status}
                    </span>
                  </div>
                  <p className="text-white/90 mb-4">{product.description}</p>
                  <div className="mb-6">
                    <h4 className="text-sm text-white/70 mb-2 uppercase tracking-wider font-medium">
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, fIndex) => (
                        <span
                          key={fIndex}
                          className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-md text-sm text-white/80 border border-white/10 hover:bg-white/20 transition-colors duration-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <Link
                      to="/products"
                      className="inline-flex items-center text-accent-300 hover:text-accent-200 font-medium transition-colors duration-300"
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
            </div>
          ))}
        </div>

        {/* Enhanced CTA with gradient button */}
        <div className="mt-16 text-center">
          <Link
            to="/products"
            className="inline-block relative overflow-hidden group rounded-md"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-accent-500 to-secondary-500 group-hover:from-accent-600 group-hover:to-secondary-600 transition-all duration-300"></span>
            <span className="relative block text-white font-medium px-8 py-3 z-10">
              View All Products
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/30"></span>
            </span>
            <span className="absolute -inset-[100%] bg-gradient-to-r from-accent-400/20 to-secondary-400/20 blur-xl transform rotate-45 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
