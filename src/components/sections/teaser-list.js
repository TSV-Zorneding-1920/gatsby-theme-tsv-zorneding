import React from "react";
import TeaserListComponent from "../teaser-list";
import Teaser from "../teaser";
import { graphql } from "gatsby";
import { H2 } from "../globals";

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
    let content;
    if (this.props.admin) {
      content = [...Array(this.props.count)].map(function(k) {
        return (
          <Teaser
            title="Platzhalter Titel"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
            featuredimage="/img/default.jpg"
            key={k}
          />
        );
      });
      content = [<div className="posts">{content}</div>];
    } else {
      content = (
        <TeaserListComponent
          offset={this.props.offset}
          count={this.props.count}
          tags={this.props.tags}
        />
      );
    }
    return (
      <>
        {this.props.title && (
          <header className="major">
            <H2>{this.props.title}</H2>
          </header>
        )}
        {content}
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
