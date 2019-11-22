import React from "react";
import PropTypes from "prop-types";
import TeaserList from "./teaser-list";
import BannerList from "./banner-list";
import PreviewCompatibleImage from "./preview-compatible-image";
import { MarkdownContent } from "./content";
import { graphql } from "gatsby";
import Contact from "../components/contact";
import Body from "./sections/body";
import IFrame from "./sections/iframe";
import Carousel from "./sections/carousel";

const Sections = ({ sections }) => {
  if (!sections) {
    return <></>;
  }
  const content = sections.map(function(section, i) {
    if (section.type === "body") {
      return <Body content={section.body} key={i} />;
    }

    if (section.type === "iframe") {
      return <IFrame html={section.html} key={i} />;
    }

    if (section.type === "carousel") {
      return <Carousel images={section.images} key={i} />;
    }

    if (section.type === "teaser_list") {
      return (
        <div key={i}>
          <TeaserList
            offset={section.offset}
            count={section.count}
            tags={section.tags}
          />
          <hr className="major"></hr>
        </div>
      );
    }

    if (section.type === "banner") {
      return (
        <div key={i}>
          <BannerList offset={section.offset} />
          <hr className="major"></hr>
        </div>
      );
    }

    if (section.type === "image") {
      return (
        <div key={i}>
          <PreviewCompatibleImage
            imageInfo={{
              image: section.image,
              alt: `featured image thumbnail for post`
            }}
          />
          <hr className="major"></hr>
        </div>
      );
    }
    if (section.type === "info") {
      return (
        <div key={i}>
          <header className="major">
            <h2>{section.title}</h2>
          </header>
          <div className="features">
            {section.info.map(function(post, j) {
              return (
                <article key={j}>
                  <span className={post.icon + " icon solid"}></span>
                  <div className="content">
                    <h3>{post.title}</h3>
                    <MarkdownContent content={post.body} />
                  </div>
                </article>
              );
            })}
          </div>
          <hr className="major"></hr>
        </div>
      );
    }
    if (section.type === "contact") {
      return <Contact />;
    }
    if (section.type === "image_text") {
      return (
        <div key={i}>
          <div className="features">
            {section.info.map(function(post, j) {
              return (
                <article key={j}>
                  <span style={{ margin: 10 + "px" }}>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.image_small,
                        alt: `featured image thumbnail for post`
                      }}
                    />
                  </span>

                  <div className="content">
                    <h3>{post.title}</h3>
                    <MarkdownContent content={post.body} />
                  </div>
                </article>
              );
            })}
          </div>
          <hr className="major"></hr>
        </div>
      );
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
    sections {
      body
      count
      offset
      type
      tags
      html
      image {
        childImageSharp {
          fluid(maxWidth: 1180, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      images {
        image {
          childImageSharp {
            thumb: fixed(width: 100, height: 60) {
              src
            }
            orig: fixed(width: 700, height: 400, quality: 100) {
              src
            }
          }
        }
      }
      title
      info {
        body
        icon
        title
        image_small {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;
