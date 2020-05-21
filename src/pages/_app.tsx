/**
 * Global _app.tsx file which manages all the global imports
 */

// Imports css to reset all elements to standardized styles.
import '../../node_modules/reset-css/reset.css';

interface AppParams {
  Component: any;
  pageProps: any;
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppParams) {
  return <Component {...pageProps} />;
}
