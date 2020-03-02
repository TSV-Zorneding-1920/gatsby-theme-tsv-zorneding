import React from "react";
import Layout from "./layout";
import { SEO } from "gatsby-theme-seo";
import BlogRoll from "../components/blog-roll";
import { graphql } from "gatsby";
import { Link } from "gatsby";

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.posts.edges;

    const { currentPage, numPages } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage =
      currentPage - 1 === 1 ? "/blog" : "/blog/" + (currentPage - 1).toString();
    const nextPage = (currentPage + 1).toString();

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

          <ul className="pagination">
            <li>
              {!isFirst ? (
                <Link to={prevPage} rel="prev" className="button">
                  Zurück
                </Link>
              ) : (
                <span className="button disabled">Zurück</span>
              )}
            </li>

            {Array.from({ length: numPages }, (_, i) => (
              <li key={`pagination-number${i + 1}`}>
                <Link
                  to={`/blog/${i === 0 ? "" : i + 1}`}
                  className={`page ${i + 1 === currentPage ? "active" : ""}`}
                >
                  {i + 1}
                </Link>
              </li>
            ))}

            <li>
              {!isLast ? (
                <Link to={`/blog/${nextPage}`} rel="next" className="button">
                  Nächste
                </Link>
              ) : (
                <span className="button disabled">Nächste</span>
              )}
            </li>
          </ul>
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
