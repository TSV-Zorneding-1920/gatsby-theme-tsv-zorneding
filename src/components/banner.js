import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./preview-compatible-image";

const Banner = ({ description, link, title, featuredimage }) => (
  <section id="banner">
    <div className="content">
      <header>
        <Link to={link}>
          <h1>{title}</h1>
        </Link>
      </header>
      <p>{description}</p>
      {link && (
        <ul className="actions">
          <li>
            <Link to={link} className="button big">
              Mehr →
            </Link>
          </li>
        </ul>
      )}
    </div>
    {featuredimage && (
      <Link to={link} className="image">
        <PreviewCompatibleImage
          imageInfo={{
            image: featuredimage,
            alt: `featured image thumbnail for post ${title}`
          }}
        />
      </Link>
    )}
  </section>
);

Banner.propTypes = {
  description: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  featuredimage: PropTypes.object
};

export default Banner;
