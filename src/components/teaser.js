import React from "react";
import Link from "./link";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./preview-compatible-image";

const Teaser = ({ description, link, title, featuredimage }) => (
  <article>
    <PreviewCompatibleImage
      imageInfo={{
        image: featuredimage,
        alt: `featured image thumbnail for post ${title}`,
        style: { maxHeight: 250 }
      }}
      className="image object"
      link={{ url: link }}
    />
    <h3>{title}</h3>
    {description && <p>{description}</p>}
    {link && (
      <ul className="actions">
        <li>
          <Link to={link} className="button">
            Mehr →
          </Link>
        </li>
      </ul>
    )}
  </article>
);

Teaser.propTypes = {
  description: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
  featuredimage: PropTypes.object
};

export default Teaser;
