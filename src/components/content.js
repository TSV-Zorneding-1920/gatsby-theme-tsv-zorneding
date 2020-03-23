import React from "react";
import PropTypes from "prop-types";
import rehypeReact from "rehype-react";
import remark2rehype from "remark-rehype";
import rehype2react from "rehype-react";
import { H1, H2, H3, H4, H5, H6 } from "./globals";

const components = { h1: H1, h2: H2, h3: H3, h4: H4, h5: H5, h6: H6 };

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

export const ComponentContent = ({ content, className }) => {
  if (content) {
    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components
    }).Compiler;

    return renderAst(content);
  }
  return <></>;
};

export const MarkdownContent = ({ content, className }) => {
  if (content) {
    var unified = require("unified");
    var markdown = require("remark-parse");

    var processor = unified()
      .use(markdown, {
        commonmark: true
      })
      .use(remark2rehype)
      .use(rehype2react, {
        createElement: React.createElement,
        components
      });

    return <>{processor.processSync(content).contents}</>;
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
