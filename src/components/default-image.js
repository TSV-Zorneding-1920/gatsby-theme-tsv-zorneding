import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./preview-compatible-image";
import { useStaticQuery, graphql } from "gatsby";

const DefaultImage = ({ imageInfo, className }) => {
  let { childImageSharp, image } = imageInfo;

  const { defaultImage } = useStaticQuery(
    graphql`
      query {
        defaultImage: file(relativePath: { eq: "default.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 300) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  );

  if (!childImageSharp && !image && defaultImage) {
    imageInfo.image = defaultImage;
  }

  return <PreviewCompatibleImage imageInfo={imageInfo} className={className} />;
};

DefaultImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    style: PropTypes.object
  }).isRequired,
  className: PropTypes.string
};

export default DefaultImage;
