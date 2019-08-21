import { Link } from 'gatsby';
import React from 'react';

import styles from './Header.module.css';

const NAV_LINKS = [
  {
    path: '/blog',
    name: 'Blog',
  },
  {
    path: '/me',
    name: 'Me',
  },
  {
    path: '/contact',
    name: 'Contact',
  },
];

const Header = () => (
  <header className={styles.root}>
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <h1 className={styles.title}>
          <Link to="/" className={styles.titleLink}>
            Ryan Montoya
          </Link>
        </h1>
      </div>
      <div className={styles.links}>
        {NAV_LINKS.map((link) => (
          <Link
            to={link.path}
            key={link.path}
            activeClassName={styles.linkActive}
            className={styles.link}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  </header>
);

export default Header;
