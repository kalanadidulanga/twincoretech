import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/ui/Hero";
import ServicesSection from "../components/ui/Services";
import ProductsSection from "../components/ui/Products";
import ContactCTA from "../components/ui/ContactCTA";

const Home = () => {
  useEffect(() => {
    // Update page title
    document.title = "TwinCoreTech | Digital Transformation Specialists";

    //i want scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Hero />
      <ServicesSection />
      <ProductsSection />
      <ContactCTA />
    </Layout>
  );
};

export default Home;
