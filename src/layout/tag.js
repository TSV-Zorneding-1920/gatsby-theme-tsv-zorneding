import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "./layout";
import SEO from "../components/seo/site";
import { H2, H3 } from "../components/globals";

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <H2>{post.node.frontmatter.title}</H2>
        </Link>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} Artikel mit dem Schlagwort “${tag}”`;

    return (
      <Layout>
        <section className="section">
          <SEO
            title={`${tag} | ${title}`}
            description={`${tag} | ${title}`}
            url={this.props.data.site.siteMetadata.siteUrl}
            slug={"/tags"}
            author={this.props.data.site.siteMetadata.author}
          />
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: "6rem" }}
              >
                <H3>{tagHeader}</H3>
                <ul>{postLinks}</ul>
                <p>
                  <Link to="/tags/">Alle Schlagwörter durchsuchen</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
