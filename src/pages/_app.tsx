import '../../node_modules/reset-css/reset.css';

interface AppParams {
  Component: any;
  pageProps: any;
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppParams) {
  return <Component {...pageProps} />;
}
