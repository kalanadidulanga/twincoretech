import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";

const Products = () => {
  useEffect(() => {
    // Update page title
    document.title = "Products | TwinCoreTech";
  }, []);

  return (
    <Layout>
      <div className="container max-w-[var(--container-max)] mx-auto px-4 lg:px-8 pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-6">Our Products</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Full product page coming soon. Check back for updates on our Omadeas
          Product Suite.
        </p>
      </div>
    </Layout>
  );
};

export default Products;
