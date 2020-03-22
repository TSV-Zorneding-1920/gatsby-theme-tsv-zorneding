import React from "react";
import ContactComponent from "../contact";
import { graphql } from "gatsby";
import { H2 } from "../globals";

class Contact extends React.Component {
  admin() {
    return {
      label: "Kontakt",
      name: "contact",
      widget: "object",
      fields: [
        {
          label: "Titel",
          name: "title",
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
        <ContactComponent />
        <hr />
      </>
    );
  }
}

export default Contact;

export const query = graphql`
  fragment SectionContactFragment on MarkdownRemarkFrontmatter {
    sections {
      title
    }
  }
`;
