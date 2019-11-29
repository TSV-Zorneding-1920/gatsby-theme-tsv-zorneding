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
          widget: "string",
          required: false
        },
        {
          label: "Versatz",
          name: "offset",
          widget: "number",
          default: 0,
          hint:
            "0 - Liste startet mit dem aktuellsten Eintrag, 1 - Liste startet mit dem zweiten Eintrag, usw... "
        },
        {
          label: "Anzahl",
          name: "count",
          widget: "number",
          default: 3,
          hint: "Anzahl der Einträge in der Liste"
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
