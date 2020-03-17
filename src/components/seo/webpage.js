import React from "react";
import { JSONLD, Generic } from "react-structured-data";
import Site from "./site";

class WebPage extends Site {
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
      <JSONLD dangerouslyExposeHtml={true} key={this.type}>
        <Generic
          type="webpage"
          jsonldtype="WebPage"
          schema={{
            name: this.props.title,
            headline: this.props.title,
            url: fullUrl,
            publisher: this.getPublisher(),
            author: this.getPublisher(),
            abstract: this.props.description,
            image
          }}
        />
      </JSONLD>
    );
  }
}

WebPage.propTypes = {
  ...Site.propTypes
};

export default WebPage;
