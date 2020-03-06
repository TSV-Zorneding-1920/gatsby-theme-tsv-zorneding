import React from "react";
import GatsbyLink from "gatsby-link";

class Link extends React.Component {
  static isExternal(url) {
    const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    return !url || url.match(new RegExp(expression));
  }

  static renderExternal(props) {
    return (
      <a {...props} href={props.to} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    );
  }

  render() {
    if (Link.isExternal(this.props.to)) {
      return Link.renderExternal(this.props);
    }
    return <GatsbyLink {...this.props}>{this.props.children}</GatsbyLink>;
  }
}

export default Link;
