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
      <div className="page-image">
        <div className="image-wrapper">
          <picture>
            <source
              srcSet={`${require('public/img/profile-v2.jpg?webp')}, ${require('public/img/profile-v2@2x.jpg?webp')} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${require('public/img/profile-v2.jpg')}, ${require('public/img/profile-v2@2x.jpg')} 2x`}
              type="image/jpeg"
            />
            <img src={require('public/img/profile-v2.jpg')} alt="" />
          </picture>
        </div>
      </div>
      <div className="info-contents">
        <h1 className="name">Rob Graeber</h1>
        <h2 className="current-title">
          <span className="responsive-block">Currently: </span>
          Software Engineer{' '}
          <span className="inline-block">
            @{' '}
            <a className="job-title" href="https://about.linkedin.com/">
              LinkedIn
            </a>
          </span>
        </h2>
        <h2>
          <span className="responsive-block">Formerly: </span>
          Founder / Developer{' '}
          <span className="inline-block">
            @{' '}
            <a className="job-title" href="http://www.effinggames.com">
              Effing Games
            </a>
          </span>
        </h2>
        <div>
          <Link href="/contact">
            <a className="cta-btn">Contact Me</a>
          </Link>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        h1 {
          margin-top: 4px;
        }
        h2 {
          margin-top: 5px;
        }
        .job-title {
          font-weight: 600;
        }
        .current-title {
          padding-right: 64px;
        }

        .contents {
          display: flex;
        }

        .page-image {
          margin-right: 42px;
          vertical-align: top;
          flex-basis: 227px;
          position: relative;
          .image-wrapper {
            background: rgba(0, 0, 0, 0.03);
            position: relative;
            height: 0;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
            border: 1px solid #3c6265;
            // Use padding offset workaround for responsive image default sizing
            padding-top: calc(#{205px / 225px * 100%} - 2px);
            img {
              box-sizing: border-box;
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: auto;
            }
          }
        }
        .info-contents {
          flex-grow: 1;
        }

        @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
          /* For mobile phones: */
          h1.name {
            margin: 25px 0 15px;
          }
          .contents {
            flex-direction: column;
          }
          .page-image {
            margin-right: 0;
            flex-basis: 0;
            max-width: 300px;
            left: 50%;
            transform: translateX(-50%);
          }
          .current-title {
            padding-right: 0;
          }
        }

        @media only screen and (max-width: 870px) {
          .responsive-block {
            display: block;
          }
        }
      `}
    </style>
  </>
);

export default IndexPage;
