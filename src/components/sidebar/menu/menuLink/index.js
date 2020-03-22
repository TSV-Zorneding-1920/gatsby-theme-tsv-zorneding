import React from "react";
import Link from "../../../link";

const MenuLink = props => {
  if (Link.isExternal(props.to)) {
    return <li>{Link.renderExternal(props)}</li>;
  }

  const { to, content, ...cleanProps } = props;

  return (
    <li
      itemProp="itemListElement"
      itemScope
      itemType="https://schema.org/ListItem"
    >
      <a
        {...cleanProps}
        href={`${process.env.GATSBY_SITE_URL}${to}`}
        itemProp="item"
      >
        <span itemProp="name"> {props.children}</span>
      </a>
      <meta itemProp="position" content={content} />
    </li>
  );
};

export default MenuLink;
