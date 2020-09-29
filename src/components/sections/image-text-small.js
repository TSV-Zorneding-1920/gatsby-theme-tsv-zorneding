import React from "react";
import { MarkdownContent } from "../content";
import { graphql } from "gatsby";
import PreviewCompatibleImage from "../preview-compatible-image";
import { H2, H3 } from "../globals";

class ImageTextSmall extends React.Component {
  admin() {
    return {
      label: "Bild + Text (klein)",
      name: "image_text_small",
      widget: "object",
      fields: [
        {
          label: "Titel",
          name: "title",
          widget: "string",
          required: false,
        },
        {
          label: "Element",
          name: "info",
          widget: "list",
          fields: [
            {
              label: "Titel",
              name: "title",
              widget: "string",
            },
            {
              label: "Bild",
              name: "image_small",
              widget: "image",
              default: "/img/default.jpg",
            },
            {
              label: "Text",
              name: "body",
              widget: "markdown",
              required: false,
            },
          ],
        },
      ],
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
        <div className="features">
          {this.props.info &&
            this.props.info.map(function (post, j) {
              return (
                <article key={j}>
                  <span style={{ margin: 10 + "px" }}>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.image_small,
                        alt: `featured image thumbnail for post`,
                        imageStyle: { maxHeight: 100, maxWidth: 100 },
                      }}
                    />
                  </span>

                  <div className="content">
                    <H3>{post.title}</H3>
                    <MarkdownContent content={post.body} />
                  </div>
                </article>
              );
            })}
        </div>
        <hr />
      </>
    );
  }
}

export default ImageTextSmall;

export const query = graphql`
  fragment SectionImageTextSmallFragment on MarkdownRemarkFrontmatter {
    sections {
      title
      info {
        body
        title
        image_small {
          childImageSharp {
            fixed(height: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;
