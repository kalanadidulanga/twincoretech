import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import ServicesSection from "../components/ui/Services";
import ContactCTA from "../components/ui/ContactCTA";

const Services = () => {
  useEffect(() => {
    // Update page title
    document.title = "Services | TwinCoreTech";
  }, []);

  return (
    <Layout>
      {/* Services Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-800 to-secondary-800 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-1/4 top-1/4 w-64 h-64 rounded-full bg-primary-400/20 blur-3xl"></div>
          <div className="absolute right-1/4 bottom-1/3 w-64 h-64 rounded-full bg-secondary-400/20 blur-3xl"></div>
        </div>

        <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-accent-300 via-white to-secondary-300 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed backdrop-blur-sm bg-black/5 rounded-lg p-4">
              End-to-end digital transformation services and operational
              expertise tailored to your organization's specific needs and
              goals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Listing */}
      <ServicesSection />

      {/* Service Approach Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 relative">
        <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Our Approach
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
              We deliver value through a structured yet flexible methodology
              that ensures measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6 hover:shadow-lg transition-all duration-300">
              <div className="mb-4 p-3 rounded-lg inline-flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-600">
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                Assess
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                We analyze your current systems, processes, and challenges to
                establish a clear baseline.
              </p>
            </div>

            <div className="card p-6 hover:shadow-lg transition-all duration-300">
              <div className="mb-4 p-3 rounded-lg inline-flex items-center justify-center bg-gradient-to-br from-accent-500 to-accent-600">
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
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                Plan
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                We develop a comprehensive roadmap with clear milestones,
                resources, and success metrics.
              </p>
            </div>

            <div className="card p-6 hover:shadow-lg transition-all duration-300">
              <div className="mb-4 p-3 rounded-lg inline-flex items-center justify-center bg-gradient-to-br from-secondary-500 to-secondary-600">
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
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                Implement
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                We execute with precision, using agile methodologies to adapt to
                evolving requirements.
              </p>
            </div>

            <div className="card p-6 hover:shadow-lg transition-all duration-300">
              <div className="mb-4 p-3 rounded-lg inline-flex items-center justify-center bg-gradient-to-br from-primary-600 to-secondary-600">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                Optimize
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                We continuously measure, refine, and enhance to ensure
                sustainable long-term value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white dark:bg-neutral-800">
        <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">
              Industries We Serve
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
              We have deep expertise in these sectors, with a proven track
              record of successful digital transformation projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 hover:shadow-lg transition-all duration-300">
              <div className="mb-4 p-3 bg-primary-100 dark:bg-primary-900/50 rounded-lg inline-block">
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
              <p className="text-neutral-600 dark:text-neutral-300">
                Banks, investment firms, and financial institutions seeking
                digital innovation and regulatory compliance.
              </p>
            </div>

            <div className="card p-6 hover:shadow-lg transition-all duration-300">
              <div className="mb-4 p-3 bg-accent-100 dark:bg-accent-900/50 rounded-lg inline-block">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">
                Insurance
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Life and general insurance providers looking to modernize legacy
                systems and improve operational efficiency.
              </p>
            </div>

            <div className="card p-6 hover:shadow-lg transition-all duration-300">
              <div className="mb-4 p-3 bg-secondary-100 dark:bg-secondary-900/50 rounded-lg inline-block">
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
              <p className="text-neutral-600 dark:text-neutral-300">
                Pension providers and administrators seeking to enhance data
                management and streamline member services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTA />
    </Layout>
  );
};

export default Services;
