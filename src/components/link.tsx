import React from "react";
import GatsbyLink from "gatsby-link";
import { GatsbyLinkProps } from "gatsby-link";

class Link<TState> extends GatsbyLink<TState> {
  static isExternal(url: string): boolean {
    const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
    return Boolean(!url || url.match(new RegExp(expression)))
  }

  static renderExternal<TState>(props: GatsbyLinkProps<TState>): JSX.Element {
    return (
      <a {...props} href={props.to} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    )
  }

  render(): JSX.Element {
    if (Link.isExternal(this.props.to)) {
      return Link.renderExternal(this.props)
    }
    return <GatsbyLink {...this.props}>{this.props.children}</GatsbyLink>
  }
}

export default Link
