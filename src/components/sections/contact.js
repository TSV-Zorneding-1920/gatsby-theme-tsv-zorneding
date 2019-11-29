import React from "react";
import ContactComponent from "../contact";
import { graphql } from "gatsby";

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
            <h2>{this.props.title}</h2>
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
