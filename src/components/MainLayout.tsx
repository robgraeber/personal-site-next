import * as React from 'react';
import Link from 'next/link';
import { MOBILE_BREAKPOINT } from 'src/Constants';

type Props = {
  title?: string;
  description?: string;
};

function getCurrentYear(): number {
  return new Date().getFullYear();
}

const MainLayout: React.FunctionComponent<Props> = function ({ children }) {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <h3>
              <Link href="/">
                <a>Rob Graeber</a>
              </Link>
            </h3>
            <ul>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>{' '}
              <li>
                <a href="https://www.linkedin.com/in/robgraeber">LinkedIn</a>
              </li>{' '}
              <li>
                <a href="https://www.effinggames.com">Effing Games</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="page">{children}</div>
        </div>
      </main>
      <footer>
        <div className="container">
          <p>© {getCurrentYear()} Rob Graeber. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>
        {`
          header {
            background-color: rgba(0, 0, 0, 0.7);
            box-sizing: border-box;
            color: #fff;
            min-height: 115px;
            padding: 45px 0 20px;
            position: relative;
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.65);
            overflow: hidden;
          }
          header h3 {
            font-size: 2.66em;
            margin-bottom: 20px;
            margin-right: 10px;
            display: inline-block;
          }
          header ul {
            float: right;
            font-size: 1.9em;
            line-height: 1.2em;
            margin-top: 4px;
            white-space: nowrap;
            overflow: auto;
          }
          header li {
            display: inline-block;
            margin-right: 1em;
          }
          header li:last-of-type {
            margin-right: 0;
          }

          .container {
            box-sizing: border-box;
            margin: 0 auto;
            padding: 0 40px;
            padding-left: calc(40px + env(safe-area-inset-left));
            padding-right: calc(40px + env(safe-area-inset-right));
            max-width: 940px;
          }

          footer {
            background-color: rgba(0, 0, 0, 0.7);
            bottom: 0;
            box-sizing: border-box;
            color: #fff;
            min-height: 85px;
            padding-top: 36px;
            position: absolute;
            text-align: center;
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.65);
            width: 100%;
          }
          footer p {
            font-size: 1.33em;
          }

          main {
            color: #333;
            padding: 54px 0 192px;
          }

          @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
            /* For mobile phones: */
            main {
              padding: 0;

              .container {
                padding: 0;
              }
            }

            header {
              padding-top: 30px;

              li:first-of-type {
                margin-bottom: 10px;
              }
            }

            header ul {
              float: none;
            }

            footer {
              position: static;
            }

            .container {
              padding: 0 20px;
            }
          }
        `}
      </style>
      <style jsx global>
        {`
          @import './node_modules/reset-css/sass/reset';

          /* Reset some additional styles */
          a {
            display: inline-block;
            text-decoration: none;
            color: inherit;
          }
          button {
            border: 0;
            outline: none;
          }
          /* Fonts from https://google-webfonts-helper.herokuapp.com/fonts/roboto */
          /* Removed local() from sources */
          /* roboto-300 - latin */
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 300;
            src: url(${require('public/fonts/roboto-v20-latin-300.woff2')}) format('woff2'),
              url(${require('public/fonts/roboto-v20-latin-300.woff')}) format('woff');
          }
          /* roboto-regular - latin */
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            src: url(${require('public/fonts/roboto-v20-latin-regular.woff2')}) format('woff2'),
              url(${require('public/fonts/roboto-v20-latin-regular.woff')}) format('woff');
          }
          /* roboto-500 - latin */
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            src: url(${require('public/fonts/roboto-v20-latin-500.woff2')}) format('woff2'),
              url(${require('public/fonts/roboto-v20-latin-500.woff')}) format('woff');
          }
          /* roboto-700 - latin */
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            src: url(${require('public/fonts/roboto-v20-latin-700.woff2')}) format('woff2'),
              url(${require('public/fonts/roboto-v20-latin-700.woff')}) format('woff');
          }
          /* source-serif-pro-regular - latin */
          @font-face {
            font-family: 'Source Serif Pro';
            font-style: normal;
            font-weight: 400;
            src: local('Source Serif Pro'), local('SourceSerifPro-Regular'),
              url(${require('public/fonts/source-serif-pro-v7-latin-regular.woff2')})
                format('woff2'),
              url(${require('public/fonts/source-serif-pro-v7-latin-regular.woff')}) format('woff');
          }
          /* source-serif-pro-700 - latin */
          @font-face {
            font-family: 'Source Serif Pro';
            font-style: normal;
            font-weight: 700;
            src: local('Source Serif Pro Bold'), local('SourceSerifPro-Bold'),
              url(${require('public/fonts/source-serif-pro-v7-latin-700.woff2')}) format('woff2'),
              url(${require('public/fonts/source-serif-pro-v7-latin-700.woff')}) format('woff');
          }
          /* source-serif-pro-600 - latin */
          @font-face {
            font-family: 'Source Serif Pro';
            font-style: normal;
            font-weight: 600;
            src: local('Source Serif Pro Semibold'), local('SourceSerifPro-Semibold'),
              url(${require('public/fonts/source-serif-pro-v7-latin-600.woff2')}) format('woff2'),
              url(${require('public/fonts/source-serif-pro-v7-latin-600.woff')}) format('woff');
          }

          html {
            height: 100%;
          }
          body {
            background: #000 url(${require('public/img/background.jpg')}) no-repeat center top;
            font-family: Roboto, Arial, sans-serif;
            font-size: 12px;
            font-weight: 300;
            min-height: 100%;
            position: relative;
            text-size-adjust: 100%;
          }

          @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
            body {
              background: #000;
              font-size: 11.5px;
            }
          }
          @media only screen and (max-width: 320px) {
            /* Smartphones (portrait) */
            body {
              font-size: 10px;
            }
          }

          .page {
            background-color: rgb(234, 238, 246);
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
            box-sizing: border-box;
            display: inline-block;
            padding: 35px;
            text-align: left;
            font-family: 'Source Serif Pro', Georgia, serif;
            font-weight: 400;
            width: 100%;
            h1 {
              display: inline-block;
              font-size: 2.66em;
              line-height: 1.3em;
              margin-bottom: 22px;
            }
            h1::first-line {
              line-height: 1em;
            }
            h2 {
              font-size: 1.75em;
              line-height: 1.3em;
              margin-bottom: 15px;
            }
            p {
              font-size: 1.5em;
              margin-bottom: 1em;
              line-height: 1.5em;
              &:last-child {
                margin: 0;
              }
            }
            a {
              font-weight: 700;
              text-decoration: underline;
            }
            b {
              font-weight: 700;
            }
            .cta-btn {
              background-color: #00cc66;
              border-radius: 3px;
              box-shadow: 0 1px 1px rgba(0, 0, 0, 0.68);
              color: #f5f8ff;
              font-size: 1.33em;
              font-weight: 400;
              font-family: Roboto, Arial, sans-serif;
              padding: 12px 14px;
              margin-top: 16px;
              text-decoration: none !important;
              &:active {
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
                position: relative;
                top: 1px;
              }
            }
          }
          .inline-block {
            display: inline-block;
          }

          @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
            .mobile-full-width {
              // Workaround to increase specificity
              &#{&} {
                width: 100%;
              }
            }
            .page {
              padding: 30px 20px;
              p {
                line-height: 1.6em;
                font-size: 1.54em;
              }
            }
          }
        `}
      </style>
    </>
  );
};

export default MainLayout;
