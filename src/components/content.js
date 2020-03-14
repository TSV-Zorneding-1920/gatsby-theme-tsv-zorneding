import React from "react";
import PropTypes from "prop-types";
import ReactCommonmark from "react-commonmark";

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
    return <ReactCommonmark source={content} className={className} />;
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
