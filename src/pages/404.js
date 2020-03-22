import React from "react";
import Layout from "../layout/layout";
import SEO from "../components/seo/site";
import { H1 } from "../components/globals";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Seite nicht gefunden" />
    <div>
      <H1>
        Seite nicht gefunden{" "}
        <span role="img" aria-label="sad smiley">
          😕
        </span>
      </H1>

      <div
        style={{
          width: "100%",
          height: 0,
          paddingBottom: "72%",
          position: "relative"
        }}
      >
        <iframe
          src="https://giphy.com/embed/yQNJ8HpJ32ztK"
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
          title="giphy"
        ></iframe>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
