import React from "react";
import BannerListComponent from "../banner-list";
import { graphql } from "gatsby";
import Banner from "../banner";

class BannerList extends React.Component {
  admin() {
    return {
      label: "Bannerliste",
      name: "banner_list",
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
        }
      ]
    };
  }
  render() {
    let content;
    if (this.props.admin) {
      content = [...Array(this.props.count)].map(function(k) {
        return (
          <Banner
            title="Platzhalter Titel"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
            featuredimage="/img/default.jpg"
            key={k}
          />
        );
      });
    } else {
      content = (
        <BannerListComponent
          offset={this.props.offset}
          count={this.props.count}
        />
      );
    }
    return (
      <>
        {this.props.title && (
          <header className="major">
            <h2>{this.props.title}</h2>
          </header>
        )}
        {content}
        <hr />
      </>
    );
  }
}

export default BannerList;

export const query = graphql`
  fragment SectionBannerListFragment on MarkdownRemarkFrontmatter {
    sections {
      count
      offset
      title
    }
  }
`;
