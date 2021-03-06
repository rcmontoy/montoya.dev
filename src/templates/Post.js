import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import styles from './Post.module.css';
import SEO from '../components/SEO';

const Post = ({ data }) => {
  const { markdownRemark } = data;
  const {
    html,
    excerpt,
    frontmatter,
  } = markdownRemark;

  return (
    <Layout>
      <SEO title={frontmatter.title} description={excerpt} blogPost />
      <div>
        <h1 className={styles.title}>{frontmatter.title}</h1>
        <p className={styles.date}>{frontmatter.date}</p>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

export default Post;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
