import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "./layout";
import SEO from "../components/seo/blog";
import BlogPostTemplate from "../templates/blog-post";
import { HTMLContent } from "../components/content";

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        slug={post.fields.slug}
        url={data.site.siteMetadata.siteUrl}
        image={
          post.frontmatter.seoimage &&
          post.frontmatter.seoimage.childImageSharp.fixed
        }
        author={post.frontmatter.author}
        wordCount={post.wordCount.words}
        date={post.frontmatter.date}
        canonical={post.frontmatter.canonical}
        key="seo"
      />

      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        slug={post.fields.slug}
        date={post.frontmatter.date_formatted}
        featuredimage={post.frontmatter.featuredimage}
        author={post.frontmatter.author}
        key="blog-template"
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 200)
      html
      fields {
        slug
      }
      wordCount {
        words
      }
      frontmatter {
        date
        date_formatted: date(formatString: "DD. MMMM YYYY", locale: "de")
        title
        tags
        canonical
        featuredimage {
          childImageSharp {
            fluid(
              maxWidth: 1180
              quality: 100
              srcSetBreakpoints: [300, 600, 900, 1180]
            ) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        author
        seoimage: featuredimage {
          childImageSharp {
            fixed(width: 700, height: 400, quality: 100) {
              src
              width
              height
            }
          }
        }
      }
    }
  }
`;
