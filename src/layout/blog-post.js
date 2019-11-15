import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "./layout";
import { SEO } from "gatsby-theme-seo";
import BlogPostTemplate from "../templates/blog-post";
import { JSONLD, Generic } from "react-structured-data";

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  let image = {};
  if (post.frontmatter.seoimage) {
    image = post.frontmatter.seoimage.childImageSharp.fixed;
    image["@type"] = "ImageObject";
    image["url"] = `${data.site.siteMetadata.siteUrl}${image.src}`;
    delete image.src;
  }

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        pathname={post.fields.slug}
        image={
          post.frontmatter.seoimage &&
          post.frontmatter.seoimage.childImageSharp.fixed
        }
      />
      <JSONLD>
        <Generic
          type="blogPosting"
          jsonldtype="BlogPosting"
          schema={{
            author: data.site.siteMetadata.author,
            headline: post.frontmatter.title,
            wordCount: post.wordCount.words,
            abstract: post.excerpt,
            dateCreated: post.frontmatter.date,
            datePublished: post.frontmatter.date,
            publisher: {
              "@type": "Organization",
              name: data.site.siteMetadata.author
            },
            image
          }}
        />
      </JSONLD>
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
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1180, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
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
