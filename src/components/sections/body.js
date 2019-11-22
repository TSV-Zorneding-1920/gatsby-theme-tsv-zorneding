import React from "react";
import { MarkdownContent } from "../content";

class Body extends React.Component {
  render() {
    return (
      <div className="row">
        <MarkdownContent content={this.props.content} />
      </div>
    );
  }
}

export default Body;
