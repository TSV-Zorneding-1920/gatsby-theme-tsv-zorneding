import CMS from "netlify-cms-app";

import BlogPostPreview from "./preview-templates/BlogPostPreview";
import styles from "!css-loader!sass-loader!./../sass/main.scss";

CMS.init({
  config: {
    backend: {
      name: "git-gateway",
      branch: "master",
      commit_messages: {
        create: "Create {{collection}} '{{slug}}'",
        update: "Update {{collection}} '{{slug}}'",
        delete: "Delete {{collection}} '{{slug}}'",
        uploadMedia: "[skip ci] Upload '{{path}}'",
        deleteMedia: "[skip ci] Delete '{{path}}'"
      }
    },
    media_folder: "static/img",
    public_folder: "/img",
    logo_url: "https://angry-galileo-a8762c.netlify.com/icons/icon-256x256.png",
    display_url: "https://angry-galileo-a8762c.netlify.com",
    show_preview_links: false,
    collections: [
      {
        name: "blog",
        label: "Blog",
        folder: "src/pages/blog",
        create: true,
        slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
        fields: [
          {
            label: "Template Key",
            name: "templateKey",
            widget: "hidden",
            default: "blog-post"
          },
          {
            label: "Titel",
            name: "title",
            widget: "string"
          },
          {
            label: "Erstellungsdatum",
            name: "date",
            widget: "datetime"
          },
          {
            label: "Oben anpinnen",
            name: "sticky",
            widget: "boolean",
            default: false
          },
          {
            label: "In Seitenleiste anzeigen",
            name: "featured",
            widget: "boolean",
            default: false
          },
          {
            label: "Featured Image",
            name: "featuredimage",
            widget: "image",
            required: false
          },
          {
            label: "Inhalt",
            name: "body",
            widget: "markdown"
          },
          {
            label: "Tags",
            name: "tags",
            widget: "list",
            required: false
          }
        ]
      },
      {
        name: "pages",
        label: "Statische Seiten",
        folder: "src/pages",
        create: true,
        editor: {
          preview: false
        },
        fields: [
          {
            label: "Template Key",
            name: "templateKey",
            widget: "hidden",
            default: "static-page"
          },
          {
            label: "Titel",
            name: "title",
            widget: "string"
          },
          {
            label: "Überschrift anzeigen",
            name: "showTitle",
            widget: "boolean",
            default: true
          },
          {
            label: "Home Section",
            name: "sections",
            widget: "list",
            types: [
              {
                label: "Gallerie",
                name: "carousel",
                widget: "object",
                fields: [
                  {
                    label: "Bilder",
                    name: "images",
                    widget: "list",
                    fields: [
                      {
                        label: "Bild",
                        name: "image",
                        widget: "image"
                      }
                    ]
                  }
                ]
              },
              {
                label: "Bild",
                name: "image",
                widget: "object",
                fields: [
                  {
                    label: "Bild",
                    name: "image",
                    widget: "image"
                  }
                ]
              },
              {
                label: "Inhalt",
                name: "body",
                widget: "object",
                fields: [
                  {
                    label: "Inhalt",
                    name: "body",
                    widget: "markdown"
                  }
                ]
              },
              {
                label: "Banner",
                name: "banner",
                widget: "object",
                fields: [
                  {
                    label: "Offset",
                    name: "offset",
                    widget: "number",
                    default: 0
                  }
                ]
              },
              {
                label: "Blogliste",
                name: "teaser_list",
                widget: "object",
                fields: [
                  {
                    label: "Offset",
                    name: "offset",
                    widget: "number",
                    default: 0
                  },
                  {
                    label: "Count",
                    name: "count",
                    widget: "number",
                    default: 3
                  }
                ]
              },
              {
                label: "iFrame",
                name: "iframe",
                widget: "object",
                fields: [
                  {
                    label: "HTML",
                    name: "html",
                    widget: "text"
                  }
                ]
              },
              {
                label: "Info",
                name: "info",
                widget: "object",
                fields: [
                  {
                    label: "Titel",
                    name: "title",
                    widget: "string"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "settings",
        label: "Einstellungen",
        editor: {
          preview: false
        },
        delete: false,
        files: [
          {
            file: "src/data/events.yml",
            label: "Veranstaltungen",
            name: "events",
            fields: [
              {
                label: "Veranstaltung",
                name: "event_items",
                widget: "list",
                fields: [
                  {
                    label: "Veranstaltung",
                    name: "label",
                    widget: "string"
                  },
                  {
                    label: "Datum",
                    name: "date",
                    widget: "datetime"
                  },
                  {
                    label: "Beschreibung",
                    name: "description",
                    widget: "string"
                  }
                ]
              }
            ]
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
                    widget: "string"
                  },
                  {
                    label: "Seite",
                    name: "page",
                    widget: "string"
                  },
                  {
                    label: "Eintrag",
                    name: "menu_entry",
                    widget: "list",
                    fields: [
                      {
                        label: "Titel",
                        name: "title",
                        widget: "string"
                      },
                      {
                        label: "Seite",
                        name: "page",
                        widget: "relation",
                        collection: "pages",
                        displayFields: ["title"],
                        searchFields: ["title", "slug"],
                        valueField: "slug"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
});

CMS.registerPreviewStyle(styles.toString(), { raw: true });

CMS.registerPreviewTemplate("blog", BlogPostPreview);
