import React from "react";
import ContactComponent from "../contact";

class Contact extends React.Component {
  admin() {
    return {
      label: "Kontakt",
      name: "contact",
      widget: "object",
      fields: []
    };
  }
  render() {
    return <ContactComponent />;
  }
}

export default Contact;
