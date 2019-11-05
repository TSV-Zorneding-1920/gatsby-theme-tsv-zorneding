import React from "react";
import PropTypes from "prop-types";
import Banner from "./banner";
import _ from "lodash";
import { useBlogPages } from "../hooks/use-blog-pages";

function BannerList({ offset, count }) {
  const posts = useBlogPages();
  const filteredPosts = _.slice(posts, offset, offset + count);
  return (
    <>
      {filteredPosts.map(function(post) {
        return (
          <Banner
            title={post.node.frontmatter.title}
            description={post.node.excerpt}
            link={post.node.fields.slug}
            featuredimage={post.node.frontmatter.featuredimage}
            key={post.node.fields.slug}
          />
        );
      })}
    </>
  );
}

BannerList.defaultProps = {
  offset: 0,
  count: 1
};

BannerList.propTypes = {
  offset: PropTypes.number,
  count: PropTypes.number
};

export default BannerList;
