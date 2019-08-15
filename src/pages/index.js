import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Ryan Montoya</h1>
    <p>
      {'Building a marketplace for ILS @ '}
      <a href="https://ledgerinvesting.com">Ledger Investing</a>
    </p>
  </Layout>
);

export default IndexPage;
