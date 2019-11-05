import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const PreviewCompatibleImage = ({ imageInfo, className }) => {
  const imageStyle = { borderRadius: "5px" };
  let { alt = "", childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    if (image.childImageSharp.fluid) {
      return (
        <Img
          style={imageStyle}
          fluid={image.childImageSharp.fluid}
          alt={alt}
          className={className}
        />
      );
    } else if (image.childImageSharp.fixed) {
      return (
        <Img
          style={imageStyle}
          fixed={image.childImageSharp.fixed}
          alt={alt}
          className={className}
        />
      );
    }
  }

  if (!!childImageSharp) {
    if (childImageSharp.fluid) {
      return (
        <Img
          style={imageStyle}
          fluid={childImageSharp.fluid}
          alt={alt}
          className={className}
        />
      );
    } else if (childImageSharp.fixed) {
      return (
        <Img
          style={imageStyle}
          fixed={childImageSharp.fixed}
          alt={alt}
          className={className}
        />
      );
    }
  }

  if (!!image && typeof image === "string")
    return (
      <img style={imageStyle} src={image} alt={alt} className={className} />
    );

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    style: PropTypes.object
  }).isRequired,
  className: PropTypes.string
};

export default PreviewCompatibleImage;
