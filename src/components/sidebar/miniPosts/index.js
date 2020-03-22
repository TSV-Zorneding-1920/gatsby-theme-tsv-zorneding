import React from "react";
import { useBlogPages } from "../../../hooks/use-blog-pages";
import PreviewCompatibleImage from "../../preview-compatible-image";
import { ThemeProvider } from "emotion-theming";
import theme from "../../../../theme";
import { Article } from "./style";

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
