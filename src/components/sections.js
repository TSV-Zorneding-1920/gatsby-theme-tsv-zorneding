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
import ImageTextSmall from "./sections/image-text-small";
import Image from "./sections/image";
import TeaserList from "./sections/teaser-list";
import ImageText from "./sections/image-text";

const Sections = ({ sections }) => {
  if (!sections) {
    return <></>;
  }
  const content = sections.map(function(section, i) {
    if (section.type === "body") {
      return <Body content={section.body} key={i} title={section.title} />;
    }

    if (section.type === "iframe") {
      return <IFrame html={section.html} key={i} title={section.title} />;
    }

    if (section.type === "carousel") {
      return <Carousel images={section.images} key={i} title={section.title} />;
    }

    if (section.type === "teaser_list") {
      return (
        <TeaserList
          key={i}
          offset={section.offset}
          count={section.count}
          tags={section.tags}
          title={section.title}
        />
      );
    }

    if (section.type === "banner") {
      return (
        <Banner
          key={i}
          featuredimage={section.image}
          title={section.title}
          headline={section.headline}
          link={section.link}
          body={section.body}
        />
      );
    }

    if (section.type === "banner_list") {
      return (
        <BannerList
          key={i}
          offset={section.offset}
          count={section.count}
          title={section.title}
        />
      );
    }

    if (section.type === "image") {
      return <Image key={i} image={section.image} title={section.title} />;
    }
    if (section.type === "icon_list") {
      return (
        <IconList key={i} element={section.element} title={section.title} />
      );
    }
    if (section.type === "contact") {
      return <Contact key={i} title={section.title} />;
    }
    if (section.type === "image_text_small") {
      return (
        <ImageTextSmall key={i} info={section.info} title={section.title} />
      );
    }
    if (section.type === "image_text") {
      return <ImageText key={i} nodes={section.nodes} title={section.title} />;
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
    ...SectionImageTextSmallFragment
    ...SectionImageFragment
    ...SectionTeaserListFragment
    ...SectionBannerListFragment
    ...SectionImageTextFragment
    sections {
      type
    }
  }
`;
