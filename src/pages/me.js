import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

import styles from './me.module.css';

const AboutPage = () => (
  <Layout>
    <SEO title="About me" />
    <h1>Hello, I’m Ryan.</h1>

    <p className={styles.text}>
      {'I’m a software engineer building a marketplace for insurance linked securities at '}
      <a href="https://www.ledgerinvesting.com">Ledger Investing</a>
      {'. During my free time, I enjoy staying up to date with the latest software trends, casually playing '}
      <a href="https://fortnitetracker.com/profile/pc/Rickl_Pick">Fortnite</a>
      {', taking photos, and spending time with my lovely wife.'}
    </p>

    <p className={styles.text}>
      {`I love exploring and geeking out on things. Anything from tech and audio gear to the
        stock market market to denim jackets and sewing. Because of this, I spend a lot of time and
        effort thinking about, researching, and evaluating the things that I do and use in my life.
        I’d love to share some of things that I’m interested in through candid, no bullshit articles.
        Cheers if you’re still reading this and don’t hesitate to say hi! 🍻`}
    </p>
  </Layout>
);

export default AboutPage;
