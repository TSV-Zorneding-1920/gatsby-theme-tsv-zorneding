import React from "react";
import PropTypes from "prop-types";
import Content from "../../src/components/content";
import PreviewCompatibleImage from "../../src/components/preview-compatible-image";

const BlogPostPreview = ({ entry, widgetFor }) => {
  const entryDate = entry.getIn(["data", "date"]);
  const date = entryDate ? entryDate.toString() : "";
  return (
    <section>
      <header className="main">
        <h1>{entry.getIn(["data", "title"])}</h1>
      </header>
      <span className="image object main">
        <PreviewCompatibleImage
          imageInfo={{
            image: entry.getIn(["data", "featuredimage"]),
            alt: `featured image thumbnail for post ${entry.getIn([
              "data",
              "title"
            ])}`
          }}
        />
      </span>
      <Content content={widgetFor("body")} />
      <p>{date}</p>
      <hr />
    </section>
  );
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BlogPostPreview;
