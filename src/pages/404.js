import React from "react";
import Layout from "../layout/layout";
import { SEO } from "gatsby-theme-seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Seite nicht gefunden" lang="de" />
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
