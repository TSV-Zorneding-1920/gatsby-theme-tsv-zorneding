import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { JSONLD, Generic } from "react-structured-data";

class Site extends React.Component {
  type = "website";

  content = [];

  constructor(props) {
    super(props);
    this.content.push(this.renderHelmet());
    this.content.push(this.renderJsonLdWebSite());
  }

  render() {
    return this.content;
  }

  renderHelmet() {
    const image = this.props.image
      ? `${this.props.url}${this.props.image.src}`
      : "";

    const fullUrl = `${this.props.url}${this.props.slug}`;

    const canonical = this.props.canonical ? this.props.canonical : fullUrl;

    return (
      <Helmet key="helmet">
        <title>{this.props.title}</title>
        <html lang="de" />
        <link rel="canonical" href={canonical} />
        <meta name="description" content={this.props.description} />
        {image && <meta name="image" content={image} />}

        <meta property="og:url" content={fullUrl} />
        <meta property="og:type" content={this.type} />
        <meta property="og:title" content={this.props.title} />
        <meta property="og:description" content={this.props.description} />
        <meta property="og:locale" content="de_DE" />
        {image && <meta property="og:image" content={image} />}
        {image && this.props.image.width && (
          <meta property="og:image:width" content={this.props.image.width} />
        )}
        {image && this.props.image.height && (
          <meta property="og:image:height" content={this.props.image.height} />
        )}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={this.props.author} />
        <meta name="twitter:title" content={this.props.title} />
        <meta name="twitter:description" content={this.props.description} />
        {image && <meta name="twitter:image" content={image} />}
      </Helmet>
    );
  }

  renderJsonLdWebSite() {
    return (
      <JSONLD dangerouslyExposeHtml={true} key={this.type}>
        <Generic
          type="website"
          jsonldtype="Website"
          schema={{
            name: "TSV Zorneding e.V. 1920",
            url: this.props.url,
            publisher: this.getPublisher()
          }}
        />
      </JSONLD>
    );
  }

  getPublisher() {
    return {
      "@type": "Organization",
      name: "TSV Zorneding e.V. 1920",
      logo: {
        "@type": "ImageObject",
        url: `${this.props.url}/favicons/icon-192x192.png`
      }
    };
  }
}

Site.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  canonical: PropTypes.string
};

export default Site;
