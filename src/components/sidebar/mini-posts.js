import React from "react";
import { useBlogPages } from "../../hooks/use-blog-pages";
import PreviewCompatibleImage from "../preview-compatible-image";
import { ThemeProvider } from "emotion-theming";
import styled from "@emotion/styled";
import theme from "../../../theme";

const Article = styled.div`
  border-top: solid 1px ${props => props.theme.palette.border};
  margin-top: ${props => props.theme.size.elementMargin};
  padding-top: ${props => props.theme.size.elementMargin};

  .image {
    display: block;
    margin: 0 0 ${props => props.theme.size.elementMargin} 0;

    img {
      display: block;
      width: 100%;
    }
  }

  &:first-child {
    border-top: 0;
    margin-top: 0;
    padding-top: 0;
  }
`;

const MiniPosts = () => {
  let posts = useBlogPages();
  posts = posts.filter(function(post) {
    return post.node.frontmatter.featured;
  });
  if (!posts.length) {
    return <></>;
  }
  return (
    <section>
      <ThemeProvider theme={theme}>
        {posts.map(function(post, i) {
          return (
            <Article key={i}>
              <PreviewCompatibleImage
                imageInfo={{
                  image: post.node.frontmatter.featuredimage,
                  alt: `featured image thumbnail for post`,
                  style: { maxHeight: 250 }
                }}
                className="image object"
                link={post.node.fields.slug}
              />
              <h3>{post.node.frontmatter.title}</h3>
            </Article>
          );
        })}
      </ThemeProvider>
    </section>
  );
};

export default MiniPosts;
