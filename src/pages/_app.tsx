/**
 * Global _app.tsx file which manages all the global imports and layouts
 */

// Imports css to reset all elements to standardized styles.
import '../../node_modules/reset-css/reset.css';
import { DefaultSeo } from 'next-seo';
import MainLayout from './components/MainLayout';

interface AppParams {
  Component: any;
  pageProps: any;
}

// This default export is required in a new `pages/_app.tsx` file.
export default function MyApp({ Component, pageProps }: AppParams) {
  return (
    <MainLayout>
      <Component {...pageProps} />
      <DefaultSeo title="Rob Graeber" />
    </MainLayout>
  );
}
