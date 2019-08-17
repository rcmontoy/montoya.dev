import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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
        <li><a href={`mailto:${site.siteMetadata.email}?subject=Hello`}>Email</a></li>
        <li><a href={`https://github.com/${site.siteMetadata.github}`}>GitHub</a></li>
        <li><a href={`https://www.linkedin.com/in/${site.siteMetadata.linkedin}/`}>LinkedIn</a></li>
      </ul>
    </Layout>
  );
};

export default IndexPage;
