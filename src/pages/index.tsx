import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { MOBILE_BREAKPOINT } from 'src/Constants';

const IndexPage = () => (
  <>
    <NextSeo
      title="Rob Graeber | Official Website"
      description="Rob Graeber is a San Francisco-based software engineer, entrepreneur, and creator of awesome iPhone games like Effing Worms, Stick Blender, and more."
    />
    <div className="contents">
      <span className="page-image">
        <picture>
          <source
            srcSet={`${require('public/img/profile-v2.jpg?webp')}, ${require('public/img/profile-v2@2x.jpg?webp')} 2x`}
            type="image/webp"
          />
          <source
            srcSet={`${require('public/img/profile-v2.jpg')}, ${require('public/img/profile-v2@2x.jpg')} 2x`}
            type="image/jpeg"
          />
          <img src={require('public/img/profile-v2.jpg')} alt="" width="225" height="205" />
        </picture>
      </span>
      <h1>Rob Graeber</h1>
      <h2>
        <span className="mobile-block">Currently: </span>
        Software Engineer @ <a href="https://about.linkedin.com/">LinkedIn</a>
      </h2>
      <h2>
        <span className="mobile-block">Formerly: </span>
        Founder/Developer @ <a href="http://www.effinggames.com">Effing Games</a>
      </h2>
      <div>
        <Link href="/contact">
          <a className="cta-btn">Contact Me</a>
        </Link>
      </div>
    </div>
    <style jsx>
      {`
        h2 {
          margin-top: 5px;
        }

        @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
          /* For mobile phones: */
          h1,
          h2 {
            display: block;
          }
          h1 {
            margin-top: 20px;
          }
        }
      `}
    </style>
  </>
);

export default IndexPage;
