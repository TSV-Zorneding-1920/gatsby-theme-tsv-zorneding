import React from "react";
import { Wrapper } from "./style";
import { ThemeProvider } from "emotion-theming";
import theme from "../../../theme";

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <p className="copyright">
          © {new Date().getFullYear()} - TSV Zorneding
        </p>
        <p>
          <a
            href="https://www.tsv-zorneding.de/impressum"
            target="_blank"
            rel="noopener noreferrer"
          >
            Impressum
          </a>{" "}
          -{" "}
          <a
            href="https://www.tsv-zorneding.de/datenschutz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutzerklärung
          </a>
        </p>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Footer;
