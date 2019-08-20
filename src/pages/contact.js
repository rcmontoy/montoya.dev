import React from 'react';
import { OutboundLink } from 'gatsby-plugin-gtag';
import { graphql, useStaticQuery } from 'gatsby';

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
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Stay in Touch</h1>
      <p className={styles.sayHello}>{'Don\'t hesitate to reach out and say hello!'}</p>
      <ul>
        <li>
          <OutboundLink href={`mailto:${site.siteMetadata.email}?subject=Hello`}>
            Email
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href={`https://github.com/${site.siteMetadata.github}`}>
            GitHub
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href={`https://www.linkedin.com/in/${site.siteMetadata.linkedin}/`}>
            LinkedIn
          </OutboundLink>
        </li>
      </ul>
    </Layout>
  );
};

export default ContactPage;
