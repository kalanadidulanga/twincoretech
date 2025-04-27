import React, { useEffect, useRef } from "react";
import { Link } from "react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductsSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const productsRef = useRef([]);

  useEffect(() => {
    // Animate section heading
    gsap.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none",
      },
    });

    // Animate products
    productsRef.current.forEach((product, index) => {
      gsap.from(product, {
        x: index % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.15,
        scrollTrigger: {
          trigger: product,
          start: "top bottom-=50",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

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
          className="h-12 w-12"
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
          className="h-12 w-12"
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
          className="h-12 w-12"
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
      className="py-20 bg-gradient-to-br from-primary-900 to-accent-900 text-white"
    >
      <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={headingRef}
            className="text-3xl font-bold mb-6 relative inline-block"
          >
            Omadeas Product Suite
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-secondary-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-neutral-200 max-w-3xl mx-auto">
            Born from real-world experience delivering complex digital
            transformation programmes across UK and European financial services,
            insurance, and pensions sectors.
          </p>
        </div>

        <div className="space-y-12">
          {products.map((product, index) => (
            <div
              key={index}
              ref={(el) => (productsRef.current[index] = el)}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 lg:p-8 hover:bg-opacity-20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="bg-primary-700 bg-opacity-50 p-4 rounded-xl mb-6 md:mb-0 md:mr-8 w-16 h-16 flex items-center justify-center">
                  {product.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold mb-2 md:mb-0">
                      {product.name}
                    </h3>
                    <span className="inline-block bg-accent-600 bg-opacity-40 rounded-full px-4 py-1 text-sm">
                      {product.status}
                    </span>
                  </div>
                  <p className="mb-4 text-neutral-200">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-white bg-opacity-10 rounded-full px-3 py-1 text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/products" className="btn-secondary">
            Explore All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
