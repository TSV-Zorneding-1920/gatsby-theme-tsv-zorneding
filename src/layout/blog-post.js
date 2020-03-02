import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "./layout";
import { SEO } from "gatsby-theme-seo";
import BlogPostTemplate from "../templates/blog-post";
import { JSONLD, Generic } from "react-structured-data";
import { HTMLContent } from "../components/content";

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  let image = {};
  if (post.frontmatter.seoimage) {
    image = Object.assign({}, post.frontmatter.seoimage.childImageSharp.fixed);
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
      <JSONLD dangerouslyExposeHtml={true}>
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
            dateModified: post.frontmatter.date,
            publisher: {
              "@type": "Organization",
              name: data.site.siteMetadata.author,
              logo: {
                "@type": "ImageObject",
                url: `${data.site.siteMetadata.siteUrl}/icons/icon-256x256.png`
              }
            },
            mainEntityOfPage: {
              "@type": "Website",
              name: data.site.siteMetadata.title
            },
            image
          }}
        />
      </JSONLD>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        slug={post.fields.slug}
        date={post.frontmatter.date_formatted}
        featuredimage={post.frontmatter.featuredimage}
        author={post.frontmatter.author}
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
