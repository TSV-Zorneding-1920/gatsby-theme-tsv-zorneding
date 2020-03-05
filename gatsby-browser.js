/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import "./../gatsby-theme-tsv-zorneding/sass/main.scss";

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Die Anwendung wurde aktualisiert. ` +
      `Neuladen um die neuste Version anzuzeigen?`
  );
  if (answer === true) {
    window.location.reload();
  }
};
