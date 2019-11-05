import React from "react";
import PropTypes from "prop-types";

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

export const MarkdownContent = ({ content, className }) => {
  const remark = require("remark");
  const remarkHTML = require("remark-html");
  const html = remark()
    .use(remarkHTML)
    .processSync(content)
    .toString();
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
};

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
};

HTMLContent.propTypes = Content.propTypes;
MarkdownContent.propTypes = Content.propTypes;

export default Content;
