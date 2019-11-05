import React from "react";
import Layout from "../layout/layout";
import SEO from "../components/seo";
import Contact from "../components/contact";

const ContactPage = () => (
  <Layout>
    <SEO title="Kontakt" />
    <section>
      <header className="main">
        <h1>Kontakt</h1>
      </header>
      <div className="row">
        <div className="col-6 col-12-medium">
          <Contact />
        </div>
      </div>
    </section>
  </Layout>
);

export default ContactPage;
