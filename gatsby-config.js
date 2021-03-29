module.exports = ({ ENV, title }) => ({
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `src/data`,
        name: "data",
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 75,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          `gatsby-remark-component`,
          {
            resolve: "gatsby-remark-relative-images",
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1180,
              wrapperStyle: "width:100%;",
              linkImagesToOriginal: false,
              quality: 100,
              withWebp: true,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: title,
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#FFFFFF",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: `${__dirname}/img/logo-512x512.png`, // This path is relative to the root of the site.
        icons: generateFavicons([48, 72, 96, 144, 192, 256, 384, 512]),
      },
    },
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  author: edge.node.frontmatter.author,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  enclosure: {
                    url:
                      site.siteMetadata.siteUrl +
                      edge.node.frontmatter.featuredimage.childImageSharp.fluid
                        .src,
                  },
                  custom_elements: [
                    {
                      "content:encoded": edge.node.html,
                    },
                  ],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
                  edges {
                    node {
                      excerpt
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                        featuredimage {
                          childImageSharp {
                            fluid(
                              maxWidth: 500
                              maxHeight: 300
                              srcSetBreakpoints: [350, 500]
                            ) {
                              src
                            }
                          }
                        }
                        author
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title,
          },
        ],
      },
    },
    // must be after other CSS plugins
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        whitelistPatterns: [/^fa-/],
        develop: true,
        content: [
          `${__dirname}/src/**/!(*.d).{ts,js,jsx,tsx}`,
          `node_modules/react-image-gallery/src/!(*.d).{ts,js,jsx,tsx}`,
        ],
      },
    },
    "gatsby-plugin-htaccess",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/cms/cms.js`,
        manualInit: true,
        htmlTitle: `Administration ${title}`,
        htmlFavicon: `${__dirname}/img/favicon-32x32.png`,
        enableIdentityWidget: false,
      },
    },
  ],
});

const generateFavicons = (sizes) => {
  return sizes.map((size) => {
    return {
      src: `favicons/icon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
      type: "image/png",
    };
  });
};
