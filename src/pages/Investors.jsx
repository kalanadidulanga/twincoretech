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
        className="py-32 bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-900 text-white relative overflow-hidden"
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

        {/* Decorative elements */}
        <div className="absolute -left-24 top-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-accent-600/20 via-accent-400/10 to-accent-600/20 blur-3xl"></div>
        <div className="absolute -right-24 bottom-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-secondary-500/20 via-primary-400/10 to-secondary-400/20 blur-3xl"></div>

        <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-accent-300 via-white to-secondary-300 bg-clip-text text-transparent">
                For Investors
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed backdrop-blur-sm bg-black/5 rounded-lg p-4">
              Join us in accelerating product development and speeding up market
              entry for our innovative Omadeas Suite - transforming digital
              operations across financial services.
            </p>
          </div>
        </div>
      </section>

      {/* Funding Model Section */}
      <section
        ref={sectionRef}
        className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 relative"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute -right-10 top-10 w-40 h-40 rounded-full bg-primary-300 dark:bg-primary-800 blur-3xl opacity-20"></div>
          <div className="absolute left-10 bottom-10 w-40 h-40 rounded-full bg-accent-300 dark:bg-accent-800 blur-3xl opacity-20"></div>
          <div className="absolute right-1/3 bottom-1/3 w-20 h-20 rounded-full bg-secondary-300 dark:bg-secondary-800 blur-2xl opacity-20"></div>
        </div>

        <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Current Funding Model
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
              Our approach to sustainable growth and product development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="card p-8 bg-gradient-to-br from-white/80 to-white/90 dark:from-neutral-800/80 dark:to-neutral-800/90 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">
                  Self-Sustained Development
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                  All R&D is currently founder-funded and supported by revenue
                  from our consultancy services and TwinCoreTech investment
                  activities.
                </p>

                <div className="flex items-start space-x-4 mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                  <div className="bg-primary-100 dark:bg-primary-800/40 p-2 rounded-full flex-shrink-0">
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-white mb-1">
                      Consultancy Revenue
                    </h4>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                      Income from our digital transformation consultancy
                      services
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-secondary-50 dark:bg-secondary-900/20 rounded-lg">
                  <div className="bg-secondary-100 dark:bg-secondary-800/40 p-2 rounded-full flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-secondary-600 dark:text-secondary-400"
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
                    <h4 className="font-medium text-neutral-900 dark:text-white mb-1">
                      Investment Activities
                    </h4>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                      Strategic investments to support our growth and R&D
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative p-1 rounded-2xl bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500">
                <div className="absolute inset-0 blur-xl opacity-40 rounded-2xl bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500"></div>
                <div className="relative overflow-hidden rounded-xl bg-white dark:bg-neutral-800 p-8">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-accent-100 dark:bg-accent-900/30 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-accent-600 dark:text-accent-400"
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
                  <h3 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white text-center">
                    Product Development Timeline
                  </h3>
                  <div className="space-y-6">
                    <div className="relative pl-8 before:absolute before:left-3 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-primary-500 before:to-accent-500">
                      <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center">
                        <span className="text-white text-xs">1</span>
                      </div>
                      <h4 className="font-semibold text-primary-700 dark:text-primary-400">
                        Phase 1 (Q4 2025)
                      </h4>
                      <p className="text-neutral-700 dark:text-neutral-300">
                        Omadeas TimeKeeper MVP release
                      </p>
                    </div>

                    <div className="relative pl-8 before:absolute before:left-3 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-accent-500 before:to-secondary-500">
                      <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-accent-500 flex items-center justify-center">
                        <span className="text-white text-xs">2</span>
                      </div>
                      <h4 className="font-semibold text-accent-700 dark:text-accent-400">
                        Phase 2
                      </h4>
                      <p className="text-neutral-700 dark:text-neutral-300">
                        Omadeas SalesOps Launch & Integration
                      </p>
                    </div>

                    <div className="relative pl-8">
                      <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-secondary-500 flex items-center justify-center">
                        <span className="text-white text-xs">3</span>
                      </div>
                      <h4 className="font-semibold text-secondary-700 dark:text-secondary-400">
                        Future Modules
                      </h4>
                      <p className="text-neutral-700 dark:text-neutral-300">
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
                Investment Opportunities
              </span>
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-accent-400/70 to-secondary-400/70 rounded-full"></span>
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto backdrop-blur-sm bg-primary-950/30 rounded-lg py-2 px-4">
              We are seeking strategic investment partners to accelerate our
              product development and speed up market entry
            </p>
          </div>

          <div className="group bg-gradient-to-r from-primary-800/60 via-primary-900/60 to-secondary-900/60 backdrop-blur-md rounded-xl p-8 lg:p-10 hover:from-primary-700/70 hover:via-primary-800/70 hover:to-secondary-800/70 transition-all duration-500 border border-white/10 hover:border-white/20 shadow-lg shadow-primary-950/50 hover:shadow-xl hover:shadow-primary-900/30 relative overflow-hidden">
            {/* Enhanced glassmorphism shine effect */}
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-white/10 to-white/5 rotate-12 transform transition-transform duration-1000 group-hover:translate-x-24 group-hover:translate-y-24 rounded-full"></div>

            {/* Border glow effect on hover */}
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
              style={{
                background: `linear-gradient(45deg, rgba(100, 150, 255, 0.1), rgba(140, 100, 255, 0.1)) border-box`,
                boxShadow: `0 0 40px 5px rgba(120, 130, 255, 0.15)`,
                pointerEvents: "none",
              }}
            ></div>

            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-accent-100 to-white bg-clip-text text-transparent">
                    Modular Approach
                  </h3>
                  <p className="text-white/90 mb-6">
                    Our modular approach ensures that each Omadeas component is
                    released as soon as it is market-ready, allowing for early
                    traction and revenue generation.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/10 hover:bg-white/20 transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-accent-300 mr-3 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-white/80">
                        Phased development with clear milestones
                      </span>
                    </div>
                    <div className="flex items-center bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/10 hover:bg-white/20 transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-accent-300 mr-3 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-white/80">
                        Early customer feedback integration
                      </span>
                    </div>
                    <div className="flex items-center bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/10 hover:bg-white/20 transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-accent-300 mr-3 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-white/80">
                        Quicker time-to-market for core features
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-secondary-100 to-white bg-clip-text text-transparent">
                    Investment Focus Areas
                  </h3>
                  <p className="text-white/90 mb-6">
                    Strategic investments will accelerate our product roadmap
                    and expand our market reach across these key areas:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:bg-white/15 transition-all duration-300">
                      <h4 className="font-semibold text-white mb-2">
                        R&D Acceleration
                      </h4>
                      <p className="text-white/70 text-sm">
                        Expanding our development team to speed up product
                        delivery
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:bg-white/15 transition-all duration-300">
                      <h4 className="font-semibold text-white mb-2">
                        AI Enhancement
                      </h4>
                      <p className="text-white/70 text-sm">
                        Building robust AI capabilities for our platform
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:bg-white/15 transition-all duration-300">
                      <h4 className="font-semibold text-white mb-2">
                        Market Expansion
                      </h4>
                      <p className="text-white/70 text-sm">
                        Entering new geographic markets and segments
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:bg-white/15 transition-all duration-300">
                      <h4 className="font-semibold text-white mb-2">
                        Client Success
                      </h4>
                      <p className="text-white/70 text-sm">
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
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/30"></span>
                  </span>
                  <span className="absolute -inset-[100%] bg-gradient-to-r from-accent-400/20 to-secondary-400/20 blur-xl transform rotate-45 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Principles */}
      <section className="py-20 bg-white dark:bg-neutral-900 relative">
        <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Operational Principles
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
              While we believe in strong business and cash growth, we are keen
              to ensure that we build a socially responsible business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-6 p-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg inline-flex items-center justify-center text-white">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">
                  {principle.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute right-1/4 top-1/4 w-64 h-64 rounded-full bg-primary-300/30 dark:bg-primary-700/20 blur-3xl"></div>
          <div className="absolute left-1/4 bottom-1/3 w-64 h-64 rounded-full bg-accent-300/20 dark:bg-accent-700/20 blur-3xl"></div>
        </div>

        <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-200 dark:border-neutral-700">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
                Interested in Investment Opportunities?
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300">
                If you are interested in discussing investment opportunities,
                we'd love to hear from you. Our modular approach ensures that
                each Omadeas module is released as soon as it is market-ready,
                allowing for early traction and revenue generation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary text-center">
                Get in Touch
              </Link>
              <Link to="/products" className="btn-outline text-center">
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
