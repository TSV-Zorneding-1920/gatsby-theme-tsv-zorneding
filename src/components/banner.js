import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";

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
      <Img
        fluid={featuredimage.childImageSharp.fluid}
        className="image object"
      />
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
