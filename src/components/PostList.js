import React from 'react';
import { Link } from 'gatsby';

const PostList = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <li>
        {post.frontmatter.date}
        {' - '}
        <Link to={post.frontmatter.path} key={post.frontmatter.path}>
          {post.frontmatter.title}
        </Link>
      </li>
    ))}
  </ul>
);

export default PostList;
