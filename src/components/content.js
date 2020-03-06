import React from "react";
import PropTypes from "prop-types";

export const HTMLContent = ({ content, className }) => {
  if (content) {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }
  return <></>;
};

export const MarkdownContent = ({ content, className }) => {
  if (content) {
    const remark = require("remark");
    const remarkHTML = require("remark-html");
    const html = remark()
      .use(remarkHTML)
      .processSync(content)
      .toString();

    return (
      <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
    );
  }
  return <></>;
};

const Content = ({ content, className }) => {
  if (content) {
    return <div className={className}>{content}</div>;
  }
  return <></>;
};

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
};

HTMLContent.propTypes = Content.propTypes;
MarkdownContent.propTypes = Content.propTypes;

export default Content;
