import React from "react";
import PropTypes from "prop-types";
import StaticPageTemplate from "../../src/templates/static-page";

const StaticPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <StaticPageTemplate {...data} admin={true} />;
};

StaticPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default StaticPagePreview;
