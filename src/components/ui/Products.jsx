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
          className="h-9 w-9"
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
      color: "primary"
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
          className="h-9 w-9"
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
      color: "accent"
    },
    {
      name: "Omadeas ProjectOps",
      description:
        "Advanced project management suite including dependency modeling and resource planning.",
      features: [
        "Dependency management",
        "Resource planning",
        "Financial modeling",
      ],
      status: "Coming soon",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9"
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
      color: "tertiary"
    },
  ];

  // Get color classes based on product color
  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: "bg-primary-50",
        icon: "text-primary-600",
        title: "text-primary-700",
        badge: "bg-primary-100 text-primary-700",
        border: "border-primary-200"
      },
      accent: {
        bg: "bg-accent-50",
        icon: "text-accent-600",
        title: "text-accent-700",
        badge: "bg-accent-100 text-accent-700",
        border: "border-accent-200"
      },
      secondary: {
        bg: "bg-secondary-50",
        icon: "text-secondary-600",
        title: "text-secondary-700",
        badge: "bg-secondary-100 text-secondary-700", 
        border: "border-secondary-200"
      },
      tertiary: {
        bg: "bg-tertiary-50",
        icon: "text-tertiary-600",
        title: "text-tertiary-700",
        badge: "bg-tertiary-100 text-tertiary-700",
        border: "border-tertiary-200"
      },
      gold: {
        bg: "bg-gold-50",
        icon: "text-gold-600",
        title: "text-gold-700",
        badge: "bg-gold-100 text-gold-700",
        border: "border-gold-200"
      },
    };

    return colorMap[color] || colorMap.primary;
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-white relative"
    >
      <div className="container max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16">
          <h2
            ref={headingRef}
            className="text-3xl font-bold mb-5 text-center"
          >
            Our Products
          </h2>
          <div className="h-0.5 w-12 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-700 text-center">
            Born from real-world experience delivering complex digital
            transformation programmes across financial services, insurance, and pensions sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const colorClasses = getColorClasses(product.color);
            
            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className={`p-6 ${colorClasses.bg} border-b ${colorClasses.border}`}>
                  <div className={`mb-4 ${colorClasses.icon}`}>
                    {product.icon}
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${colorClasses.title}`}>
                    {product.name}
                  </h3>
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${colorClasses.badge}`}>
                    {product.status}
                  </span>
                </div>
                
                <div className="p-6">
                  <p className="text-neutral-600 mb-6">{product.description}</p>
                  
                  <div>
                    <div className="text-sm uppercase text-neutral-500 mb-3 font-medium">
                      Key Features
                    </div>
                    <ul className="space-y-2">
                      {product.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center">
                          <svg className={`h-4 w-4 mr-2 ${colorClasses.icon}`} viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="px-6 pb-6 pt-2">
                  <Link 
                    to="/products" 
                    className={`text-sm font-medium inline-flex items-center ${colorClasses.icon} hover:underline`}
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/products"
            className="inline-block px-8 py-3 border-2 border-primary-600 text-primary-600 font-medium rounded-md hover:bg-primary-600 hover:text-white transition-all duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
