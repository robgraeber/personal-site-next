/**
 * Global _app.tsx file which manages all the global imports and layouts
 */

// Imports css to reset all elements to standardized styles.
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { useEffect } from 'react';
import { initGA, logPageView } from 'src/utils/AnalyticsHelper';
import Router from 'next/router';
import MainLayout from 'src/components/MainLayout';

interface AppParams {
  Component: any;
  pageProps: any;
}

export default function MyApp({ Component, pageProps }: AppParams) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href={`${require('public/img/favicon.ico')}`}
        />
      </Head>
      <DefaultSeo title="Rob Graeber" />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
