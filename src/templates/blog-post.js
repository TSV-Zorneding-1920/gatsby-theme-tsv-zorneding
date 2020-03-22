import React from "react";
import { kebabCase } from "lodash";
import Content from "../components/content";
import TeaserList from "../components/teaser-list";
import PreviewCompatibleImage from "../components/preview-compatible-image";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { H1, H2, H4 } from "../components/globals";

const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  slug,
  date,
  featuredimage,
  author
}) => {
  const PostContent = contentComponent || Content;
  return (
    <section>
      <header className="main">
        <H1>{title}</H1>
      </header>
      <span className="image object main">
        <PreviewCompatibleImage
          imageInfo={{
            image: featuredimage,
            alt: `featured image thumbnail for post ${title}`
          }}
        />
      </span>
      <PostContent content={content} />
      <i>Veröffentlicht am {author ? `${date} von ${author}` : `${date}`}</i>
      <hr />

      {tags && tags.length ? (
        <>
          <H2>Mehr zum Thema</H2>
          <TeaserList offset={0} count={6} tags={tags} slug={slug} />
          <hr />
          <H4>Schlagwörter:</H4>
          <ul className="taglist">
            {tags.map(tag => (
              <li key={tag + `tag`}>
                <Link to={`/tag/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  tags: PropTypes.array,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  featuredimage: PropTypes.object,
  author: PropTypes.string
};

export default BlogPostTemplate;
