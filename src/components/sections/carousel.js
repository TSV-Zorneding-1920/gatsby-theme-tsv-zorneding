import React from "react";
import ImageGallery from "react-image-gallery";

class Carousel extends React.Component {
  render() {
    const images = this.props.images.map(function(image) {
      return {
        original: image.image.childImageSharp.orig.src,
        thumbnail: image.image.childImageSharp.thumb.src
      };
    });

    return (
      <div style={{ maxWidth: "700px", margin: "auto" }}>
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
        />
      </div>
    );
  }
}

export default Carousel;
