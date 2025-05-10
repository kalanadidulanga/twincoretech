import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/layout/Layout";
import ContactCTA from "../components/ui/ContactCTA";
import { Link } from "react-router";

const Team = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    // Update page title
    document.title = "Team | TwinCoreTech";

    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Sajith Mudalige",
      role: "Founder & Principal Consultant",
      category: "leadership",
      bio: "With over 15 years of experience in digital transformation across financial services and insurance sectors, Sajith has led complex migration projects throughout the UK and Europe.",
      expertise: [
        "Digital Transformation Strategy",
        "Financial Services",
        "Enterprise Architecture",
      ],
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      linkedin: "https://linkedin.com/in/",
    },
    {
      id: 2,
      name: "Eleanor Chen",
      role: "Head of Product Development",
      category: "leadership",
      bio: "Eleanor brings 12+ years of experience in product development and management, specializing in SaaS platforms and digital transformation tools.",
      expertise: ["Product Management", "SaaS Development", "User Experience"],
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      linkedin: "https://linkedin.com/in/",
    },
    {
      id: 3,
      name: "David Reynolds",
      role: "Financial Services Expert",
      category: "advisors",
      bio: "Former CTO of a major UK insurance provider, David provides strategic guidance on our financial services solutions and market positioning.",
      expertise: ["Insurance Systems", "Legacy Migrations", "IT Strategy"],
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      linkedin: "https://linkedin.com/in/",
    },
    {
      id: 4,
      name: "Sarah Williams",
      role: "Commercial Director",
      category: "leadership",
      bio: "Sarah oversees deal structuring, pricing strategies, and commercial growth. Previously led commercial operations for enterprise SaaS companies.",
      expertise: [
        "SaaS Pricing Strategy",
        "Commercial Modeling",
        "Deal Structuring",
      ],
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      linkedin: "https://linkedin.com/in/",
    },
    {
      id: 5,
      name: "Ravi Patel",
      role: "Lead Architect",
      category: "technology",
      bio: "Ravi leads the architecture design for our Omadeas product suite, focusing on creating scalable, robust systems that leverage cutting-edge technologies.",
      expertise: [
        "System Architecture",
        "Cloud Infrastructure",
        "Database Design",
      ],
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      linkedin: "https://linkedin.com/in/",
    },
    {
      id: 6,
      name: "Olivia Thompson",
      role: "Data Science Lead",
      category: "technology",
      bio: "Specializing in AI and machine learning, Olivia develops the intelligent features that power our predictive analytics and natural language processing capabilities.",
      expertise: ["Machine Learning", "Data Modeling", "Predictive Analytics"],
      image: "https://randomuser.me/api/portraits/women/26.jpg",
      linkedin: "https://linkedin.com/in/",
    },
    {
      id: 7,
      name: "Michael Chang",
      role: "Pensions Industry Advisor",
      category: "advisors",
      bio: "With 20+ years in the pensions sector, Michael provides invaluable insights for our solutions targeting pension fund administration and transformation.",
      expertise: [
        "Pension Systems",
        "Regulatory Compliance",
        "Digital Modernization",
      ],
      image: "https://randomuser.me/api/portraits/men/94.jpg",
      linkedin: "https://linkedin.com/in/",
    },
    {
      id: 8,
      name: "Naomi Kaur",
      role: "UX/UI Design Lead",
      category: "technology",
      bio: "Naomi ensures our products deliver exceptional user experiences with intuitive interfaces that simplify complex processes and workflows.",
      expertise: ["UX Strategy", "Interface Design", "User Research"],
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      linkedin: "https://linkedin.com/in/",
    },
  ];

  const partnerCompanies = [
    {
      name: "TechNova Solutions",
      logo: "https://via.placeholder.com/150x80?text=TechNova",
      specialty: "Cloud Infrastructure",
    },
    {
      name: "FinServ Consulting",
      logo: "https://via.placeholder.com/150x80?text=FinServ",
      specialty: "Financial Industry Expertise",
    },
    {
      name: "DataWise Analytics",
      logo: "https://via.placeholder.com/150x80?text=DataWise",
      specialty: "AI & Machine Learning",
    },
    {
      name: "Agile Transformation Partners",
      logo: "https://via.placeholder.com/150x80?text=ATP",
      specialty: "Process Optimization",
    },
  ];

  const filteredTeamMembers =
    activeCategory === "all"
      ? teamMembers
      : teamMembers.filter((member) => member.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-neutral-50">
        {/* Enhanced background elements with beautiful blurry animation */}
        <div className="absolute inset-0 overflow-hidden animate-color-shift">
          {/* Large ethereal orb with subtle color shifting */}
          <div className="absolute top-[20%] left-[45%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-primary-400/10 to-accent-300/5 blur-[100px] animate-float animate-drift" style={{ animationDuration: '30s' }}></div>
          
          {/* Secondary floating element with soft edges */}
          <div className="absolute bottom-[30%] right-[35%] w-[25%] h-[35%] rounded-full bg-gradient-to-tl from-secondary-400/8 to-tertiary-300/4 blur-[90px] animate-float" style={{ animationDuration: '22s', animationDelay: '2s' }}></div>
          
          {/* Accent bubble with gentle pulsation */}
          <div className="absolute left-[15%] top-[40%] w-[20%] h-[25%] rounded-full bg-gradient-to-tr from-accent-300/6 to-primary-300/3 blur-[80px] animate-pulse-slower" style={{ animationDuration: '15s' }}></div>
          
          {/* Ethereal light beam that flows across the screen */}
          <div className="absolute inset-y-0 w-full h-[40%] top-[30%] bg-gradient-to-r from-primary-200/5 via-accent-200/8 to-secondary-200/5 blur-[120px] animate-flow-x" style={{ animationDuration: '40s' }}></div>
          
          {/* Overlay with subtle texture */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] animate-subtle-shift" style={{ animationDuration: '50s' }}></div>
          
          {/* Delicate animated border lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300/10 to-transparent animate-flow-x" style={{ backgroundSize: '200% 100%' }}></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-300/10 to-transparent animate-flow-x-reverse" style={{ backgroundSize: '200% 100%' }}></div>
        </div>

        <div className="container max-w-[var(--container-max)] mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-2 px-3 py-1 bg-tertiary-50 border border-tertiary-100 rounded-full">
              <span className="text-sm text-tertiary-600 font-medium">Meet Our Experts</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight relative">
              <span className="text-neutral-900">Our </span>
              <span className="bg-gradient-to-r from-tertiary-600 via-primary-500 to-secondary-600 bg-clip-text text-transparent animate-color-shift relative">
                Team
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-tertiary-400 via-primary-400 to-secondary-400 rounded-full transform scale-x-0 transition-transform duration-700 ease-out origin-left" 
                      style={{ animation: 'scale-x 1.5s ease-out forwards', animationDelay: '0.5s' }}></span>
              </span>
            </h1>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Meet the experts behind TwinCoreTech's digital transformation
              solutions, bringing decades of combined experience in financial
              services, technology, and operational excellence.
            </p>
            <div className="flex justify-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-gradient-to-br from-tertiary-400 to-tertiary-500 animate-bounce"></div>
              <div className="h-2 w-2 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="h-2 w-2 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute -z-10 w-36 h-36 bg-accent-50 rounded-full blur-3xl opacity-30 top-10 -right-10"></div>
        <div className="absolute -z-10 w-44 h-44 bg-primary-50 rounded-full blur-3xl opacity-30 bottom-10 -left-10"></div>
        
        <div className="container max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <div className="inline-block mb-2 px-3 py-1 bg-primary-50 border border-primary-100 rounded-full">
              <span className="text-sm text-primary-600 font-medium">Our Core Values</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-5 bg-gradient-to-r from-primary-600 via-tertiary-500 to-accent-500 bg-clip-text text-transparent">Our Values and Expertise</h2>
            <div className="h-0.5 w-20 bg-gradient-to-r from-primary-400 to-tertiary-400 mx-auto mb-6 transform transition-all duration-700 animate-pulse-slow"></div>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Our team brings together decades of combined experience in digital
              transformation, financial services, and cutting-edge technology to
              deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 group-hover:text-primary-700 transition-colors duration-300">
                Industry Knowledge
              </h3>
              <p className="text-neutral-600">
                Deep expertise in financial services, insurance, and pension
                sectors, with a proven track record of successful digital
                transformation projects across the UK and Europe.
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 group-hover:text-accent-700 transition-colors duration-300">
                Technical Excellence
              </h3>
              <p className="text-neutral-600">
                Our architects and developers bring cutting-edge expertise in
                cloud infrastructure, AI, machine learning, and modern
                application development to build robust, scalable solutions.
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 group-hover:text-secondary-700 transition-colors duration-300">
                Collaborative Approach
              </h3>
              <p className="text-neutral-600">
                We believe in working closely with our clients to understand
                their unique challenges and deliver tailored solutions that
                drive real business value.
              </p>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-secondary-50 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section
        ref={sectionRef}
        className="py-20 bg-neutral-50 relative"
      >
        <div className="absolute -z-10 w-32 h-32 bg-primary-50 rounded-full blur-3xl opacity-30 top-20 -left-10"></div>
        <div className="absolute -z-10 w-40 h-40 bg-accent-50 rounded-full blur-3xl opacity-30 bottom-20 -right-10"></div>
        
        <div className="container max-w-[var(--container-max)] mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 relative">
            <div className="inline-block mb-2 px-3 py-1 bg-secondary-50 border border-secondary-100 rounded-full">
              <span className="text-sm text-secondary-600 font-medium">Our People</span>
            </div>
            <h2 
              ref={headingRef}
              className="text-2xl md:text-3xl font-bold mb-5 bg-gradient-to-r from-primary-600 via-secondary-500 to-tertiary-600 bg-clip-text text-transparent"
            >
              Meet Our Team
            </h2>
            <div className="h-0.5 w-20 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto mb-6 transform transition-all duration-700 animate-pulse-slow"></div>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Our diverse team brings together expertise across technology,
              financial services, and business transformation.
            </p>
          </div>

          {/* Team Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-primary-600 text-white shadow-md"
                  : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory("leadership")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === "leadership"
                  ? "bg-accent-600 text-white shadow-md"
                  : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
              }`}
            >
              Leadership
            </button>
            <button
              onClick={() => setActiveCategory("technology")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === "technology"
                  ? "bg-tertiary-600 text-white shadow-md"
                  : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
              }`}
            >
              Technology
            </button>
            <button
              onClick={() => setActiveCategory("advisors")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === "advisors"
                  ? "bg-secondary-600 text-white shadow-md"
                  : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
              }`}
            >
              Advisors
            </button>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredTeamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg border border-neutral-200 overflow-hidden transition-all duration-300 hover:shadow-lg group"
              >
                {/* Image with gentle hover effect */}
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-1 text-xs font-medium text-neutral-500">
                    {member.category === 'leadership' && 'Leadership Team'}
                    {member.category === 'technology' && 'Technology Team'}
                    {member.category === 'advisors' && 'Advisory Board'}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent-600 font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-neutral-600 text-sm mb-4">
                    {member.bio}
                  </p>

                  {/* Expertise tags with refined styling */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social link with subtle hover effect */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute -z-10 w-36 h-36 bg-tertiary-50 rounded-full blur-3xl opacity-30 top-10 -right-10"></div>
        <div className="absolute -z-10 w-44 h-44 bg-secondary-50 rounded-full blur-3xl opacity-30 bottom-10 -left-10"></div>
        
        <div className="container max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <div className="inline-block mb-2 px-3 py-1 bg-accent-50 border border-accent-100 rounded-full">
              <span className="text-sm text-accent-600 font-medium">Strategic Alliances</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-5 bg-gradient-to-r from-accent-600 via-primary-500 to-tertiary-600 bg-clip-text text-transparent">Our Partners</h2>
            <div className="h-0.5 w-20 bg-gradient-to-r from-accent-400 to-tertiary-400 mx-auto mb-6 transform transition-all duration-700 animate-pulse-slow"></div>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              We collaborate with leading companies to enhance our capabilities
              and deliver comprehensive solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partnerCompanies.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-lg border border-neutral-200 hover:shadow-lg hover:border-neutral-300 transition-all duration-300 group"
              >
                <div className="h-20 mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {partner.name}
                </h3>
                <p className="text-sm text-neutral-600 text-center">
                  {partner.specialty}
                </p>
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary-300 to-accent-300 mt-4 transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-neutral-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden animate-color-shift">
          <div className="absolute top-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-primary-400/8 to-accent-300/4 blur-[120px] animate-pulse-slow" style={{ animationDuration: '25s' }}></div>
          <div className="absolute bottom-[20%] left-[20%] w-[30%] h-[30%] rounded-full bg-gradient-to-tr from-tertiary-300/6 to-secondary-300/3 blur-[100px] animate-float" style={{ animationDuration: '32s' }}></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] animate-subtle-shift" style={{ animationDuration: '60s' }}></div>
        </div>

        <div className="container max-w-[var(--container-max)] mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl border border-neutral-200 p-8 md:p-12 shadow-sm">
              <div className="text-center mb-8">
                <div className="inline-block mb-2 px-3 py-1 bg-secondary-50 border border-secondary-100 rounded-full">
                  <span className="text-sm text-secondary-600 font-medium">Career Opportunities</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-5 bg-gradient-to-r from-secondary-600 via-primary-500 to-tertiary-600 bg-clip-text text-transparent">Join Our Team</h2>
                <div className="h-0.5 w-20 bg-gradient-to-r from-secondary-400 to-primary-400 mx-auto mb-6 transform transition-all duration-700 animate-pulse-slow"></div>
                <p className="text-lg text-neutral-700 mb-8">
                  We're always looking for talented individuals who are passionate
                  about digital transformation and innovative technology solutions.
                </p>
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-block px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md shadow-sm transition-all duration-300 hover:shadow"
                  >
                    View Open Positions
                  </Link>
                </div>
              </div>
              
              {/* Value propositions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                  <div className="bg-primary-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Growth Opportunities</h3>
                    <p className="text-sm text-neutral-600">Continuous learning and clear paths for career advancement</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                  <div className="bg-accent-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Work-Life Balance</h3>
                    <p className="text-sm text-neutral-600">Flexible scheduling and remote work options</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8 text-neutral-600 text-sm">
                <p>TwinCoreTech is an equal opportunities employer.</p>
                <p>
                  We are committed to diversity, equity, and inclusion in our hiring practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTA />
    </Layout>
  );
};

export default Team;
