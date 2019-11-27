import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "./layout";
import { SEO } from "gatsby-theme-seo";
import StaticPageTemplate from "../templates/static-page";
import _ from "lodash";

const StaticPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const excerpt = _.truncate(
    _.join(_.map(post.frontmatter.sections, "body"), " "),
    {
      length: 140,
      separator: " "
    }
  );
  return (
    <Layout>
      {post.fields.slug !== "/" && (
        <SEO
          title={post.frontmatter.title}
          description={_.trim(excerpt)}
          lang="de"
          pathname={post.fields.slug}
        />
      )}

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
      fields {
        slug
      }
      frontmatter {
        title
        showTitle
        ...SectionsFragment
      }
    }
  }
`;
