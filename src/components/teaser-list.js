import React from "react";
import PropTypes from "prop-types";
import Teaser from "./teaser";
import { useBlogPages } from "../hooks/use-blog-pages";
import _ from "lodash";
import { SimilarArticlesFactory } from "../lib/similar-articles-factory";

function TeaserList({ offset, count, tags, slug }) {
  let posts = useBlogPages()
    .map(edge => edge.node)
    .map(node =>
      Object.assign({}, node.frontmatter, node.fields, {
        excerpt: node.excerpt
      })
    );

  if (!!tags !== false && tags.length > 0) {
    posts = new SimilarArticlesFactory(posts, slug).setTags(tags).getArticles();
    posts = posts.map(node => Object.assign({}, node.article));
  }
  posts = _.slice(posts, offset, offset + count);
  return (
    <div className="posts">
      {posts.map(function(post) {
        return (
          <Teaser
            title={post.title}
            description={post.excerpt}
            link={post.slug}
            featuredimage={post.featuredimage}
            key={post.slug}
          />
        );
      })}
    </div>
  );
}

TeaserList.defaultProps = {
  offset: 0,
  count: 3,
  tags: [],
  slug: ""
};

TeaserList.propTypes = {
  offset: PropTypes.number,
  count: PropTypes.number,
  tags: PropTypes.array,
  slug: PropTypes.string
};

export default TeaserList;
