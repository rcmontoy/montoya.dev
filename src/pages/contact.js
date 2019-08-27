import React from 'react';
import { OutboundLink } from 'gatsby-plugin-gtag';
import { graphql, useStaticQuery } from 'gatsby';
import GitHubButton from 'react-github-btn';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import styles from './contact.module.css';

const ContactPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            email
            github
            linkedin
          }
        }
      }
    `,
  );

  const { siteMetadata } = site;

  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Stay in Touch</h1>
      <p className={styles.sayHello}>{'Don\'t hesitate to reach out and say hello!'}</p>

      <GitHubButton
        href={`https://github.com/${siteMetadata.github}`}
        data-size="large"
        aria-label={`Follow @${siteMetadata.github} on GitHub`}
      >
        Follow @
        {siteMetadata.github}
      </GitHubButton>

      <ul className={styles.links}>
        <li>
          <OutboundLink href={`mailto:${siteMetadata.email}?subject=Hello`}>
            Email
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href={`https://www.linkedin.com/in/${siteMetadata.linkedin}/`}>
            LinkedIn
          </OutboundLink>
        </li>
      </ul>
    </Layout>
  );
};

export default ContactPage;
