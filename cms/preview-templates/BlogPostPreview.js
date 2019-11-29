import React from "react";
import PropTypes from "prop-types";
import BlogPostTemplate from "../../src/templates/blog-post";

const BlogPostPreview = ({ entry, widgetFor }) => {
  const entryDate = entry.getIn(["data", "date"]);
  const date = entryDate ? entryDate.toString() : "";
  return (
    <BlogPostTemplate
      content={widgetFor("body")}
      tags={[]}
      title={entry.getIn(["data", "title"])}
      slug={""}
      date={date}
      featuredimage={entry.getIn(["data", "featuredimage"])}
    />
  );
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BlogPostPreview;
