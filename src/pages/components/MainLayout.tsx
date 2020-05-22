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
            line-height: 1em;
            margin-top: 4px;
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
            padding: 84px 0 192px;
          }

          @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
            /* For mobile phones: */
            main {
              padding: 20px 0 150px;
            }

            header {
              padding-top: 30px;
            }

            header ul {
              float: none;
            }

            .container {
              padding: 0 20px;
            }

            header li:first-of-type {
              margin-bottom: 10px;
            }
          }
        `}
      </style>
      <style jsx global>
        {`
          html {
            height: 100%;
          }
          body {
            background: #000 url(${require('public/img/background.jpg')}) no-repeat center top;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
              'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            font-size: 12px;
            font-weight: 300;
            min-height: 100%;
            position: relative;
            text-size-adjust: 100%;
          }

          /* Reset some styles */
          a {
            display: inline-block;
            text-decoration: none;
            color: inherit;
          }
          button {
            border: 0;
            outline: none;
          }
          /* Smartphones (portrait) ----------- */
          @media only screen and (max-width: 320px) {
            body {
              font-size: 10px;
            }
          }
        `}
      </style>
      <style jsx global>
        {`
          .page {
            background-color: rgb(234, 238, 246);
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
            box-sizing: border-box;
            display: inline-block;
            padding: 35px 38px 40px;
            text-align: left;
            width: 100%;
            .page-image {
              display: inline-block;
              float: left;
              margin-right: 42px;
              img {
                box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
                border: 1px solid #3c6265;
                display: block;
                height: auto;
                max-width: 100%;
              }
            }
            .contents {
              display: inline-block;
              text-align: left;
              vertical-align: top;
              width: 100%;
            }
            h1 {
              display: inline-block;
              font-size: 2.66em;
              font-weight: 400;
              line-height: 1.2em;
              margin-bottom: 24px;
            }
            h2 {
              font-size: 1.75em;
              line-height: 1.3em;
              margin-bottom: 15px;
            }
            h4 {
              font-size: 1.3em;
              line-height: 1em;
              margin-bottom: 5px;
            }
            textarea {
              border: 1px solid #cccccc;
              font-size: 1.15em;
              font-weight: 400;
              padding: 4px;
              box-sizing: border-box;
              width: 100%;
              max-width: 276px;
              margin-bottom: 12px;
            }
            input {
              border: 1px solid #cccccc;
              font-size: 1.15em;
              font-weight: 400;
              padding: 4px;
              box-sizing: border-box;
              width: 100%;
              max-width: 276px;
              margin-bottom: 12px;
              height: 28px;
            }
            p {
              font-size: 1.4em;
              margin-bottom: 17px;
              line-height: 1.3em;
              &:last-child {
                margin: 0;
              }
            }
            a {
              font-weight: 400;
              text-decoration: underline;
            }
            b {
              font-weight: 400;
            }
          }
          .cta-btn {
            background-color: #00cc66;
            border-radius: 3px;
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.68);
            color: #f5f8ff;
            font-size: 1.33em;
            font-weight: 400;
            padding: 12px;
            margin-top: 1em;
            text-decoration: none !important;
            &:active {
              box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
              position: relative;
              top: 1px;
            }
          }

          @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
            /* For mobile phones: */
            .page .page-image {
              float: none;
              background-color: initial;
              width: 100%;
            }

            .mobile-block {
              display: block;
            }
          }
        `}
      </style>
    </>
  );
};

export default MainLayout;
