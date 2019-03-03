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
          <link rel="Site Icon" href="/static/images/logo/16.png" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500" rel="stylesheet" />
          <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" rel="preconnect" crossOrigin />
          <meta name="google-site-verification" content="yb_-bhUcnoxh94uAQhPLDK-a1Gt7a9KHiZsGEHYXwqI" />
          <title>Max Freundlich - Full Stack Developer</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}