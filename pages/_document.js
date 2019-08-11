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
          <link rel="icon" sizes="192x192" href="/static/images/logo/192.png" />
          <link rel="apple-touch-icon" href="ios-icon.png" />
          <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap" rel="stylesheet" />
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