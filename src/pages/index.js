import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-gtag';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
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
      <SEO title="Home" />
      <h1>Ryan Montoya</h1>
      <p>
        {'Building a marketplace for insurance linked securities (ILS) @ '}
        <a href="https://ledgerinvesting.com">Ledger Investing</a>
      </p>

      <h3>Links</h3>
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

export default IndexPage;
