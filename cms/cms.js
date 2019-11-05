import CMS from "netlify-cms-app";

import BlogPostPreview from "./preview-templates/BlogPostPreview";
import styles from "!css-loader!sass-loader!./../sass/main.scss";

CMS.registerPreviewStyle(styles.toString(), { raw: true });

CMS.registerPreviewTemplate("blog", BlogPostPreview);
