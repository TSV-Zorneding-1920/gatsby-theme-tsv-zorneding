import React from "react";
import TeaserListComponent from "../teaser-list";
import { graphql } from "gatsby";

class TeaserList extends React.Component {
  admin() {
    return {
      label: "Blogliste",
      name: "teaser_list",
      widget: "object",
      fields: [
        {
          label: "Titel",
          name: "title",
          widget: "string"
        },
        {
          label: "Versatz",
          name: "offset",
          widget: "number",
          default: 0
        },
        {
          label: "Anzahl",
          name: "count",
          widget: "number",
          default: 3
        },
        {
          label: "Tags",
          name: "tags",
          widget: "list",
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
        <TeaserListComponent
          offset={this.props.offset}
          count={this.props.count}
          tags={this.props.tags}
        />
        <hr />
      </>
    );
  }
}

export default TeaserList;

export const query = graphql`
  fragment SectionTeaserListFragment on MarkdownRemarkFrontmatter {
    sections {
      title
      count
      offset
      tags
    }
  }
`;
