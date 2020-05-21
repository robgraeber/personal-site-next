import Layout from './components/Layout';
import Link from 'next/link';

const IndexPage = () => (
  <Layout title="Rob Graeber | Official Website">
    <div className="contents">
      <span className="pageImage">
        <img src="/img/profile.png" alt="Profile Image" />
      </span>
      <h1>Rob Graeber</h1>
      <h2>
        Currently: Software Engineer @ <a href="https://about.linkedin.com/">LinkedIn</a>
      </h2>
      <h2>
        Formerly: Founder/Developer @ <a href="http://www.effinggames.com">Effing Games</a>
      </h2>
      <Link href="/contact">
        <a className="ctaBtn">Contact Me</a>
      </Link>
    </div>

    <style jsx>{`
      h2 {
        margin-top: 0.15em;
      }
    `}</style>
  </Layout>
);

export default IndexPage;
