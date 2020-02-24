import { Link } from "gatsby";
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
          <a
            className="icon icon-facebook"
            style={{ cursor: "pointer" }}
            href={socialPages.facebook}
            target="_blank"
            rel="noopener noreferrer me"
            aria-label={siteTitle + " Facebook Seite"}
          >
            <span className="label">Facebook</span>
          </a>
        </li>
      )}
      {socialPages.instagram && (
        <li>
          <a
            className="icon icon-instagram"
            style={{ cursor: "pointer" }}
            href={socialPages.instagram}
            target="_blank"
            rel="noopener noreferrer me"
            aria-label={siteTitle + " Instagram Seite"}
          >
            <span className="label">Instagram</span>
          </a>
        </li>
      )}
      {socialPages.twitter && (
        <li>
          <a
            className="icon icon-twitter"
            style={{ cursor: "pointer" }}
            href={socialPages.twitter}
            target="_blank"
            rel="noopener noreferrer me"
            aria-label={siteTitle + " Twitter Seite"}
          >
            <span className="label">Twitter</span>
          </a>
        </li>
      )}
      {socialPages.youtube && (
        <li>
          <a
            className="icon icon-youtube"
            style={{ cursor: "pointer" }}
            href={socialPages.youtube}
            target="_blank"
            rel="noopener noreferrer me"
            aria-label={siteTitle + " YouTube Seite"}
          >
            <span className="label">YouTube</span>
          </a>
        </li>
      )}
      <li>
        <a
          className="icon icon-feed"
          style={{ cursor: "pointer" }}
          href="/rss.xml"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={siteTitle + " RSS Feed"}
        >
          <span className="label">RSS</span>
        </a>
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
