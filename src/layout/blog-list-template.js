import React from "react";
import Layout from "./layout";
import SEO from "../components/seo/site";
import BlogRoll from "../components/blog-roll";
import { graphql } from "gatsby";
import Pager from "../components/pager";
import { H1 } from "../components/globals";

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.posts.edges;

    const { currentPage } = this.props.pageContext;

    return (
      <Layout>
        <SEO
          title="Aktuelle Neuigkeiten"
          description="Aktuelle Neuigkeiten"
          url={this.props.data.site.siteMetadata.siteUrl}
          author={this.props.data.site.siteMetadata.author}
          slug={"/blog/" + currentPage.toString()}
        />
        <section>
          <header className="main">
            <H1>Aktuelle Neuigkeiten</H1>
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
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
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
