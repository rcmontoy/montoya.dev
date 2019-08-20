import React from 'react';
import { Link } from 'gatsby';

const PostList = ({ posts }) => (
  <ul>
    {posts.map((post) => {
      const { frontmatter: { date, path, title } } = post;
      return (
        <li key={path}>
          {date}
          {' - '}
          <Link to={path} key={title}>
            {title}
          </Link>
        </li>
      );
    })}
  </ul>
);

export default PostList;
