import React from "react";
import { useBlogPages } from "../../hooks/use-blog-pages";
import PreviewCompatibleImage from "../preview-compatible-image";
import { Link } from "gatsby";

const MiniPosts = () => {
  let posts = useBlogPages();
  posts = posts.filter(function(post) {
    return post.node.frontmatter.featured;
  });
  if (!posts.length) {
    return "";
  }
  return (
    <section>
      <div className="mini-posts">
        {posts.map(function(post, i) {
          return (
            <article key={i}>
              <Link to={post.node.fields.slug} className="image">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: post.node.frontmatter.featuredimage,
                    alt: `featured image thumbnail for post`,
                    style: { maxHeight: 250 }
                  }}
                  className="image object"
                />
                <h3>{post.node.frontmatter.title}</h3>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default MiniPosts;
