import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Link from "./link";

const PreviewCompatibleImage = ({ imageInfo, className, link }) => {
  let { alt = "", imageStyle, image, childImageSharp } = imageInfo;
  let imageObject = null;

  if (!!image && !!image.childImageSharp) {
    if (image.childImageSharp.fluid) {
      imageObject = (
        <Img
          style={imageStyle}
          fluid={image.childImageSharp.fluid}
          alt={alt}
          className={link ? "" : className}
        />
      );
    } else if (image.childImageSharp.fixed) {
      imageObject = (
        <Img
          style={imageStyle}
          fixed={image.childImageSharp.fixed}
          alt={alt}
          className={link ? "" : className}
        />
      );
    }
  }

  if (!!childImageSharp) {
    if (childImageSharp.fluid) {
      imageObject = (
        <Img
          style={imageStyle}
          fluid={childImageSharp.fluid}
          alt={alt}
          className={link ? "" : className}
        />
      );
    } else if (childImageSharp.fixed) {
      imageObject = (
        <Img
          style={imageStyle}
          fixed={childImageSharp.fixed}
          alt={alt}
          className={link ? "" : className}
        />
      );
    }
  }

  if (!!image && typeof image === "string") {
    imageObject = (
      <img
        style={imageStyle}
        src={image}
        alt={alt}
        className={link ? "" : className}
      />
    );
  }

  if (imageObject && link) {
    imageObject = (
      <Link to={link} className={className}>
        {imageObject}
      </Link>
    );
  }

  return imageObject;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    imageStyle: PropTypes.object
  }).isRequired,
  className: PropTypes.string,
  link: PropTypes.string
};

export default PreviewCompatibleImage;
