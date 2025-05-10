import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import ServicesSection from "../components/ui/Services";
import ContactCTA from "../components/ui/ContactCTA";

const Services = () => {
  useEffect(() => {
    // Update page title
    document.title = "Services | TwinCoreTech";
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Services Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-neutral-50">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated gradient blobs */}
          <div className="absolute -right-[10%] top-[10%] w-[35%] h-[35%] rounded-full bg-gradient-to-br from-accent-300/15 to-primary-400/10 blur-[80px] animate-pulse-slow"></div>
          <div className="absolute left-[30%] top-[5%] w-[20%] h-[20%] rounded-full bg-gradient-to-br from-tertiary-300/10 to-secondary-400/5 blur-[70px] animate-float"></div>
          <div className="absolute -left-[5%] bottom-[15%] w-[25%] h-[25%] rounded-full bg-gradient-to-tr from-primary-300/10 to-secondary-400/5 blur-[60px] animate-pulse-slower"></div>
          
          {/* Dynamic grid pattern with subtle animation */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] animate-subtle-shift"></div>
          
          {/* Subtle animated lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-300/20 to-transparent animate-flow-x"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300/20 to-transparent animate-flow-x-reverse"></div>
        </div>

        <div className="container max-w-[var(--container-max)] mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-2 px-3 py-1 bg-accent-50 border border-accent-100 rounded-full">
              <span className="text-sm text-accent-600 font-medium">Digital Transformation Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-neutral-900">Our </span>
              <span className="bg-gradient-to-r from-accent-600 via-primary-500 to-secondary-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              End-to-end digital transformation services and operational expertise 
              tailored to your organization's specific needs and goals.
            </p>
            <div className="flex justify-center space-x-2">
              <div className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-bounce"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-primary-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="h-1.5 w-1.5 rounded-full bg-secondary-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Content Section */}
      <ServicesSection />

      {/* Our Approach Section */}
      <section className="py-20 bg-neutral-50 relative">
        <div className="absolute -z-10 w-32 h-32 bg-primary-50 rounded-full blur-3xl opacity-30 top-20 -left-10"></div>
        <div className="absolute -z-10 w-40 h-40 bg-accent-50 rounded-full blur-3xl opacity-30 bottom-20 -right-10"></div>
        <div className="container max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <div className="inline-block mb-2 px-3 py-1 bg-secondary-50 border border-secondary-100 rounded-full">
              <span className="text-sm text-secondary-600 font-medium">Our Methodology</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-5 bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-600 bg-clip-text text-transparent">Our Approach</h2>
            <div className="h-0.5 w-20 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto mb-6 transform transition-all duration-700 animate-pulse-slow"></div>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              We deliver value through a structured yet flexible methodology
              that ensures measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg border border-neutral-200 p-6 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-primary-300 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="mb-4 p-3 rounded-lg inline-flex items-center justify-center bg-primary-100 text-primary-600 group-hover:bg-primary-200 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 group-hover:scale-110 transition-transform duration-300"
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
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 group-hover:text-primary-700 transition-colors duration-300">
                Assess
              </h3>
              <p className="text-neutral-600">
                We analyze your current systems, processes, and challenges to
                establish a clear baseline.
              </p>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-primary-50 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-400 to-accent-300 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="mb-4 p-3 rounded-lg inline-flex items-center justify-center bg-accent-100 text-accent-600 group-hover:bg-accent-200 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 group-hover:scale-110 transition-transform duration-300"
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
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 group-hover:text-accent-700 transition-colors duration-300">
                Plan
              </h3>
              <p className="text-neutral-600">
                We develop a comprehensive roadmap with clear milestones,
                resources, and success metrics.
              </p>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-accent-50 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-400 to-secondary-300 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="mb-4 p-3 rounded-lg inline-flex items-center justify-center bg-secondary-100 text-secondary-600 group-hover:bg-secondary-200 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 group-hover:scale-110 transition-transform duration-300"
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
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 group-hover:text-secondary-700 transition-colors duration-300">
                Implement
              </h3>
              <p className="text-neutral-600">
                We execute with precision, using agile methodologies to adapt to
                evolving requirements.
              </p>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-secondary-50 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tertiary-400 to-tertiary-300 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="mb-4 p-3 rounded-lg inline-flex items-center justify-center bg-tertiary-100 text-tertiary-600 group-hover:bg-tertiary-200 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 group-hover:scale-110 transition-transform duration-300"
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
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 group-hover:text-tertiary-700 transition-colors duration-300">
                Optimize
              </h3>
              <p className="text-neutral-600">
                We continuously measure, refine, and enhance to ensure
                sustainable long-term value.
              </p>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-tertiary-50 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute -z-10 w-36 h-36 bg-accent-50 rounded-full blur-3xl opacity-30 top-10 -right-10"></div>
        <div className="absolute -z-10 w-44 h-44 bg-primary-50 rounded-full blur-3xl opacity-30 bottom-10 -left-10"></div>
        <div className="container max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <div className="inline-block mb-2 px-3 py-1 bg-tertiary-50 border border-tertiary-100 rounded-full">
              <span className="text-sm text-tertiary-600 font-medium">Our Expertise</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-5 bg-gradient-to-r from-tertiary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent">Industries We Serve</h2>
            <div className="h-0.5 w-20 bg-gradient-to-r from-tertiary-400 to-primary-400 mx-auto mb-6 transform transition-all duration-700 animate-pulse-slow"></div>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              We have deep expertise in these sectors, with a proven track
              record of successful digital transformation projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg border border-neutral-200 p-6 hover:shadow-lg transition-all duration-300">
              <div className="mb-4 p-3 bg-primary-100 rounded-lg inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary-600"
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
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                Financial Services
              </h3>
              <p className="text-neutral-600">
                Banks, investment firms, and financial institutions seeking
                digital innovation and regulatory compliance.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6 hover:shadow-lg transition-all duration-300">
              <div className="mb-4 p-3 bg-accent-100 rounded-lg inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-accent-600"
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
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                Insurance
              </h3>
              <p className="text-neutral-600">
                Life and general insurance providers looking to modernize legacy
                systems and improve operational efficiency.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6 hover:shadow-lg transition-all duration-300">
              <div className="mb-4 p-3 bg-secondary-100 rounded-lg inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-secondary-600"
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
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                Pensions
              </h3>
              <p className="text-neutral-600">
                Pension providers and administrators seeking to enhance data
                management and streamline member services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
};

export default Services;
