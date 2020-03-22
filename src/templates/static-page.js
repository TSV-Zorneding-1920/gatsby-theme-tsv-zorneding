import React from "react";
import PropTypes from "prop-types";
import Sections from "../components/sections";
import { H1 } from "../components/globals";

const StaticPageTemplate = ({ title, showTitle, sections, admin = false }) => {
  return (
    <section>
      {showTitle && (
        <header className="main">
          <H1>{title}</H1>
        </header>
      )}
      <Sections sections={sections} admin={admin} />
    </section>
  );
};

StaticPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  showTitle: PropTypes.bool.isRequired,
  sections: PropTypes.array
};

export default StaticPageTemplate;
