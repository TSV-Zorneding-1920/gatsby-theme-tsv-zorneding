import { useStaticQuery, graphql } from "gatsby";
export const useBlogPages = () => {
  const { posts } = useStaticQuery(
    graphql`
      query {
        posts: allMarkdownRemark(
          sort: {
            order: [DESC, DESC]
            fields: [frontmatter___sticky, frontmatter___date]
          }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
                    fluid(maxWidth: 500, maxHeight: 300) {
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
    `
  );
  return posts.edges;
};
