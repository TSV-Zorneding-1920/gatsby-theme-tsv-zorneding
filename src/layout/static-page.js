import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "./layout";
import SEO from "../components/seo";
import StaticPageTemplate from "../templates/static-page";

const StaticPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <SEO
        title={`${post.frontmatter.title}`}
        description={`${post.excerpt}`}
      />
      <StaticPageTemplate
        title={post.frontmatter.title}
        showTitle={post.frontmatter.showTitle}
        sections={post.frontmatter.sections}
      />
    </Layout>
  );
};

StaticPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default StaticPage;

export const staticPageQuery = graphql`
  query StaticPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      excerpt
      frontmatter {
        title
        showTitle
        ...SectionsFragment
      }
    }
  }
`;
