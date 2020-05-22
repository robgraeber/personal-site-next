/**
 * Global _app.tsx file which manages all the global imports and layouts
 */

// Imports css to reset all elements to standardized styles.
import 'reset-css/reset.css';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import MainLayout from './components/MainLayout';

interface AppParams {
  Component: any;
  pageProps: any;
}

// This default export is required in a new `pages/_app.tsx` file.
export default function MyApp({ Component, pageProps }: AppParams) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.ico" />
      </Head>
      <DefaultSeo title="Rob Graeber" />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
