import React, { useEffect, useRef } from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router";
import ContactCTA from "../components/ui/ContactCTA";

const Products = () => {
  useEffect(() => {
    // Update page title
    document.title = "Products | TwinCoreTech";
    window.scrollTo(0, 0);
  }, []);

  // References for animations and scroll effects
  const heroRef = useRef(null);
  const timelineRef = useRef(null);

  const mainProducts = [
    {
      id: "timekeeper",
      name: "Omadeas TimeKeeper",
      tagline: "Intelligent Time & Project Tracking",
      description:
        "A comprehensive time & project tracking solution designed specifically for digital transformation teams. TimeKeeper combines intuitive tracking with powerful analytics to optimize resource allocation and improve project delivery.",
      features: [
        "Real-time project tracking dashboards",
        "AI-assisted time categorization",
        "Resource utilization analytics",
        "Integration with major project management tools",
        "Customizable reporting and forecasting",
      ],
      status: "Phase 1 (Coming Q4 2025)",
      primaryColor: "from-primary-500 to-accent-500",
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
      id: "salesops",
      name: "Omadeas SalesOps",
      tagline: "Pipeline Optimization & Deal Intelligence",
      description:
        "Simplified sales pipeline management with pricing & planning integration. SalesOps provides a clear view of your sales funnel with intelligent forecasting and deal structuring assistance, powered by our advanced pricing models.",
      features: [
        "Interactive pipeline visualization",
        "Predictive deal scoring and forecasting",
        "Automated pricing optimization",
        "Customer journey tracking",
        "Integration with CRM platforms",
      ],
      status: "Phase 2",
      primaryColor: "from-accent-500 to-secondary-500",
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
      id: "projectops",
      name: "Omadeas ProjectOps",
      tagline: "Advanced Project & Resource Management",
      description:
        "A sophisticated project management suite including dependency modeling, financial forecasting, and resource planning. ProjectOps helps transformation programs stay on track with clear visibility of interdependencies and resource conflicts.",
      features: [
        "Interactive dependency mapping",
        "Scenario planning and testing",
        "Resource optimization algorithms",
        "Financial modeling and tracking",
        "Risk prediction and mitigation planning",
      ],
      status: "Coming Soon",
      primaryColor: "from-primary-500 to-secondary-500",
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

  const futureProducts = [
    {
      id: "academy",
      name: "Omadeas Academy",
      description:
        "Learning & skills enhancement platform tailored for transformation teams",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      ),
    },
    {
      id: "beancounter",
      name: "Omadeas BeanCounter",
      description:
        "Project accounting & financial forecasting for transformation programs",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      id: "agentic",
      name: "Omadeas Agentic AI",
      description:
        "Operational optimization & workflow automation powered by AI",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center overflow-hidden bg-neutral-50"
      >
        {/* Enhanced background elements with beautiful blurry animation */}
        <div className="absolute inset-0 overflow-hidden animate-color-shift">
          {/* Large ethereal orb with subtle color shifting */}
          <div
            className="absolute top-[20%] left-[45%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-primary-400/10 to-accent-300/5 blur-[100px] animate-float animate-drift"
            style={{ animationDuration: "30s" }}
          ></div>

          {/* Secondary floating element with soft edges */}
          <div
            className="absolute bottom-[30%] right-[35%] w-[25%] h-[35%] rounded-full bg-gradient-to-tl from-secondary-400/8 to-tertiary-300/4 blur-[90px] animate-float"
            style={{ animationDuration: "22s", animationDelay: "2s" }}
          ></div>

          {/* Accent bubble with gentle pulsation */}
          <div
            className="absolute left-[15%] top-[40%] w-[20%] h-[25%] rounded-full bg-gradient-to-tr from-accent-300/6 to-primary-300/3 blur-[80px] animate-pulse-slower"
            style={{ animationDuration: "15s" }}
          ></div>

          {/* Ethereal light beam that flows across the screen */}
          <div
            className="absolute inset-y-0 w-full h-[40%] top-[30%] bg-gradient-to-r from-primary-200/5 via-accent-200/8 to-secondary-200/5 blur-[120px] animate-flow-x"
            style={{ animationDuration: "40s" }}
          ></div>

          {/* Overlay with subtle texture */}
          <div
            className="absolute inset-0 bg-grid-pattern opacity-[0.03] animate-subtle-shift"
            style={{ animationDuration: "50s" }}
          ></div>

          {/* Delicate animated border lines */}
          <div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300/10 to-transparent animate-flow-x"
            style={{ backgroundSize: "200% 100%" }}
          ></div>
          <div
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-300/10 to-transparent animate-flow-x-reverse"
            style={{ backgroundSize: "200% 100%" }}
          ></div>
        </div>

        <div className="container max-w-[var(--container-max)] mx-auto px-6 lg:px-8 relative z-10 pt-24 pb-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-2 px-3 py-1 bg-primary-50 border border-primary-100 rounded-full">
              <span className="text-sm text-primary-600 font-medium">
                Omadeas Product Suite
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight relative">
              <span className="text-neutral-900">Our </span>
              <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-600 bg-clip-text text-transparent animate-color-shift relative">
                Products
                <span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 rounded-full transform scale-x-0 transition-transform duration-700 ease-out origin-left"
                  style={{
                    animation: "scale-x 1.5s ease-out forwards",
                    animationDelay: "0.5s",
                  }}
                ></span>
              </span>
            </h1>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Solutions born from real-world experience delivering complex
              digital transformation programmes across financial services,
              insurance, and pensions sectors.
            </p>
            <div className="flex justify-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 animate-bounce"></div>
              <div
                className="h-2 w-2 rounded-full bg-gradient-to-br from-accent-400 to-accent-500 animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="h-2 w-2 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-500 animate-bounce"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Products Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-5 text-center">Core Product Suite</h2>
            <div className="h-0.5 w-12 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-neutral-700 text-center">
              Our flagship products designed to streamline and enhance digital
              transformation processes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainProducts.map((product) => {
              // Extract color name from the gradient string
              const colorName = product.primaryColor.includes('primary') ? 'primary' : 
                              product.primaryColor.includes('accent') ? 'accent' : 
                              product.primaryColor.includes('tertiary') ? 'tertiary' : 'secondary';
              
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-lg p-8 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`mb-5 text-${colorName}-600`}>
                    {React.cloneElement(product.icon, { className: `h-8 w-8 text-${colorName}-600` })}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-900">
                    {product.name}
                  </h3>
                  <p className="text-sm text-neutral-600 font-medium mb-4">
                    {product.tagline}
                  </p>
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-${colorName}-100 text-${colorName}-700 mb-4`}>
                    {product.status}
                  </span>
                  <p className="text-neutral-600 mb-6">{product.description}</p>

                  <div>
                    <div className="text-sm uppercase text-neutral-500 mb-3 font-medium">
                      Key Features
                    </div>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className={`h-5 w-5 mr-2 text-${colorName}-600 flex-shrink-0 mt-0.5`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Roadmap Section */}
      <section ref={timelineRef} className="py-20 bg-neutral-50">
        <div className="container max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-2 px-3 py-1 bg-secondary-50 border border-secondary-100 rounded-full">
              <span className="text-sm text-secondary-600 font-medium">
                Product Roadmap
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-5 text-center">Future Innovations</h2>
            <div className="h-0.5 w-12 bg-secondary-600 mx-auto mb-6"></div>
            <p className="text-lg text-neutral-700 text-center">
              Our product roadmap includes these upcoming solutions to further
              enhance digital transformation capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futureProducts.map((product, index) => {
              // Alternate colors between primary, secondary, and tertiary
              const colorMap = ['primary', 'secondary', 'tertiary'];
              const colorName = colorMap[index % colorMap.length];
              
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-lg border border-neutral-200 p-6 hover:shadow-lg hover:border-neutral-300 transition-all duration-300"
                >
                  <div className={`h-14 w-14 flex items-center justify-center rounded-full bg-${colorName}-50 mb-6`}>
                    <div className={`text-${colorName}-600`}>
                      {product.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                    {product.name}
                  </h3>
                  <p className="text-neutral-600 mb-4">{product.description}</p>
                  <Link
                    to="/products" 
                    className={`text-sm font-medium inline-flex items-center text-${colorName}-600 hover:underline`}
                  >
                    Coming soon
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
              to="/contact"
              className="inline-block px-8 py-3 border-2 border-primary-600 text-primary-600 font-medium rounded-md hover:bg-primary-600 hover:text-white transition-all duration-300"
            >
              Request Product Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTA />
    </Layout>
  );
};

export default Products;
