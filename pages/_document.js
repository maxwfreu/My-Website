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
            content="Max Freundlich - Full Stack Developer"
          />
          <meta name="theme-color" content="#121212" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="Site Icon" href="/static/images/logo/16.ico" />
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