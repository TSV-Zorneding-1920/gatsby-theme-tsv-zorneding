import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Link from "../link";
import MenuLink from "../menu-link";
import PropTypes from "prop-types";
import { useBlogPages } from "../../hooks/use-blog-pages";

class SubMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({
      active: !this.state.active
    });
  }
  render() {
    return (
      <li>
        <span
          className={this.state.active ? "opener active" : "opener"}
          onClick={this.toggleMenu}
          onKeyDown={this.toggleMenu}
          role="button"
          tabIndex="0"
        >
          {this.props.text}
        </span>
        <ul>{this.props.children}</ul>
      </li>
    );
  }
}

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
        <h2>
          <Link to="/">{title}</Link>
        </h2>
      </header>
      <ul itemScope itemType="https://schema.org/BreadcrumbList">
        <MenuLink to="/" content="1">
          Startseite
        </MenuLink>
        {posts.length > 0 && (
          <MenuLink to="/blog" content="1">
            Aktuelles
          </MenuLink>
        )}

        {nav.childDataYaml.menu_entry &&
          nav.childDataYaml.menu_entry.map(function(entry, i) {
            return entry.menu_entry ? (
              <SubMenu text={entry.title} key={i}>
                {entry.menu_entry.map(function(subentry, k) {
                  if (subentry.page) {
                    return (
                      <MenuLink to={subentry.page} content="2">
                        {subentry.title}
                      </MenuLink>
                    );
                  } else if (subentry.menu_entry) {
                    return (
                      <SubMenu text={subentry.title} key={`sub ${i}`}>
                        {subentry.menu_entry.map(function(subsubentry, k) {
                          if (subsubentry.page) {
                            return (
                              <MenuLink to={subsubentry.page} content="3">
                                {subsubentry.title}
                              </MenuLink>
                            );
                          } else {
                            return <></>;
                          }
                        })}
                      </SubMenu>
                    );
                  } else {
                    return <></>;
                  }
                })}
              </SubMenu>
            ) : (
              <MenuLink to={entry.page} content="1">
                {entry.title}
              </MenuLink>
            );
          })}
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
