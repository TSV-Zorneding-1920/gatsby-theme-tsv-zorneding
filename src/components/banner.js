import React from "react";
import Link from "./link";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./preview-compatible-image";
import { MarkdownContent } from "./content";

const Banner = ({ description, link, title, featuredimage }) => (
  <section id="banner">
    <div className="content">
      <header>
        {link ? (
          <Link to={link}>
            <h1>{title}</h1>
          </Link>
        ) : (
          <h1>{title}</h1>
        )}
      </header>
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
        alt: `featured image thumbnail for post ${title}`
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
