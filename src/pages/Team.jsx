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
      <section className="py-32 bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-900 text-white relative overflow-hidden">
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
                Our Team
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed backdrop-blur-sm bg-black/5 rounded-lg p-4">
              Meet the experts behind TwinCoreTech's digital transformation
              solutions, bringing decades of combined experience in financial
              services, technology, and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute -right-10 top-10 w-40 h-40 rounded-full bg-primary-300 dark:bg-primary-800 blur-3xl opacity-20"></div>
          <div className="absolute left-10 bottom-10 w-40 h-40 rounded-full bg-accent-300 dark:bg-accent-800 blur-3xl opacity-20"></div>
          <div className="absolute right-1/3 bottom-1/3 w-20 h-20 rounded-full bg-secondary-300 dark:bg-secondary-800 blur-2xl opacity-20"></div>
        </div>

        <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Our Values and Expertise
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
              Our team brings together decades of combined experience in digital
              transformation, financial services, and cutting-edge technology to
              deliver exceptional results.
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">
                Industry Knowledge
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Deep expertise in financial services, insurance, and pension
                sectors, with a proven track record of successful digital
                transformation projects across the UK and Europe.
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
                Technical Excellence
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Our architects and developers bring cutting-edge expertise in
                cloud infrastructure, AI, machine learning, and modern
                application development to build robust, scalable solutions.
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">
                Collaborative Approach
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                We believe in working closely with our clients to understand
                their unique challenges and deliver tailored solutions that
                drive real business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section
        ref={sectionRef}
        className="py-20 bg-gradient-to-br from-white to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 relative"
      >
        <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2
              ref={headingRef}
              className="text-3xl font-bold mb-6 relative inline-block"
            >
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Meet Our Team
              </span>
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary-400/70 to-secondary-400/70 rounded-full"></span>
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
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
                  : "bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-600"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory("leadership")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === "leadership"
                  ? "bg-primary-600 text-white shadow-md"
                  : "bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-600"
              }`}
            >
              Leadership
            </button>
            <button
              onClick={() => setActiveCategory("technology")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === "technology"
                  ? "bg-primary-600 text-white shadow-md"
                  : "bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-600"
              }`}
            >
              Technology
            </button>
            <button
              onClick={() => setActiveCategory("advisors")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === "advisors"
                  ? "bg-primary-600 text-white shadow-md"
                  : "bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-600"
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
                className="group bg-white dark:bg-neutral-800 rounded-xl shadow-md hover:shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden transition-all duration-500 relative"
              >
                {/* Gradient overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 relative z-20">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-white transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-accent-600 dark:text-accent-400 font-medium mb-2 group-hover:text-accent-300 transition-colors duration-300">
                    {member.role}
                  </p>
                  <p className="text-neutral-700 dark:text-neutral-300 text-sm group-hover:text-white/90 transition-colors duration-300 mb-4">
                    {member.bio}
                  </p>

                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded group-hover:bg-white/20 group-hover:text-white transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social link */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950">
        <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Our Partners
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
              We collaborate with leading companies to enhance our capabilities
              and deliver comprehensive solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partnerCompanies.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-200 dark:border-neutral-700"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-20 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
                  {partner.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-900 text-white relative">
        {/* Modern mesh gradient overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 80% 20%, rgba(120, 100, 255, 0.3) 0%, transparent 35%),
                            radial-gradient(circle at 20% 40%, rgba(72, 219, 251, 0.3) 0%, transparent 30%),
                            radial-gradient(circle at 60% 80%, rgba(173, 81, 255, 0.2) 0%, transparent 40%)`,
          }}
        ></div>

        <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-secondary-300 via-white to-accent-300 bg-clip-text text-transparent">
                Join Our Team
              </span>
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-secondary-400/70 to-accent-400/70 rounded-full"></span>
            </h2>
            <p className="text-lg text-white/90 mb-8">
              We're always looking for talented individuals who are passionate
              about digital transformation and innovative technology solutions.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-block relative overflow-hidden group rounded-md"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent-500 to-secondary-500 group-hover:from-accent-600 group-hover:to-secondary-600 transition-all duration-300"></span>
                <span className="relative block text-white font-medium px-8 py-3 z-10">
                  View Open Positions
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/30"></span>
                </span>
                <span className="absolute -inset-[100%] bg-gradient-to-r from-accent-400/20 to-secondary-400/20 blur-xl transform rotate-45 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
              </Link>
            </div>
            <div className="mt-8 text-white/80 text-sm">
              <p>TwinCoreTech is an equal opportunities employer.</p>
              <p>
                We are committed to diversity, equity, and inclusion in our
                hiring practices.
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

export default Team;
