import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Link from "../../link";
import MenuLink from "./menuLink";
import PropTypes from "prop-types";
import { useBlogPages } from "../../../hooks/use-blog-pages";
import DynamicMenu from "./dynamicMenu";
import { H2 } from "../../globals";

const Menu = ({ title }) => {
  const { nav } = useStaticQuery(
    graphql`
      query {
        nav: file(relativePath: { eq: "menu.yml" }) {
          childDataYaml {
            menu_entry {
              page
              menu_entry {
                page
                title
                menu_entry {
                  page
                  title
                }
              }
              title
            }
          }
        }
      }
    `
  );

  const posts = useBlogPages();
  return (
    <nav id="menu">
      <header className="major">
        <H2>
          <Link to="/">{title}</Link>
        </H2>
      </header>
      <ul
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        name="Hauptnavigation"
      >
        <MenuLink to="/" content="0">
          Startseite
        </MenuLink>
        {posts.length > 0 && (
          <MenuLink to="/blog" content="1">
            Aktuelles
          </MenuLink>
        )}

        <DynamicMenu items={nav.childDataYaml.menu_entry} />

        <MenuLink to="/kontakt" content="1">
          Kontakt
        </MenuLink>
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  title: PropTypes.string
};

export default Menu;
