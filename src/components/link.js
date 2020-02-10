import React from "react";
import GatsbyLink from "gatsby-link";

const Link = props => {
  const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  const regex = new RegExp(expression);
  if (props.to.match(regex)) {
    return (
      <a {...props} href={props.to} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    );
  }
  return <GatsbyLink {...props}>{props.children}</GatsbyLink>;
};

export default Link;
