import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import DefaultImage from "./default-image";

const Teaser = ({ description, link, title, featuredimage }) => (
  <article>
    <Link to={link}>
      <DefaultImage
        imageInfo={{
          image: featuredimage,
          alt: `featured image thumbnail for post ${title}`,
          style: { maxHeight: 250 }
        }}
        className="image object"
      />
    </Link>
    <h3>{title}</h3>
    {description && <p>{description}</p>}
    <ul className="actions">
      <li>
        <Link to={link} className="button">
          Mehr →
        </Link>
      </li>
    </ul>
  </article>
);

Teaser.propTypes = {
  description: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  featuredimage: PropTypes.object
};

export default Teaser;
