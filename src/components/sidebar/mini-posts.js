import React from "react";
import { useBlogPages } from "../../hooks/use-blog-pages";
import PreviewCompatibleImage from "../preview-compatible-image";

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
      <div className="mini-posts">
        {posts.map(function(post, i) {
          return (
            <article key={i}>
              <PreviewCompatibleImage
                imageInfo={{
                  image: post.node.frontmatter.featuredimage,
                  alt: `featured image thumbnail for post`,
                  style: { maxHeight: 250 }
                }}
                className="image object"
                link={{ url: post.node.fields.slug }}
              />
              <h3>{post.node.frontmatter.title}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default MiniPosts;
