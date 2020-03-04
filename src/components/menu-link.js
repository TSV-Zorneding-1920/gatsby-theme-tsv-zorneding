import React from "react";

const MenuLink = props => {
  const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  const regex = new RegExp(expression);
  if (props.to.match(regex)) {
    return (
      <li>
        <a {...props} href={props.to} target="_blank" rel="noopener noreferrer">
          {props.children}
        </a>
      </li>
    );
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
