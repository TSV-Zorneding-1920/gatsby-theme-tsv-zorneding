import React from "react";
import { MarkdownContent } from "../content";

class Body extends React.Component {
  admin() {
    return {
      label: "Inhalt",
      name: "body",
      widget: "object",
      fields: [
        {
          label: "Inhalt",
          name: "body",
          widget: "markdown"
        }
      ]
    };
  }
  render() {
    return (
      <div className="row">
        <MarkdownContent content={this.props.content} />
      </div>
    );
  }
}

export default Body;
