import React, { useEffect, useState, useRef } from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router";

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    service: "General Inquiry",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: null,
  });

  // References for animation
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // Update page title
    document.title = "Contact Us | TwinCoreTech";

    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, submitting: true, error: null });

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend or an API here
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus({ submitted: true, submitting: false, error: null });

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        service: "General Inquiry",
      });
    } catch (error) {
      setFormStatus({
        submitted: false,
        submitting: false,
        error: "There was an error submitting your message. Please try again.",
      });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="py-32 bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-900 text-white relative overflow-hidden"
      >
        {/* Modern mesh gradient background */}
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
                Contact Us
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed backdrop-blur-sm bg-black/5 rounded-lg p-4">
              Get in touch with our team to discuss how TwinCoreTech can help
              transform your organization through our digital transformation
              expertise and Omadeas Product Suite.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Information Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute -right-10 top-10 w-40 h-40 rounded-full bg-primary-300 dark:bg-primary-800 blur-3xl opacity-20"></div>
          <div className="absolute left-10 bottom-10 w-40 h-40 rounded-full bg-accent-300 dark:bg-accent-800 blur-3xl opacity-20"></div>
          <div className="absolute right-1/3 bottom-1/3 w-20 h-20 rounded-full bg-secondary-300 dark:bg-secondary-800 blur-2xl opacity-20"></div>
        </div>

        <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            {/* Contact Form */}
            <div ref={formRef} className="order-2 lg:order-1">
              <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 border border-neutral-200 dark:border-neutral-700 relative overflow-hidden">
                {/* Form background gradients */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-300/10 to-primary-500/5 rotate-12 rounded-full dark:from-primary-600/10 dark:to-primary-800/5"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent-300/10 to-accent-500/5 rotate-12 rounded-full dark:from-accent-600/10 dark:to-accent-800/5"></div>

                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                    Send Us a Message
                  </h2>

                  {formStatus.submitted ? (
                    <div className="bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-700 rounded-lg p-6 my-8 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-800/60 rounded-full mb-4">
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                        Thank You!
                      </h3>
                      <p className="text-neutral-700 dark:text-neutral-300">
                        Your message has been received. We'll get back to you
                        soon.
                      </p>
                      <button
                        onClick={() =>
                          setFormStatus({
                            submitted: false,
                            submitting: false,
                            error: null,
                          })
                        }
                        className="mt-4 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-md focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-700 focus:border-primary-500 dark:focus:border-primary-700 outline-none transition-all duration-300"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-md focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-700 focus:border-primary-500 dark:focus:border-primary-700 outline-none transition-all duration-300"
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                          >
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-md focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-700 focus:border-primary-500 dark:focus:border-primary-700 outline-none transition-all duration-300"
                            placeholder="Your company name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-md focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-700 focus:border-primary-500 dark:focus:border-primary-700 outline-none transition-all duration-300"
                            placeholder="Your phone number"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                        >
                          I'm interested in
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-md focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-700 focus:border-primary-500 dark:focus:border-primary-700 outline-none transition-all duration-300"
                        >
                          <option value="General Inquiry">
                            General Inquiry
                          </option>
                          <option value="Digital Transformation Consultancy">
                            Digital Transformation Consultancy
                          </option>
                          <option value="Operations Consultancy">
                            Operations Consultancy
                          </option>
                          <option value="Offshore Resourcing Services">
                            Offshore Resourcing Services
                          </option>
                          <option value="Omadeas Product Suite">
                            Omadeas Product Suite
                          </option>
                          <option value="Investment Opportunities">
                            Investment Opportunities
                          </option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="5"
                          className="w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-md focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-700 focus:border-primary-500 dark:focus:border-primary-700 outline-none transition-all duration-300 resize-none"
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>

                      {formStatus.error && (
                        <div className="bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-300 p-3 rounded-md border border-red-200 dark:border-red-800 text-sm">
                          {formStatus.error}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={formStatus.submitting}
                        className="relative overflow-hidden group rounded-md w-full"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:from-primary-600 group-hover:to-secondary-600 transition-all duration-300"></span>
                        <span className="relative block text-white font-medium px-8 py-3 z-10 text-center">
                          {formStatus.submitting ? (
                            <div className="flex items-center justify-center">
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Sending...
                            </div>
                          ) : (
                            "Send Message"
                          )}
                          <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/30"></span>
                        </span>
                        <span className="absolute -inset-[100%] bg-gradient-to-r from-primary-400/20 to-secondary-400/20 blur-xl transform rotate-45 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                    Contact Information
                  </h2>
                  <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 border border-neutral-200 dark:border-neutral-700">
                    <div className="flex flex-col space-y-6">
                      {/* Address */}
                      <div className="flex">
                        <div className="flex-shrink-0 h-10 w-10 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-primary-600 dark:text-primary-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-neutral-900 dark:text-white">
                            Our Office
                          </h3>
                          <address className="not-italic text-neutral-600 dark:text-neutral-400 mt-1">
                            <p>TwinCoreTech Ltd</p>
                            <p>Bromley Old Town Hall</p>
                            <p>30 Tweedy Road</p>
                            <p>Bromley, BR1 3FE</p>
                            <p>United Kingdom</p>
                          </address>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex">
                        <div className="flex-shrink-0 h-10 w-10 bg-accent-100 dark:bg-accent-900/50 rounded-full flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-accent-600 dark:text-accent-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-neutral-900 dark:text-white">
                            Phone
                          </h3>
                          <p className="text-neutral-600 dark:text-neutral-400 mt-1">
                            <a
                              href="tel:+447539730098"
                              className="text-primary-600 dark:text-primary-400 hover:underline"
                            >
                              +44 75 3973 0098
                            </a>
                          </p>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex">
                        <div className="flex-shrink-0 h-10 w-10 bg-secondary-100 dark:bg-secondary-900/50 rounded-full flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-secondary-600 dark:text-secondary-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-neutral-900 dark:text-white">
                            Email
                          </h3>
                          <p className="text-neutral-600 dark:text-neutral-400 mt-1">
                            <a
                              href="mailto:sajithmudalige@twincoretech.com"
                              className="text-primary-600 dark:text-primary-400 hover:underline"
                            >
                              sajithmudalige@twincoretech.com
                            </a>
                          </p>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                        <h3 className="font-medium text-neutral-900 dark:text-white mb-3">
                          Connect With Us
                        </h3>
                        <div className="flex space-x-4">
                          <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 p-2 rounded-full transition-colors duration-300"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-neutral-700 dark:text-neutral-300"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          </a>
                          <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 p-2 rounded-full transition-colors duration-300"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-neutral-700 dark:text-neutral-300"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div ref={mapRef}>
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                    Find Us
                  </h2>
                  <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-2 border border-neutral-200 dark:border-neutral-700 overflow-hidden h-[300px]">
                    <iframe
                      title="TwinCoreTech Office Location"
                      className="w-full h-full rounded-lg"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.8238000761976!2d-0.02083572341848684!3d51.40814617178702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876017020304e25%3A0xdb8abe63c6b334d9!2sBromley%20Old%20Town%20Hall%2C%20Bromley%20BR1%203FE%2C%20UK!5e0!3m2!1sen!2sus!4v1683066806281!5m2!1sen!2sus"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
              Here are some common questions about our services and how we can
              help you transform your business.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  What areas of digital transformation do you specialize in?
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  We specialize in a comprehensive range of digital
                  transformation services including strategic planning, process
                  optimization, technology selection, program management, change
                  management, and system integration. Our expertise is
                  particularly strong in the financial services, insurance, and
                  pensions sectors.
                </p>
              </div>
              <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  When will the Omadeas Product Suite be available?
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  The MVP for Phase 1 of Omadeas (TimeKeeper) will be available
                  in Q4 2025. We are following a modular approach to ensure each
                  component is market-ready and delivers immediate value. You
                  can learn more details in our Products section.
                </p>
              </div>
              <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  Do you offer offshore development resources?
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Yes, we provide high-quality, cost-effective software
                  developers and business analysts from our Sri Lanka based
                  development center. Our offshore resourcing services help
                  organizations scale their development capacity while
                  maintaining high standards of quality.
                </p>
              </div>
              <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  How can I invest in TwinCoreTech?
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  We are currently looking for investors to accelerate product
                  development and speed up market entry. If you are interested
                  in discussing investment opportunities, please reach out to us
                  via our contact form selecting "Investment Opportunities" as
                  your area of interest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-900 text-white relative overflow-hidden">
        {/* Modern mesh gradient background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 80% 20%, rgba(120, 100, 255, 0.3) 0%, transparent 35%),
                            radial-gradient(circle at 20% 40%, rgba(72, 219, 251, 0.3) 0%, transparent 30%),
                            radial-gradient(circle at 60% 80%, rgba(173, 81, 255, 0.2) 0%, transparent 40%)`,
          }}
        ></div>

        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/10 to-transparent"></div>
        <div className="absolute -left-24 top-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-accent-600/20 via-accent-400/10 to-accent-600/20 blur-3xl"></div>
        <div className="absolute -right-24 bottom-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-secondary-500/20 via-primary-400/10 to-secondary-400/20 blur-3xl"></div>

        <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-secondary-300 via-white to-accent-300 bg-clip-text text-transparent">
                Ready to Get Started?
              </span>
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-secondary-400/70 to-accent-400/70 rounded-full"></span>
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Let's work together to transform your organization. Our team is
              ready to help you streamline processes, unlock efficiencies, and
              prepare for the future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="#contact-form"
                onClick={(e) => {
                  e.preventDefault();
                  formRef.current.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-block relative overflow-hidden group rounded-md"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent-500 to-secondary-500 group-hover:from-accent-600 group-hover:to-secondary-600 transition-all duration-300"></span>
                <span className="relative block text-white font-medium px-8 py-3 z-10">
                  Contact Us Now
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/30"></span>
                </span>
                <span className="absolute -inset-[100%] bg-gradient-to-r from-accent-400/20 to-secondary-400/20 blur-xl transform rotate-45 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
              </a>
              <Link
                to="/services"
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 text-center font-medium rounded-md px-6 py-3 transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
