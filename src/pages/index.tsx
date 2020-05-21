import Link from 'next/link';
import Layout from './components/Layout';

const IndexPage = () => (
  <Layout
    title="Rob Graeber | Official Website"
    description="Rob Graeber is a San Francisco-based software engineer, entrepreneur, and creator of awesome iPhone games like Effing Worms, Stick Blender, and more."
  >
    <div className="contents">
      <span className="pageImage">
        <picture>
          <source srcSet={require('public/img/profile.png?webp')} type="image/webp" />
          <source srcSet={require('public/img/profile.png')} type="image/jpeg" />
          <img src={require('public/img/profile.png')} alt="" />
        </picture>
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

    <style jsx>
      {`
        h2 {
          margin-top: 0.15em;
        }
      `}
    </style>
  </Layout>
);

export default IndexPage;
