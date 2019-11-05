import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "./layout";
import SEO from "../components/seo";
import BlogPostTemplate from "../templates/blog-post";

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO
        title={`${post.frontmatter.title}`}
        description={`${post.excerpt}`}
        template="post"
        slug={post.fields.slug}
        image={
          post.frontmatter.featuredimage &&
          post.frontmatter.featuredimage.childImageSharp.fluid.src
        }
        date={post.frontmatter.date}
      />

      <BlogPostTemplate
        content={post.html}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        slug={post.fields.slug}
        date={post.frontmatter.date_formatted}
        featuredimage={post.frontmatter.featuredimage}
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
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 200)
      html
      fields {
        slug
      }
      frontmatter {
        date
        date_formatted: date(formatString: "DD. MMMM YYYY", locale: "de")
        title
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1250, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;
