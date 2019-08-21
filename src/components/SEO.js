import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';


const SEO = (props) => {
  const {
    description,
    lang,
    meta,
    title,
    blogPost,
  } = props;

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            name
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  // merge with meta passed in as props
  const mergedMeta = [
    {
      name: 'description',
      content: metaDescription,
    },

    /**
     * OpenGraph
     */
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: metaDescription,
    },
    {
      property: 'og:type',
      content: blogPost ? 'article' : 'website',
    },

    /**
     * Twitter
     */
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:creator',
      content: site.siteMetadata.author,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: metaDescription,
    },
  ].concat(meta);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s - ${site.siteMetadata.name}`}
      meta={mergedMeta}
    />
  );
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
  blogPost: false,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  blogPost: PropTypes.bool,
};

export default SEO;
