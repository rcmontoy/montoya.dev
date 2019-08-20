import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import PostList from '../components/PostList';
import SEO from '../components/SEO';

const convertEdgesToPosts = (edges) => edges.map((edge) => edge.node);

const Blog = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const posts = convertEdgesToPosts(edges);
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <PostList posts={posts} />
    </Layout>
  );
};

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }).isRequired,
};

export default Blog;

export const pageQuery = graphql`
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
`;
