import React from "react";
import Link from "./link";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./preview-compatible-image";
import { MarkdownContent } from "./content";
import { H1 } from "./globals";

const Banner = ({ description, link, title, featuredimage }) => (
  <section id="banner">
    <div className="content">
      {link ? (
        <Link to={link}>
          <H1>{title}</H1>
        </Link>
      ) : (
        <H1>{title}</H1>
      )}
      <MarkdownContent content={description} />
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
    <PreviewCompatibleImage
      imageInfo={{
        image: featuredimage,
        alt: `featured image thumbnail for post ${title}`,
        imageStyle: { maxHeight: 300, maxWidth: 500 }
      }}
      className="image object"
      link={link}
    />
  </section>
);

Banner.propTypes = {
  description: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  featuredimage: PropTypes.object
};

export default Banner;
