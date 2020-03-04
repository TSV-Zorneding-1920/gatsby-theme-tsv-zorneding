import React from "react";
import PropTypes from "prop-types";
import BannerList from "./sections/banner-list";
import Banner from "./sections/banner";
import { graphql } from "gatsby";
import Contact from "./sections/contact";
import Body from "./sections/body";
import IFrame from "./sections/iframe";
import Carousel from "./sections/carousel";
import IconList from "./sections/icon-list";
import LinkList from "./sections/link-list";
import FileList from "./sections/file-list";
import ImageTextSmall from "./sections/image-text-small";
import Image from "./sections/image";
import TeaserList from "./sections/teaser-list";
import ImageText from "./sections/image-text";

const Sections = ({ sections, admin }) => {
  if (!sections) {
    return <></>;
  }
  const content = sections.map(function(section, i) {
    if (section.type === "body") {
      return <Body key={i} {...section} />;
    }
    if (section.type === "iframe") {
      return <IFrame key={i} {...section} />;
    }
    if (section.type === "carousel") {
      return <Carousel key={i} {...section} />;
    }
    if (section.type === "teaser_list") {
      return <TeaserList key={i} {...section} admin={admin} />;
    }
    if (section.type === "banner") {
      return <Banner key={i} {...section} />;
    }
    if (section.type === "banner_list") {
      return <BannerList key={i} {...section} admin={admin} />;
    }
    if (section.type === "image") {
      return <Image key={i} {...section} />;
    }
    if (section.type === "icon_list") {
      return <IconList key={i} {...section} />;
    }
    if (section.type === "contact") {
      return <Contact key={i} {...section} />;
    }
    if (section.type === "image_text_small") {
      return <ImageTextSmall key={i} {...section} />;
    }
    if (section.type === "image_text") {
      return <ImageText key={i} {...section} />;
    }
    if (section.type === "link_list") {
      return <LinkList key={i} {...section} />;
    }
    if (section.type === "file_list") {
      return <FileList key={i} {...section} />;
    }
    return <></>;
  });
  return <>{content}</>;
};

Sections.propTypes = {
  sections: PropTypes.array.isRequired
};

export default Sections;

export const query = graphql`
  fragment SectionsFragment on MarkdownRemarkFrontmatter {
    ...SectionBodyFragment
    ...SectionBannerFragment
    ...SectionCarouselFragment
    ...SectionContactFragment
    ...SectionIFrameFragment
    ...SectionIconListFragment
    ...SectionLinkListFragment
    ...SectionImageTextSmallFragment
    ...SectionImageFragment
    ...SectionTeaserListFragment
    ...SectionBannerListFragment
    ...SectionImageTextFragment
    ...SectionFileListFragment
    sections {
      type
    }
  }
`;
