import React from "react";

const Contact = () => (
  <form
    name="contact"
    method="POST"
    netlify-honeypot="bot-field"
    data-netlify="true"
  >
    <input type="hidden" name="form-name" value="contact" />
    <p className="hidden">
      <label>
        Don’t fill this out if you're human: <input name="bot-field" />
      </label>
    </p>
    <div className="row gtr-uniform">
      <div className="col-6 col-12-xsmall">
        <input
          type="text"
          name="name"
          id="name"
          defaultValue=""
          placeholder="Name"
        />
      </div>
      <div className="col-6 col-12-xsmall">
        <input
          type="email"
          name="email"
          id="email"
          defaultValue=""
          placeholder="E-Mail"
        />
      </div>

      <div className="col-12">
        <textarea
          name="message"
          id="message"
          placeholder="Ihre Nachricht"
          rows="6"
        ></textarea>
      </div>
      <div className="col-12">
        <ul className="actions">
          <li>
            <input type="submit" value="Abschicken" className="primary" />
          </li>
          <li>
            <input type="reset" value="Zurücksetzen" />
          </li>
        </ul>
      </div>
    </div>
  </form>
);

export default Contact;
