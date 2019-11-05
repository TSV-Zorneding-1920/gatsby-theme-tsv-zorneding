import React from "react";
import PropTypes from "prop-types";
import Sections from "../components/sections";

const StaticPageTemplate = ({ title, showTitle, sections }) => {
  return (
    <section>
      {showTitle && (
        <header className="main">
          <h1>{title}</h1>
        </header>
      )}
      <Sections sections={sections} />
    </section>
  );
};

StaticPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  showTitle: PropTypes.bool.isRequired,
  sections: PropTypes.array
};

export default StaticPageTemplate;
