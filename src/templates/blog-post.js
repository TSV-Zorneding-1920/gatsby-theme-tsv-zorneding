import React from "react";
import { kebabCase } from "lodash";
import Content from "../components/content";
import TeaserList from "../components/teaser-list";
import PreviewCompatibleImage from "../components/preview-compatible-image";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  slug,
  date,
  featuredimage
}) => {
  const PostContent = contentComponent || Content;
  return (
    <section>
      <header className="main">
        <h1>{title}</h1>
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
      <p>{date}</p>
      <hr />

      {tags && tags.length ? (
        <>
          <h2>Mehr zum Thema</h2>
          <TeaserList offset={0} count={6} tags={tags} slug={slug} />
          <hr className="major"></hr>
          <h4>Schlagwörter:</h4>
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
  title: PropTypes.string,
  slug: PropTypes.string,
  date: PropTypes.string,
  featuredimage: PropTypes.object
};

export default BlogPostTemplate;
