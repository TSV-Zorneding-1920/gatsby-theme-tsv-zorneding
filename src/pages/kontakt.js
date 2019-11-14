import React from "react";
import Layout from "../layout/layout";
import { SEO } from "gatsby-theme-seo";
import Contact from "../components/contact";
import logo from "../../img/logo.png";

const ContactPage = () => (
  <Layout>
    <SEO title="Kontakt" lang="de" pathname="/kontakt" />
    <section>
      <header className="main">
        <h1>Kontakt</h1>
      </header>
      <div className="row">
        <div class="features">
          <article>
            <img src={logo} alt="Logo vom TSV Zorneding" />
            <div class="content">
              <h3>Christian Fritsch</h3>
              <p>1. Abteilungsleiter</p>
            </div>
          </article>
          <article>
            <img src={logo} alt="Logo vom TSV Zorneding" />
            <div class="content">
              <h3>Sapien veroeros</h3>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
                lorem feugiat tempus aliquam.
              </p>
            </div>
          </article>
        </div>

        <div className="col-6 col-12-medium">
          <Contact />
        </div>
      </div>
    </section>
  </Layout>
);

export default ContactPage;
