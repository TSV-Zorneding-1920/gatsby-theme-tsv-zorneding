import React from "react";
import BannerComponent from "../banner";
import { graphql } from "gatsby";

class BannerList extends React.Component {
  admin() {
    return {
      label: "Banner",
      name: "banner",
      widget: "object",
      fields: [
        {
          label: "Titel",
          name: "title",
          widget: "string",
          required: false
        },
        {
          label: "Überschrift",
          name: "headline",
          widget: "string"
        },
        {
          label: "Bild",
          name: "image",
          widget: "image",
          default: "/img/default.jpg"
        },
        {
          label: "Text",
          name: "body",
          widget: "markdown",
          required: false
        },
        {
          label: "Link",
          name: "link",
          widget: "string",
          required: false
        }
      ]
    };
  }
  render() {
    return (
      <>
        {this.props.title && (
          <header className="major">
            <h2>{this.props.title}</h2>
          </header>
        )}
        <BannerComponent
          title={this.props.headline}
          description={this.props.body}
          link={this.props.link}
          featuredimage={this.props.featuredimage}
        />
        <hr />
      </>
    );
  }
}

export default BannerList;

export const query = graphql`
  fragment SectionBannerFragment on MarkdownRemarkFrontmatter {
    sections {
      headline
      body
      link
      title
      image {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`;
