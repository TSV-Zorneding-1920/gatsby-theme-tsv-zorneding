import React from "react";
import { kebabCase } from "lodash";
import { Link, graphql } from "gatsby";
import Layout from "../../layout/layout";
import SEO from "../../components/seo/site";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title, siteUrl, author }
    }
  }
}) => (
  <Layout>
    <section className="section">
      <SEO
        title={`Schlagwörter | ${title}`}
        description={`Schlagwörter | ${title}`}
        url={siteUrl}
        slug={"/tags"}
        author={author}
      />
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: "6rem" }}
          >
            <h1 className="title is-size-2 is-bold-light">Schlagwörter</h1>
            <ul className="taglist">
              {group.map(tag => (
                <li key={tag.fieldValue}>
                  <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
