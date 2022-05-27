import Document, { NextScript, Html, Head, Main } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            href="/favicon-32x32.png"
            type="image/png"
          />
          <meta
            name="description"
            content="Order Summary: You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
