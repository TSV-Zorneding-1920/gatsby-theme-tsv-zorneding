import CMS from "netlify-cms-app";

import BlogPostPreview from "./preview-templates/BlogPostPreview";
import styles from "!css-loader!sass-loader!./../sass/main.scss";
import { de } from "netlify-cms-locales";

import BannerList from "../src/components/sections/banner-list";
import Body from "../src/components/sections/body";
import Carousel from "../src/components/sections/carousel";
import Contact from "../src/components/sections/contact";
import IconList from "../src/components/sections/icon-list";
import IFrame from "../src/components/sections/iframe";
import Image from "../src/components/sections/image";
import ImageText from "../src/components/sections/image-text";
import ImageTextSmall from "../src/components/sections/image-text-small";
import TeaserList from "../src/components/sections/teaser-list";

CMS.registerLocale("de", de);

const staticBlocks = [
  new BannerList().admin(),
  new Body().admin(),
  new Carousel().admin(),
  new Contact().admin(),
  new IconList().admin(),
  new IFrame().admin(),
  new Image().admin(),
  new ImageText().admin(),
  new ImageTextSmall().admin(),
  new TeaserList().admin()
];

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
    locale: "de",
    media_folder: "static/img",
    public_folder: "/img",
    logo_url: "https://angry-galileo-a8762c.netlify.com/icons/icon-144x144.png",
    //display_url: "https://angry-galileo-a8762c.netlify.com",
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
            label: "Teaser Bild",
            name: "featuredimage",
            widget: "image",
            default: "/img/default.jpg"
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
        path: "{{folder}}/{{slug}}",
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
            label: "Folder",
            name: "folder",
            widget: "string",
            default: "/"
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
            label: "Sektionen",
            name: "sections",
            widget: "list",
            types: staticBlocks
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
          /*           {
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
          }, */
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
                        widget: "string"
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
