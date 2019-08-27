import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import styles from './index.module.css';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PostList from '../components/PostList';

const convertEdgesToPosts = (edges) => edges.map((edge) => edge.node);

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              id
              excerpt(pruneLength: 250)
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
              }
            }
          }
        }
      }
    `,
  );

  const { edges } = allMarkdownRemark;
  const posts = convertEdgesToPosts(edges);

  return (
    <Layout>
      <SEO title="Home" />
      <div className={styles.hero}>
        <h1 className={styles.headline}>{'Hi, I\'m Ryan'}</h1>
        <p className={styles.intro}>
          {`I share my love for writing software, great products, and technology with 
          in-depth articles and detailed tutorials.`}
        </p>
        <PostList posts={posts} />
      </div>
    </Layout>
  );
};

export default IndexPage;
