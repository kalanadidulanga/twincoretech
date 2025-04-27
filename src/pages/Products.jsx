import React, { useEffect, useRef } from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router";
import ContactCTA from "../components/ui/ContactCTA";

const Products = () => {
  useEffect(() => {
    // Update page title
    document.title = "Products | TwinCoreTech";
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
        className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-900"
      >
        {/* Modern mesh gradient overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(120, 100, 255, 0.4) 0%, transparent 30%),
                          radial-gradient(circle at 80% 10%, rgba(72, 219, 251, 0.3) 0%, transparent 40%),
                          radial-gradient(circle at 40% 80%, rgba(173, 81, 255, 0.4) 0%, transparent 50%)`,
          }}
        ></div>

        {/* Enhanced glossy sphere decorative elements */}
        <div className="absolute left-10 top-1/4 w-60 h-60 rounded-full bg-gradient-to-br from-primary-400/40 to-accent-600/30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute right-20 bottom-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-secondary-400/30 to-secondary-600/20 blur-3xl animate-pulse-slow animation-delay-2000"></div>

        <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-accent-300 via-secondary-300 to-accent-400 bg-clip-text text-transparent">
                Omadeas Product Suite
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed backdrop-blur-sm bg-black/5 rounded-lg p-4">
              Cutting-edge tools developed from real-world experience delivering
              complex digital transformation programmes across UK and European
              financial services, insurance, and pension sectors.
            </p>
          </div>

          {/* Animated down arrow */}
          <div className="mt-12 text-center">
            <div className="inline-block animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Product Vision */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 relative">
        <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                From Consultancy to Scalable Technology
              </h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
                We are designing and building simple yet powerful products
                grounded on state-of-the-art data architecture with intuitive
                natural language interfaces.
              </p>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
                Until the launch of the complete Omadeas Product Suite, our
                consultancy services are powered by proprietary models,
                providing structured frameworks for financial modelling,
                pricing, forecasting, and migration planning.
              </p>
              <div className="mt-8">
                <div className="inline-flex items-center rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-700/30 p-4">
                  <div className="mr-4 bg-primary-100 dark:bg-primary-800/30 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary-600 dark:text-primary-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m-1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-neutral-800 dark:text-neutral-200">
                      All our products are thoroughly tested in-house on our own
                      projects and operations before release.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              {/* Decorative elements */}
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-primary-300/20 dark:bg-primary-800/20 blur-3xl"></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-accent-300/20 dark:bg-accent-800/20 blur-3xl"></div>

              {/* Product vision chart/image */}
              <div className="relative bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700">
                <h3 className="text-xl font-bold mb-6 text-neutral-900 dark:text-white">
                  Product Development Roadmap
                </h3>

                {/* Timeline element */}
                <div ref={timelineRef} className="relative ml-4">
                  {/* Timeline line */}
                  <div className="absolute top-0 left-3 h-full w-1 bg-gradient-to-b from-primary-500 via-accent-500 to-secondary-500 rounded-full transform -translate-x-1/2"></div>

                  {/* Timeline items */}
                  <div className="mb-8 relative">
                    <div className="absolute top-0 left-0 h-6 w-6 bg-primary-500 rounded-full transform -translate-x-1/2 border-4 border-white dark:border-neutral-800"></div>
                    <div className="pl-8">
                      <h4 className="text-lg font-semibold text-primary-700 dark:text-primary-400">
                        Phase 1 (Q4 2025)
                      </h4>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        Omadeas TimeKeeper Launch
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 relative">
                    <div className="absolute top-0 left-0 h-6 w-6 bg-accent-500 rounded-full transform -translate-x-1/2 border-4 border-white dark:border-neutral-800"></div>
                    <div className="pl-8">
                      <h4 className="text-lg font-semibold text-accent-700 dark:text-accent-400">
                        Phase 2
                      </h4>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        Omadeas SalesOps Integration
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute top-0 left-0 h-6 w-6 bg-secondary-500 rounded-full transform -translate-x-1/2 border-4 border-white dark:border-neutral-800"></div>
                    <div className="pl-8">
                      <h4 className="text-lg font-semibold text-secondary-700 dark:text-secondary-400">
                        Future Releases
                      </h4>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        ProjectOps, Academy, BeanCounter, Agentic AI
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Products Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-950 to-secondary-900 text-white relative overflow-hidden">
        {/* Enhanced decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/10 to-transparent"></div>
        <div className="absolute -left-24 top-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-accent-600/20 via-accent-400/10 to-accent-600/20 blur-3xl"></div>
        <div className="absolute -right-24 bottom-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-secondary-500/20 via-primary-400/10 to-secondary-400/20 blur-3xl"></div>

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
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-accent-300 via-white to-secondary-300 bg-clip-text text-transparent">
                Our Core Products
              </span>
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-accent-400/70 to-secondary-400/70 rounded-full"></span>
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto backdrop-blur-sm bg-primary-950/30 rounded-lg py-2 px-4">
              Our integrated suite of tools designed to transform how
              organizations manage digital transformation projects.
            </p>
          </div>

          <div className="space-y-20">
            {mainProducts.map((product, index) => (
              <div
                key={product.id}
                id={product.id}
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

                {/* Product content */}
                <div className="relative z-10">
                  <div className="mb-6 inline-block">
                    <div
                      className={`p-4 bg-gradient-to-br ${product.primaryColor} rounded-lg backdrop-blur-sm border border-white/10 shadow-inner shadow-white/5`}
                    >
                      {product.icon}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white via-accent-100 to-white bg-clip-text text-transparent">
                        {product.name}
                      </h3>
                      <p className="text-xl text-accent-300 font-medium">
                        {product.tagline}
                      </p>
                    </div>
                    <span className="mt-3 md:mt-0 bg-gradient-to-r from-secondary-500/40 to-secondary-700/40 text-white text-sm px-4 py-2 rounded-full backdrop-blur-sm border border-secondary-500/30 shadow-sm">
                      {product.status}
                    </span>
                  </div>

                  <p className="text-white/90 text-lg mb-8">
                    {product.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm uppercase tracking-wider font-medium text-white/70 mb-4">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {product.features.map((feature, fIndex) => (
                        <div
                          key={fIndex}
                          className="flex items-center bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/10 hover:bg-white/20 transition-colors duration-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-accent-300 mr-2 flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Innovative CTA button */}
                  <div className="text-center">
                    <a
                      href={`#${product.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        // Here you would implement modal or detailed view logic
                        alert(`Details for ${product.name} would open`);
                      }}
                      className="inline-block relative overflow-hidden group rounded-md"
                    >
                      <span
                        className={`absolute inset-0 bg-gradient-to-r ${product.primaryColor} group-hover:from-accent-600 group-hover:to-secondary-600 transition-all duration-300`}
                      ></span>
                      <span className="relative block text-white font-medium px-6 py-3 z-10">
                        Learn More About {product.name}
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/30"></span>
                      </span>
                      <span className="absolute -inset-[100%] bg-gradient-to-r from-white/20 to-white/10 blur-xl transform rotate-45 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Products Grid */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900 relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute -right-10 top-10 w-40 h-40 rounded-full bg-primary-300 dark:bg-primary-800 blur-3xl opacity-20"></div>
          <div className="absolute left-10 bottom-10 w-40 h-40 rounded-full bg-accent-300 dark:bg-accent-800 blur-3xl opacity-20"></div>
          <div className="absolute right-1/3 bottom-1/3 w-20 h-20 rounded-full bg-secondary-300 dark:bg-secondary-800 blur-2xl opacity-20"></div>
        </div>

        <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Future Product Modules
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Our roadmap includes these specialized modules that will integrate
              seamlessly with our core product suite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {futureProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="mb-4 p-3 rounded-lg inline-flex items-center justify-center bg-gradient-to-br from-primary-500 to-accent-500">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                  {product.description}
                </p>
                <div className="flex justify-end mt-4">
                  <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    Coming soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases section */}
      <section className="py-20 bg-gradient-to-br from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
        <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Real-World Applications
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              See how our products can be applied to solve common challenges in
              digital transformation projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="card p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700">
              <div className="mb-4 p-2 bg-primary-100 dark:bg-primary-900/50 rounded-lg inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary-600 dark:text-primary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">
                Financial Services
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Track complex regulatory compliance projects, manage resource
                allocation across multiple workstreams, and forecast delivery
                timelines with precision.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Regulatory compliance tracking
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Multi-workstream resource optimization
                  </span>
                </li>
              </ul>
            </div>

            <div className="card p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700">
              <div className="mb-4 p-2 bg-accent-100 dark:bg-accent-900/50 rounded-lg inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-accent-600 dark:text-accent-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">
                Insurance
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Plan and execute legacy system migrations, model cost
                implications of different approach options, and track
                interdependent workstreams.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-accent-600 dark:text-accent-400 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Legacy system migration planning
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-accent-600 dark:text-accent-400 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Cost modeling for migration approaches
                  </span>
                </li>
              </ul>
            </div>

            <div className="card p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700">
              <div className="mb-4 p-2 bg-secondary-100 dark:bg-secondary-900/50 rounded-lg inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-secondary-600 dark:text-secondary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">
                Pensions
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Transform operating models, optimize business processes, and
                enhance data integration across multiple systems and datasets.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-secondary-600 dark:text-secondary-400 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Operating model transformation
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-secondary-600 dark:text-secondary-400 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Cross-system data integration
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTA />
    </Layout>
  );
};

export default Products;
