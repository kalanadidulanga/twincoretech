import React, { useEffect, useRef } from "react";
import Layout from "../components/layout/Layout";
import ContactCTA from "../components/ui/ContactCTA";
import { Link } from "react-router";

const Investors = () => {
  const heroRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Update page title
    document.title = "Investors | TwinCoreTech";

    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  // Operational principles from the README
  const principles = [
    {
      title: "Best in Class Service",
      description:
        "Deliver a best in class service and product that exceeds market expectations.",
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Lowering Barriers to Entry",
      description:
        "Enable small and medium enterprises to rapidly execute new ideas through accessible solutions.",
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
      title: "Diversity & Inclusion",
      description:
        "Strongly support diversity, equity and inclusion throughout our company and products.",
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
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-2 px-3 py-1 bg-accent-50 border border-accent-100 rounded-full">
              <span className="text-sm text-accent-600 font-medium">
                Investment Opportunities
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight relative">
              <span className="text-neutral-900">For </span>
              <span className="bg-gradient-to-r from-accent-600 via-primary-500 to-secondary-600 bg-clip-text text-transparent animate-color-shift relative">
                Investors
                <span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent-400 via-primary-400 to-secondary-400 rounded-full transform scale-x-0 transition-transform duration-700 ease-out origin-left"
                  style={{
                    animation: "scale-x 1.5s ease-out forwards",
                    animationDelay: "0.5s",
                  }}
                ></span>
              </span>
            </h1>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Join us in accelerating product development and speeding up market
              entry for our innovative Omadeas Suite - transforming digital
              operations across financial services.
            </p>
            <div className="flex justify-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-gradient-to-br from-accent-400 to-accent-500 animate-bounce"></div>
              <div
                className="h-2 w-2 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 animate-bounce"
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

      {/* Funding Model Section */}
      <section ref={sectionRef} className="py-20 bg-white relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -right-10 top-10 w-40 h-40 rounded-full bg-gradient-to-br from-primary-200/30 to-primary-300/20 blur-3xl animate-drift"
            style={{ animationDuration: "25s" }}
          ></div>
          <div
            className="absolute left-10 bottom-10 w-40 h-40 rounded-full bg-gradient-to-br from-accent-200/30 to-accent-300/20 blur-3xl animate-float"
            style={{ animationDuration: "28s" }}
          ></div>
          <div className="absolute right-1/3 bottom-1/3 w-20 h-20 rounded-full bg-gradient-to-br from-secondary-200/20 to-secondary-300/10 blur-2xl animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        </div>

        <div className="container max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <div className="inline-block mb-2 px-3 py-1 bg-primary-50 border border-primary-100 rounded-full">
              <span className="text-sm text-primary-600 font-medium">
                Our Financial Framework
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-5 bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-600 bg-clip-text text-transparent">
              Current Funding Model
            </h2>
            <div className="h-0.5 w-20 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto mb-6 transform transition-all duration-700 animate-pulse-slow"></div>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Our approach to sustainable growth and product development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8 border border-neutral-100">
                <h3 className="text-xl font-bold mb-4 text-neutral-900">
                  Self-Sustained Development
                </h3>
                <p className="text-neutral-700 mb-6">
                  All R&D is currently founder-funded and supported by revenue
                  from our consultancy services and TwinCoreTech investment
                  activities.
                </p>

                <div className="flex items-start space-x-4 mb-6 p-4 bg-primary-50 rounded-lg border border-primary-100/50 hover:border-primary-100 transition-colors duration-300">
                  <div className="bg-primary-100 p-2 rounded-full flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary-600"
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
                  <div>
                    <h4 className="font-medium text-neutral-900 mb-1">
                      Consultancy Revenue
                    </h4>
                    <p className="text-neutral-700 text-sm">
                      Income from our digital transformation consultancy
                      services
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-secondary-50 rounded-lg border border-secondary-100/50 hover:border-secondary-100 transition-colors duration-300">
                  <div className="bg-secondary-100 p-2 rounded-full flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-secondary-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900 mb-1">
                      Investment Activities
                    </h4>
                    <p className="text-neutral-700 text-sm">
                      Strategic investments to support our growth and R&D
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-300/40 via-accent-300/40 to-secondary-300/40 rounded-xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-xl bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-accent-50 border border-accent-100 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-accent-600"
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
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-neutral-900 text-center">
                    Product Development Timeline
                  </h3>
                  <div className="space-y-6">
                    <div className="relative pl-8 before:absolute before:left-3 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-primary-400 before:to-accent-400 before:animate-pulse-slow">
                      <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center shadow-sm">
                        <span className="text-white text-xs">1</span>
                      </div>
                      <h4 className="font-semibold text-primary-600">
                        Phase 1 (Q4 2025)
                      </h4>
                      <p className="text-neutral-700">
                        Omadeas TimeKeeper MVP release
                      </p>
                    </div>

                    <div className="relative pl-8 before:absolute before:left-3 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-accent-400 before:to-secondary-400 before:animate-pulse-slow">
                      <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-gradient-to-br from-accent-400 to-accent-500 flex items-center justify-center shadow-sm">
                        <span className="text-white text-xs">2</span>
                      </div>
                      <h4 className="font-semibold text-accent-600">Phase 2</h4>
                      <p className="text-neutral-700">
                        Omadeas SalesOps Launch & Integration
                      </p>
                    </div>

                    <div className="relative pl-8">
                      <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-500 flex items-center justify-center shadow-sm">
                        <span className="text-white text-xs">3</span>
                      </div>
                      <h4 className="font-semibold text-secondary-600">
                        Future Modules
                      </h4>
                      <p className="text-neutral-700">
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

      {/* Investment Opportunities */}
      <section className="py-20 bg-neutral-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-[5%] left-[45%] w-[40%] h-[30%] rounded-full bg-gradient-to-br from-accent-200/10 to-accent-300/5 blur-[100px] animate-float animate-drift"
            style={{ animationDuration: "30s" }}
          ></div>
          <div
            className="absolute bottom-[20%] right-[35%] w-[25%] h-[25%] rounded-full bg-gradient-to-tl from-primary-200/8 to-primary-300/4 blur-[90px] animate-float"
            style={{ animationDuration: "22s", animationDelay: "2s" }}
          ></div>
          <div
            className="absolute left-[15%] top-[40%] w-[20%] h-[25%] rounded-full bg-gradient-to-tr from-secondary-200/6 to-secondary-300/3 blur-[80px] animate-pulse-slower"
            style={{ animationDuration: "15s" }}
          ></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        </div>

        <div className="container max-w-[var(--container-max)] mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 relative">
            <div className="inline-block mb-2 px-3 py-1 bg-secondary-50 border border-secondary-100 rounded-full">
              <span className="text-sm text-secondary-600 font-medium">
                Growth Potential
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-5 bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-600 bg-clip-text text-transparent">
              Investment Opportunities
            </h2>
            <div className="h-0.5 w-20 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto mb-6 transform transition-all duration-700 animate-pulse-slow"></div>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              We are seeking strategic investment partners to accelerate our
              product development and speed up market entry
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-500 border border-neutral-100 hover:border-neutral-200 overflow-hidden group">
            {/* Subtle shine effect on hover */}
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-primary-100/30 to-accent-100/20 rotate-12 transform transition-transform duration-1000 group-hover:translate-x-24 group-hover:translate-y-24 rounded-full opacity-0 group-hover:opacity-100"></div>

            <div className="p-8 lg:p-10 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                    Modular Approach
                  </h3>
                  <p className="text-neutral-700 mb-6">
                    Our modular approach ensures that each Omadeas component is
                    released as soon as it is market-ready, allowing for early
                    traction and revenue generation.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center bg-neutral-50 p-3 rounded-lg border border-neutral-200 hover:border-accent-200 hover:bg-accent-50/30 transition-colors duration-300">
                      <div className="bg-accent-100 p-1.5 rounded-full flex-shrink-0 mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-accent-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-neutral-800">
                        Phased development with clear milestones
                      </span>
                    </div>
                    <div className="flex items-center bg-neutral-50 p-3 rounded-lg border border-neutral-200 hover:border-accent-200 hover:bg-accent-50/30 transition-colors duration-300">
                      <div className="bg-accent-100 p-1.5 rounded-full flex-shrink-0 mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-accent-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-neutral-800">
                        Early customer feedback integration
                      </span>
                    </div>
                    <div className="flex items-center bg-neutral-50 p-3 rounded-lg border border-neutral-200 hover:border-accent-200 hover:bg-accent-50/30 transition-colors duration-300">
                      <div className="bg-accent-100 p-1.5 rounded-full flex-shrink-0 mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-accent-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-neutral-800">
                        Quicker time-to-market for core features
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent">
                    Investment Focus Areas
                  </h3>
                  <p className="text-neutral-700 mb-6">
                    Strategic investments will accelerate our product roadmap
                    and expand our market reach across these key areas:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 hover:border-primary-200 hover:bg-primary-50/30 transition-all duration-300">
                      <h4 className="font-semibold text-neutral-900 mb-2">
                        R&D Acceleration
                      </h4>
                      <p className="text-neutral-700 text-sm">
                        Expanding our development team to speed up product
                        delivery
                      </p>
                    </div>
                    <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 hover:border-primary-200 hover:bg-primary-50/30 transition-all duration-300">
                      <h4 className="font-semibold text-neutral-900 mb-2">
                        AI Enhancement
                      </h4>
                      <p className="text-neutral-700 text-sm">
                        Building robust AI capabilities for our platform
                      </p>
                    </div>
                    <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 hover:border-primary-200 hover:bg-primary-50/30 transition-all duration-300">
                      <h4 className="font-semibold text-neutral-900 mb-2">
                        Market Expansion
                      </h4>
                      <p className="text-neutral-700 text-sm">
                        Entering new geographic markets and segments
                      </p>
                    </div>
                    <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 hover:border-primary-200 hover:bg-primary-50/30 transition-all duration-300">
                      <h4 className="font-semibold text-neutral-900 mb-2">
                        Client Success
                      </h4>
                      <p className="text-neutral-700 text-sm">
                        Building support infrastructure for enterprise clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-10">
                <Link
                  to="/contact"
                  className="inline-block relative overflow-hidden group rounded-md"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-500 to-secondary-500 group-hover:from-accent-600 group-hover:to-secondary-600 transition-all duration-300"></span>
                  <span className="relative block text-white font-medium px-8 py-3 z-10">
                    Discuss Investment Opportunities
                  </span>
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/30"></span>
                  <span className="absolute -inset-[100%] bg-gradient-to-r from-accent-400/20 to-secondary-400/20 blur-xl transform rotate-45 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Principles */}
      <section className="py-20 bg-white relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -z-10 w-32 h-32 bg-primary-50 rounded-full blur-3xl opacity-30 top-20 -left-10"></div>
          <div className="absolute -z-10 w-40 h-40 bg-accent-50 rounded-full blur-3xl opacity-30 bottom-20 -right-10"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        </div>

        <div className="container max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <div className="inline-block mb-2 px-3 py-1 bg-primary-50 border border-primary-100 rounded-full">
              <span className="text-sm text-primary-600 font-medium">
                Our Values
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-5 bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-600 bg-clip-text text-transparent">
              Operational Principles
            </h2>
            <div className="h-0.5 w-20 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto mb-6 transform transition-all duration-700 animate-pulse-slow"></div>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              While we believe in strong business and cash growth, we are keen
              to ensure that we build a socially responsible business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-6 border border-neutral-100 group"
              >
                <div className="mb-6 p-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl inline-flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-neutral-900 group-hover:text-primary-600 transition-colors duration-300">
                  {principle.title}
                </h3>
                <p className="text-neutral-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment CTA */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-primary-50/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-[10%] right-[30%] w-[35%] h-[20%] rounded-full bg-gradient-to-br from-primary-200/10 to-primary-300/5 blur-[100px] animate-drift"
            style={{ animationDuration: "40s" }}
          ></div>
          <div
            className="absolute bottom-[20%] left-[25%] w-[25%] h-[20%] rounded-full bg-gradient-to-tl from-accent-200/10 to-accent-300/5 blur-[80px] animate-float"
            style={{ animationDuration: "35s" }}
          ></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.01]"></div>
        </div>

        <div className="container max-w-[var(--container-max)] mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 md:p-12 border border-neutral-100 relative group overflow-hidden">
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100/0 via-primary-200/0 to-accent-200/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Animated decorative corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
              <div className="absolute top-0 left-0 w-6 h-1 bg-gradient-to-r from-primary-300 to-primary-500"></div>
              <div className="absolute top-0 left-0 w-1 h-6 bg-gradient-to-b from-primary-300 to-primary-500"></div>
            </div>
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
              <div className="absolute top-0 right-0 w-6 h-1 bg-gradient-to-r from-accent-500 to-accent-300"></div>
              <div className="absolute top-0 right-0 w-1 h-6 bg-gradient-to-b from-accent-300 to-accent-500"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden">
              <div className="absolute bottom-0 left-0 w-6 h-1 bg-gradient-to-r from-primary-300 to-primary-500"></div>
              <div className="absolute bottom-0 left-0 w-1 h-6 bg-gradient-to-b from-primary-500 to-primary-300"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
              <div className="absolute bottom-0 right-0 w-6 h-1 bg-gradient-to-r from-accent-500 to-accent-300"></div>
              <div className="absolute bottom-0 right-0 w-1 h-6 bg-gradient-to-b from-accent-500 to-accent-300"></div>
            </div>

            {/* Content */}
            <div className="text-center mb-8 relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-600 bg-clip-text text-transparent">
                Interested in Investment Opportunities?
              </h2>
              <p className="text-neutral-700">
                If you are interested in discussing investment opportunities,
                we'd love to hear from you. Our modular approach ensures that
                each Omadeas module is released as soon as it is market-ready,
                allowing for early traction and revenue generation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="text-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium hover:from-primary-600 hover:to-accent-600 transition-all duration-300 hover:shadow-md hover:shadow-primary-500/20"
              >
                Get in Touch
              </Link>
              <Link
                to="/products"
                className="text-center px-6 py-3 rounded-lg border border-neutral-200 hover:border-primary-300 text-neutral-700 font-medium hover:bg-primary-50/50 transition-all duration-300"
              >
                Learn About Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTA />
    </Layout>
  );
};

export default Investors;
