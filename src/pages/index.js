import React from 'react';
import GitHubButton from 'react-github-btn';
import { graphql, useStaticQuery } from 'gatsby';

import styles from './index.module.css';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            github
          }
        }
      }
    `,
  );

  const { siteMetadata } = site;

  return (
    <Layout>
      <SEO title="Home" />
      <div className={styles.hero}>
        <h1 className={styles.headline}>{'Hi, I\'m Ryan'}</h1>
        <p className={styles.intro}>
          {'I\'m currently building a marketplace for insurance linked securities at '}
          <a href="https://www.ledgerinvesting.com">Ledger Investing</a>.
          <br />
          {' I enjoy writing software, casually gaming, and taking pictures here and there.'}
        </p>

        <GitHubButton
          href={`https://github.com/${siteMetadata.github}`}
          data-size="large"
          aria-label={`Follow @${siteMetadata.github} on GitHub`}
        >
          Follow @
          {siteMetadata.github}
        </GitHubButton>
      </div>
    </Layout>
  );
};

export default IndexPage;
