import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            hid="description"
            name="description"
            content="Native-like Page Transitions with React and NextJS, A Travel App"
          />
          <meta name="google-site-verification" content="yb_-bhUcnoxh94uAQhPLDK-a1Gt7a9KHiZsGEHYXwqI" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}