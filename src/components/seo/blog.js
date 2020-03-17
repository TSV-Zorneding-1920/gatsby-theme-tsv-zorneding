import React from "react";
import { JSONLD, Generic } from "react-structured-data";
import Site from "./site";
import PropTypes from "prop-types";

class Blog extends Site {
  type = "article";

  constructor(props) {
    super(props);
    this.content.push(this.renderJsonLdWebPage());
  }

  renderJsonLdWebPage() {
    const fullUrl = `${this.props.url}${this.props.slug}`;
    const image = this.props.image
      ? `${this.props.url}${this.props.image.src}`
      : "";
    return (
      <div key="seo-blog-wrapper">
        <JSONLD dangerouslyExposeHtml={true} key={this.type}>
          <Generic
            type="blogPosting"
            jsonldtype="BlogPosting"
            schema={{
              author: this.props.author,
              description: this.props.description,
              headline: this.props.title,
              wordCount: this.props.wordCount,
              abstract: this.props.description,
              dateCreated: this.props.date,
              datePublished: this.props.date,
              dateModified: this.props.date,
              publisher: this.getPublisher(),
              mainEntityOfPage: {
                "@type": "Website",
                name: "TSV Zorneding e.V. 1920"
              },
              image: {
                "@type": "ImageObject",
                url: image
              },
              url: fullUrl
            }}
          />
        </JSONLD>
        <JSONLD key="seo-breadcrumb">
          <Generic
            type="breadcrumbList"
            jsonldtype="BreadcrumbList"
            schema={{
              itemListElement: [
                {
                  position: 2,
                  "@type": "ListItem",
                  "@id": fullUrl,
                  name: this.props.title
                }
              ]
            }}
          ></Generic>
        </JSONLD>
      </div>
    );
  }
}

Blog.propTypes = {
  ...Site.propTypes,
  date: PropTypes.string.isRequired,
  wordCount: PropTypes.number.isRequired
};

export default Blog;
