import React from "react";
import { HTMLContent } from "../content";

class IFrame extends React.Component {
  render() {
    return <HTMLContent content={this.props.html} className="row" />;
  }
}

export default IFrame;
