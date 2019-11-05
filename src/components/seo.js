/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import favicon16 from "../../img/favicon-16x16.png";
import favicon32 from "../../img/favicon-32x32.png";
import logo from "../../img/logo.png";

function SEO({ description, template, meta, title, slug, image, date }) {
  image = image || logo;

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: site.siteMetadata.siteUrl,
      name: title,
      publisher: {
        "@type": "Organization",
        name: site.siteMetadata.author
      }
    }
  ];

  if (template === "post") {
    schemaOrgJSONLD.push(
      {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": `${site.siteMetadata.siteUrl}${slug}`,
              name: title,
              image: `${site.siteMetadata.siteUrl}${image}`
            }
          }
        ]
      },
      {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        url: `${site.siteMetadata.siteUrl}${slug}`,
        headline: title,
        publisher: {
          "@type": "Organization",
          name: "TSV Zorneding 1920 e.V.",
          logo: {
            "@type": "ImageObject",
            url: `${site.siteMetadata.siteUrl}${logo}`
          }
        },
        image: {
          "@type": "ImageObject",
          url: `${site.siteMetadata.siteUrl}${image}`
        },
        description,
        author: {
          "@type": "Organization",
          name: "TSV Zorneding 1920 e.V."
        },
        datePublished: date
      }
    );
  }

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: `de`
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
      link={[
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: `${favicon16}`
        },
        { rel: "icon", type: "image/png", sizes: "32x32", href: `${favicon32}` }
      ]}
    >
      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  );
}

SEO.defaultProps = {
  template: `static`,
  meta: [],
  description: ``,
  image: logo,
  slug: ``
};

SEO.propTypes = {
  description: PropTypes.string,
  template: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  slug: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string
};

export default SEO;
