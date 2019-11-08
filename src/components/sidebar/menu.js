import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Link from "../link";
import PropTypes from "prop-types";

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
              }
              title
            }
          }
        }
      }
    `
  );
  return (
    <nav id="menu">
      <header className="major">
        <h2>
          <Link to="/">{title}</Link>
        </h2>
      </header>
      <ul>
        <li>
          <Link to="/">Startseite</Link>
        </li>
        <li>
          <Link to="/blog">Aktuelles</Link>
        </li>
        {nav.childDataYaml.menu_entry &&
          nav.childDataYaml.menu_entry.map(function(entry, i) {
            return entry.menu_entry ? (
              <SubMenu text={entry.title} key={i}>
                {entry.menu_entry.map(function(subentry, k) {
                  return (
                    <li key={k}>
                      <Link to={"/" + subentry.page}>{subentry.title}</Link>
                    </li>
                  );
                })}
              </SubMenu>
            ) : (
              <li key={i}>
                <Link to={"/" + entry.page}>{entry.title}</Link>
              </li>
            );
          })}
        <li>
          <Link to="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  title: PropTypes.string
};

export default Menu;
