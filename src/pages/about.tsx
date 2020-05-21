import React from 'react';
import Layout from './components/Layout';

const AboutPage = () => (
  <Layout title="About | Rob Graeber">
    <div className="contents">
      <h1>About Rob Graeber</h1>
      <p>
        Rob Graeber is a software engineer and badass game developer. World renown for his
        industry-leading <a href="http://www.effinggames.com/play/effing-worms-2">Effing Worms</a>{' '}
        and <a href="http://www.effinggames.com/play/stick-figure-badminton-2">Stick Badminton</a>{' '}
        franchises, Rob Graeber’s games have received <b>over 500 million plays</b> and received
        countless awards. Developing games since a very young age, Rob Graeber incorporated{' '}
        <a href="http://www.effinggames.com">Effing Games</a> in 2011. Rob Graeber has developed
        over 12 original titles, <b>grossing over $300k</b> while still in college. Ultimately, Rob
        Graeber was awarded a Bachelors of Science; Environmental Economics from{' '}
        <a href="https://en.wikipedia.org/wiki/University_of_California,_Berkeley">UC Berkeley</a>{' '}
        in 2012.
      </p>
      <p>
        Having mastered the gaming industry, Rob Graeber shifted his interests towards tech. In
        2013, Rob Graeber developed{' '}
        <a href="https://github.com/robgraeber/quant-trader">QuantTrader</a>, a Java-based stock
        backtesting and analysis application, to test his personal trading strategies. And when that
        got boring, Rob Graeber enrolled into the{' '}
        <a href="http://www.hackreactor.com/">Hack Reactor</a> curriculum to hone his technical
        skills and work with interesting people. Eventually Rob took a position with{' '}
        <a href="https://www.rallyhealth.com/">Rally Health</a> where he learned to work in a lean
        startup environment and led frontend development on{' '}
        <a href="https://werally.com/">werally.com</a> until their acquistion at a{' '}
        <b>$4 Billion valuation</b>. After that Rob took a position at{' '}
        <a href="https://www.linkedin.com/">LinkedIn</a> where he was in charge of the reporting
        frontend and broadened his experience working in large organizations.
      </p>
    </div>

    <style jsx>{`
      .pageImage {
        margin-right: 2.2em;
      }
    `}</style>
  </Layout>
);

export default AboutPage;
