import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { JSONLD, Generic } from "react-structured-data";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import { SEO } from "gatsby-theme-seo";

const PrimaryLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            section
            description
            image
            siteUrl
            author
            social {
              facebook
              twitter
              instagram
              youtube
            }
          }
        }
      }
    `}
    render={data => (
      <div id="wrapper">
        <SEO
          title="Startseite"
          description={data.site.siteMetadata.description}
          image={{ src: data.site.siteMetadata.image }}
          lang="de"
          pathname=""
        />
        <JSONLD dangerouslyExposeHtml={true}>
          <Generic
            type="website"
            jsonldtype="Website"
            schema={{
              name: data.site.siteMetadata.title,
              url: data.site.siteMetadata.siteUrl,
              publisher: {
                "@type": "Organization",
                name: data.site.siteMetadata.author,
                logo: `${data.site.siteMetadata.siteUrl}/favicons/icon-192x192.png`
              }
            }}
          />
        </JSONLD>
        <div id="main">
          <div className="inner">
            <Header
              siteTitle={data.site.siteMetadata.title}
              socialPages={data.site.siteMetadata.social}
            />
            {children}
          </div>
        </div>
        <Sidebar site={data.site.siteMetadata} />
      </div>
    )}
  />
);

PrimaryLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default PrimaryLayout;
