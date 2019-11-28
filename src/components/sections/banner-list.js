import React from "react";
import BannerListComponent from "../banner-list";
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
        <BannerListComponent
          offset={this.props.offset}
          count={this.props.count}
        />
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
