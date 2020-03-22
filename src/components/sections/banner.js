import React from "react";
import BannerComponent from "../banner";
import { graphql } from "gatsby";
import { H2 } from "../globals";

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
            <H2>{this.props.title}</H2>
          </header>
        )}
        <BannerComponent
          title={this.props.headline}
          description={this.props.body}
          link={this.props.link}
          featuredimage={this.props.image}
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
          fluid(maxWidth: 500, maxHeight: 300, srcSetBreakpoints: [350, 500]) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`;
