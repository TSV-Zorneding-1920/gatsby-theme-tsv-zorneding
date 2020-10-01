import React from "react";
import Link from "./link";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./preview-compatible-image";
import { H3 } from "./globals";

const Teaser = ({ description, link, title, featuredimage }) => (
  <article>
    <PreviewCompatibleImage
      imageInfo={{
        image: featuredimage,
        alt: `featured image thumbnail for post ${title}`,
        imageStyle: { maxHeight: 300, maxWidth: 500 },
      }}
      className="image object"
      link={link}
    />
    <H3>{title}</H3>
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
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default Teaser;
