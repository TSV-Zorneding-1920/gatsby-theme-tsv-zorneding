import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Sidebar from "../components/sidebar";
import Header from "../components/header";

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
