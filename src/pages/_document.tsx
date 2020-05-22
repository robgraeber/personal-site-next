import Document, { Html, Head, Main, NextScript } from 'next/document';

// Global document class
// Added lang attribute to <html lang="en">
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
