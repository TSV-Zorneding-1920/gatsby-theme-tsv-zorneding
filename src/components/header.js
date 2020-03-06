import Link from "./link";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle, socialPages }) => (
  <header id="header">
    <Link to="/" className="logo">
      {siteTitle}
    </Link>
    <ul className="icons">
      {socialPages.facebook && (
        <li>
          <Link to={socialPages.facebook} className="icon icon-facebook">
            <span className="label">Facebook</span>
          </Link>
        </li>
      )}
      {socialPages.instagram && (
        <li>
          <Link to={socialPages.instagram} className="icon icon-instagram">
            <span className="label">Instagram</span>
          </Link>
        </li>
      )}
      {socialPages.twitter && (
        <li>
          <Link to={socialPages.twitter} className="icon icon-twitter">
            <span className="label">Twitter</span>
          </Link>
        </li>
      )}
      {socialPages.youtube && (
        <li>
          <Link to={socialPages.youtube} className="icon icon-youtube">
            <span className="label">YouTube</span>
          </Link>
        </li>
      )}
      <li>
        <Link to="/rss.xml" className="icon icon-feed">
          <span className="label">RSS</span>
        </Link>
      </li>
    </ul>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  socialPages: PropTypes.object
};

Header.defaultProps = {
  siteTitle: ``,
  socialPages: {}
};

export default Header;
