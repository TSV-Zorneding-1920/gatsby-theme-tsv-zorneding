import React from "react";
import Layout from "./layout";
import { SEO } from "gatsby-theme-seo";
import BlogRoll from "../components/blog-roll";
import { graphql } from "gatsby";
import Pager from "../components/pager";

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.posts.edges;

    const { currentPage } = this.props.pageContext;

    return (
      <Layout>
        <SEO
          title="Aktuelle Neuigkeiten"
          description="Aktuelle Neuigkeiten"
          lang="de"
          pathname={"/blog/" + currentPage.toString()}
        />
        <section>
          <header className="main">
            <h1>Aktuelle Neuigkeiten</h1>
          </header>
          <BlogRoll posts={posts} />

          <Pager {...this.props.pageContext} />
        </section>
      </Layout>
    );
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      sort: {
        order: [DESC, DESC]
        fields: [frontmatter___sticky, frontmatter___date]
      }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 300)
          frontmatter {
            date(formatString: "DD. MMMM YYYY", locale: "de")
            title
            templateKey
            sticky
            featured
            tags
            featuredimage {
              childImageSharp {
                fluid(
                  maxWidth: 500
                  maxHeight: 300
                  srcSetBreakpoints: [350, 500]
                ) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
