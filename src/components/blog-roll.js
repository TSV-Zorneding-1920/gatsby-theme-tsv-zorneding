import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import PreviewCompatibleImage from "./preview-compatible-image";

class BlogRoll extends React.Component {
  render() {
    const posts = this.props.posts;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="box" key={post.id}>
              <PreviewCompatibleImage
                imageInfo={{
                  image: post.frontmatter.featuredimage,
                  alt: `featured image thumbnail for post ${post.frontmatter.title}`
                }}
                link={{ url: post.fields.slug, class: "image left fit" }}
              />
              <p className="post-meta">
                <Link
                  className="title has-text-primary is-size-4"
                  to={post.fields.slug}
                >
                  {post.frontmatter.title}
                </Link>
                <span> &bull; </span>
                <span className="subtitle is-size-5 is-block">
                  {post.frontmatter.date}
                </span>
              </p>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className="button" to={post.fields.slug}>
                  Mehr →
                </Link>
              </p>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  posts: PropTypes.array
};

export default BlogRoll;
