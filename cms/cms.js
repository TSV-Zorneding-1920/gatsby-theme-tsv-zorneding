import CMS from "netlify-cms-app";
import withEmotion from "./with-emotion";

import BlogPostPreview from "./preview-templates/BlogPostPreview";
import StaticPagePreview from "./preview-templates/StaticPagePreview";
import styles from "!css-loader!sass-loader!./../sass/main.scss";
import { de } from "netlify-cms-locales";

import { adminBlocks } from "../src/components/admin-sections";

CMS.registerLocale("de", de);

let config = {
  backend: {
    name: "github",
    branch: "master",
    repo: process.env.GATSBY_GIT_REPO,
    base_url: "https://login.tsv-zorneding.de/",
    commit_messages: {
      create: "Create {{collection}} '{{slug}}'",
      update: "Update {{collection}} '{{slug}}'",
      delete: "Delete {{collection}} '{{slug}}'",
      uploadMedia: "[skip ci] Upload '{{path}}'",
      deleteMedia: "[skip ci] Delete '{{path}}'",
    },
  },
  locale: "de",
  media_folder: "static/img",
  public_folder: "/img",
  logo_url: `${process.env.GATSBY_SITE_URL}/favicons/icon-144x144.png`,
  show_preview_links: false,
  slug: {
    encoding: "ascii",
    clean_accents: true,
  },
  site_url: process.env.GATSBY_SITE_URL,
  collections: [
    {
      name: "blog",
      label: "Blog",
      label_singular: "Blogeintrag",
      folder: "src/pages/blog",
      description:
        "Blogeinträge sind Neuigkeiten, Ankündigungen oder Berichte von Turnieren oder Veranstaltungen. Alles was in eurer Abteilung so passiert.",
      create: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      sortableFields: ["date", "title"],
      fields: [
        {
          label: "Template Key",
          name: "templateKey",
          widget: "hidden",
          default: "blog-post",
        },
        {
          label: "Titel",
          name: "title",
          widget: "string",
        },
        {
          label: "Erstellungsdatum",
          name: "date",
          widget: "datetime",
          dateFormat: "DD.MM.YYYY",
          timeFormat: "HH:mm",
        },
        {
          label: "Oben anpinnen",
          name: "sticky",
          widget: "boolean",
          default: false,
        },
        {
          label: "In Seitenleiste anzeigen",
          name: "featured",
          widget: "boolean",
          default: false,
        },
        {
          label: "Canonical",
          name: "canonical",
          widget: "string",
          required: false,
        },
        {
          label: "Teaser Bild",
          name: "featuredimage",
          widget: "image",
          default: "/img/default.jpg",
        },
        {
          label: "Inhalt",
          name: "body",
          widget: "markdown",
        },
        {
          label: "Tags",
          name: "tags",
          widget: "list",
          required: false,
        },
      ],
    },
    {
      name: "pages",
      label: "Statische Seiten",
      label_singular: "Statische Seite",
      folder: "src/pages",
      create: true,
      description:
        'Statische Seiten sind Seiten welche sich wenig verändern. "Wir über uns", Trainingszeiten oder eure Mannschaften. Statische Seiten werden über "Einstellungen" > "Navigation" in das linke Seitenmenü eingebunden.',
      fields: [
        {
          label: "Template Key",
          name: "templateKey",
          widget: "hidden",
          default: "static-page",
        },
        {
          label: "Titel",
          name: "title",
          widget: "string",
        },
        {
          label: "URL",
          name: "slug",
          widget: "string",
          required: false,
        },
        {
          label: "Überschrift anzeigen",
          name: "showTitle",
          widget: "boolean",
          default: true,
        },
        {
          label: "Sektionen",
          name: "sections",
          widget: "list",
          types: adminBlocks,
        },
      ],
    },
    {
      name: "events",
      label: "Veranstaltungen",
      label_singular: "Veranstaltung",
      folder: "src/data/events",
      extension: "yml",
      create: true,
      editor: {
        preview: false,
      },
      slug: "{{date}}-{{label}}",
      description:
        "Veranstaltungen werden in der rechten Seitenleiste unterhalb der Navigation angezeigt.",
      fields: [
        {
          label: "Veranstaltung",
          name: "label",
          widget: "string",
        },
        {
          label: "Datum",
          name: "date",
          widget: "datetime",
          dateFormat: "DD.MM.YYYY",
          timeFormat: "HH:mm",
        },
        {
          label: "Beschreibung",
          name: "description",
          widget: "string",
          required: false,
        },
      ],
    },
    {
      name: "settings",
      label: "Einstellungen",
      editor: {
        preview: false,
      },
      delete: false,
      files: [
        {
          file: "src/data/settings.json",
          label: "Einstellungen",
          name: "settings",
          fields: [
            {
              label: "Titel",
              name: "title",
              widget: "string",
            },
            {
              label: "Abteilung",
              name: "section",
              widget: "string",
            },
            {
              label: "Beschreibung",
              name: "description",
              widget: "string",
            },
            {
              label: "Bild",
              name: "image",
              widget: "image",
              required: false,
            },
            {
              label: "Author",
              name: "author",
              widget: "string",
            },
            {
              label: "Social Links",
              name: "social",
              widget: "object",
              fields: [
                {
                  label: "Facebook",
                  name: "facebook",
                  widget: "string",
                  required: false,
                },
                {
                  label: "Instagram",
                  name: "instagram",
                  widget: "string",
                  required: false,
                },
                {
                  label: "Twitter",
                  name: "twitter",
                  widget: "string",
                  required: false,
                },
                {
                  label: "YouTube",
                  name: "youtube",
                  widget: "string",
                  required: false,
                },
              ],
            },
          ],
        },
        {
          file: "src/data/menu.yml",
          label: "Navigation",
          name: "menu",
          fields: [
            {
              label: "Eintrag",
              name: "menu_entry",
              widget: "list",
              fields: [
                {
                  label: "Titel",
                  name: "title",
                  widget: "string",
                },
                {
                  label: "Seite",
                  name: "page",
                  widget: "string",
                  required: false,
                },
                {
                  label: "Eintrag",
                  name: "menu_entry",
                  widget: "list",
                  fields: [
                    {
                      label: "Titel",
                      name: "title",
                      widget: "string",
                    },
                    {
                      label: "Seite",
                      name: "page",
                      widget: "string",
                      required: false,
                    },
                    {
                      label: "Eintrag",
                      name: "menu_entry",
                      widget: "list",
                      fields: [
                        {
                          label: "Titel",
                          name: "title",
                          widget: "string",
                        },
                        {
                          label: "Seite",
                          name: "page",
                          widget: "string",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

if (activeEnv === "development") {
  config.local_backend = {
    url: "http://localhost:8000/api/v1",
  };
}

CMS.init({ config });

CMS.registerPreviewStyle(styles.toString(), { raw: true });
CMS.registerPreviewTemplate("blog", withEmotion(BlogPostPreview));
CMS.registerPreviewTemplate("pages", withEmotion(StaticPagePreview));
