import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  title?: string;
};

function getCurrentYear(): number {
  return new Date().getFullYear();
}

const Layout: React.FunctionComponent<Props> = function ({ children, title = 'Default title' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.ico" />
      </Head>
      <div id="header">
        <div className="container">
          <div id="nav">
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
          </div>
        </div>
      </div>
      <div id="main">
        <div className="container">
          <div className="page">{children}</div>
        </div>
      </div>
      <div id="footer">
        <div className="container">
          <p>© {getCurrentYear()} Rob Graeber. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .container {
          box-sizing: border-box;
          margin: 0 auto;
          padding: 0 1.66em;
          width: 78em;
        }

        #header {
          background-color: #000;
          background-color: rgba(0, 0, 0, 0.7);
          box-sizing: border-box;
          color: #fff;
          height: 9.66em;
          padding-top: 3.8em;
          position: relative;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.65);
        }
        #header h3 {
          float: left;
          font-size: 2.66em;
        }
        #header ul {
          float: right;
          font-size: 1.9em;
          line-height: 1em;
          margin-top: 0.1em;
        }
        #header li {
          display: inline-block;
          vertical-align: middle;
        }
        #header li + li {
          margin-left: 1em;
        }

        #footer {
          background-color: #000;
          background-color: rgba(0, 0, 0, 0.7);
          bottom: 0;
          box-sizing: border-box;
          color: #fff;
          height: 7.08em;
          padding-top: 3em;
          position: absolute;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.65);
          width: 100%;
        }
        #footer p {
          font-size: 1.33em;
        }

        #main {
          color: #333;
          padding: 7em 0 16em;
        }
      `}</style>

      <style jsx global>{`
        html {
          height: 100%;
        }
        body {
          background: url('/img/background.jpg') no-repeat center top;
          background-color: #000;
          font-family: roboto, arial, sans-serif;
          font-size: 12px;
          font-weight: 300;
          min-height: 100%;
          min-width: 78em;
          position: relative;
          text-align: center;
          text-size-adjust: 100%;
        }
        a {
          display: inline-block;
          text-decoration: none;
          color: inherit;
        }
        .page {
          background-color: rgb(234, 238, 246);
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
          box-sizing: border-box;
          display: inline-block;
          padding: 3em 3.5em 3.17em;
          text-align: left;
          width: 100%;
        }
        .page .pageImage {
          background-color: #01060f;
          display: inline-block;
          float: left;
          margin-right: 3.5em;
        }
        .page .pageImage img {
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
          border: 1px solid #3c6265;
          display: block;
          min-height: 16.66em;
          width: 18.75em;
        }
        .page .contents {
          display: inline-block;
          text-align: left;
          vertical-align: top;
          width: 100%;
        }
        .page h1 {
          font-size: 2.66em;
          font-weight: 400;
          line-height: 1em;
          margin-bottom: 0.75em;
        }
        .page h2 {
          font-size: 1.73em;
          line-height: 1.3em;
          margin-bottom: 0.7em;
        }
        .page h4 {
          font-size: 1.3em;
          line-height: 1em;
          margin-bottom: 0.4em;
        }
        .page textarea,
        .page input {
          border: 1px solid #cccccc;
          font-size: 1.15em;
          font-weight: 400;
          padding: 0.3em;
          width: 20em;
          margin-bottom: 0.9em;
        }
        .page input {
          height: 2em;
        }
        .page p {
          font-size: 1.4em;
          margin-bottom: 1em;
          line-height: 1.3em;
        }
        .page p:last-child {
          margin: 0;
        }
        .page a {
          font-weight: 400;
          text-decoration: underline;
        }
        .page b {
          font-weight: 400;
        }
        .ctaBtn {
          background-color: #00cc66;
          border-radius: 3px;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.68);
          color: #f5f8ff;
          font-size: 1.33em;
          font-weight: 400;
          padding: 0.7em 0.8em;
          margin-top: 1em;
          text-decoration: none !important;
        }
        .ctaBtn:active {
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
          position: relative;
          top: 1px;
        }
      `}</style>
    </>
  );
};

export default Layout;
