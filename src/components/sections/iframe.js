import React from "react";
import { HTMLContent } from "../content";

class IFrame extends React.Component {
  admin() {
    return {
      label: "iFrame",
      name: "iframe",
      widget: "object",
      fields: [
        {
          label: "HTML",
          name: "html",
          widget: "text"
        }
      ]
    };
  }
  render() {
    return <HTMLContent content={this.props.html} className="row" />;
  }
}

export default IFrame;
