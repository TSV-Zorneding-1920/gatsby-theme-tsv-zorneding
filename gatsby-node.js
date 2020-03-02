const _ = require("lodash");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                tags
                templateKey
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  );
  if (result.errors) {
    throw new Error(response.errors);
  }

  // Make post pages
  const posts = result.data.allMarkdownRemark.edges;
  let countBlogs = 0;
  posts.forEach(edge => {
    if (edge.node.frontmatter.templateKey === "blog-post") {
      countBlogs++;
    }
    const id = edge.node.id;
    createPage({
      path: edge.node.fields.slug,
      tags: edge.node.frontmatter.tags,
      component: require.resolve(
        `./src/layout/${String(edge.node.frontmatter.templateKey)}.js`
      ),
      // additional data can be passed via context
      context: {
        id
      }
    });
  });

  // Make tag pages
  const tags = result.data.tagsGroup.group;
  tags.forEach(tag => {
    createPage({
      path: `/tag/${_.kebabCase(tag.fieldValue)}/`,
      component: require.resolve(`./src/layout/tag.js`),
      context: {
        tag: tag.fieldValue
      }
    });
  });

  // Create blog-list pages
  const postsPerPage = 10;
  const numPages = Math.ceil(countBlogs / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: require.resolve("./src/layout/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  fmImagesToRelative(node); // convert image paths for gatsby images
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    let slug;
    if (node.frontmatter && node.frontmatter.slug) {
      slug = `/${node.frontmatter.slug}`;
    } else {
      slug = createFilePath({ node, getNode });
    }
    createNodeField({
      name: `slug`,
      node,
      value: slug
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `

  type MarkdownRemarkFrontmatter @derivedTypes {
    title: String
    templateKey: String
    author: String
    slug: String
    showTitle: Boolean
    sections: [MarkdownRemarkFrontmatterSections]
    date: Date @dateformat
    featured: Boolean
    sticky: Boolean
    featuredimage: File @fileByRelativePath
    tags: [String]
  }
  
  type MarkdownRemarkFrontmatterSections @derivedTypes {
    body: String
    type: String
    images: [MarkdownRemarkFrontmatterSectionsImages]
    count: Int
    offset: Int
    tags: [String]
    image: File @fileByRelativePath
    html: String
    title: String
    info: [MarkdownRemarkFrontmatterSectionsInfo]
    link: String
    headline: String
    element: [MarkdownRemarkFrontmatterSectionsElement]
    nodes: [MarkdownRemarkFrontmatterSectionsNodes]
  }
  
  type MarkdownRemarkFrontmatterSectionsImages {
    image: File @fileByRelativePath
  }
  
  type MarkdownRemarkFrontmatterSectionsInfo {
    image_small: File @fileByRelativePath
    body: String
    title: String
  }
  
  type MarkdownRemarkFrontmatterSectionsElement {
    body: String
    icon: String
    title: String
    link: String
    file: File @fileByRelativePath
  }
  
  type MarkdownRemarkFrontmatterSectionsNodes {
    body: String
    image: File @fileByRelativePath
    title: String
    link: String
  }
  
  type MarkdownRemarkFields {
    slug: String
  }
  
  type DataYaml implements Node @derivedTypes @dontInfer {
    menu_entry: [DataYamlMenu_entry]
  }
  
  type DataYamlMenu_entry @derivedTypes {
    page: String
    title: String
    menu_entry: [DataYamlMenu_entryMenu_entry]
  }
  
  type DataYamlMenu_entryMenu_entry @derivedTypes {
    page: String
    title: String
    menu_entry: [DataYamlMenu_entryMenu_entryMenu_entry]
  }
  
  type DataYamlMenu_entryMenu_entryMenu_entry {
    page: String
    title: String
  }
  
  type EventsYaml implements Node @dontInfer {
    description: String
    label: String
    date: Date @dateformat
  }
  
  `;
  createTypes(typeDefs);
};

const webpack = require(`webpack`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /^netlify-identity-widget$/
      })
    ]
  });
};
