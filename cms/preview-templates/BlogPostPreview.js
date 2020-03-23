import React from "react";
import PropTypes from "prop-types";
import BlogPostTemplate from "../../src/templates/blog-post";
import { MarkdownContent } from "../../src/components/content";

const BlogPostPreview = ({ entry }) => {
  const entryDate = entry.getIn(["data", "date"]);
  const date = entryDate ? entryDate.toString() : "";
  const data = entry.getIn(["data"]).toJS();
  return (
    <BlogPostTemplate
      content={data.body}
      contentComponent={MarkdownContent}
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
