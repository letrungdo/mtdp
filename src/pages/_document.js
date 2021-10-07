import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="vi">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <link
            rel="preconnect"
            href="https://kit-pro.fontawesome.com/releases/v5.13.0/css/pro.min.css"
          />
          <link
            rel="preload"
            as="style"
            href="https://kit-pro.fontawesome.com/releases/v5.13.0/css/pro.min.css"
          />
          <link
            href="https://kit-pro.fontawesome.com/releases/v5.13.0/css/pro.min.css"
            rel="stylesheet"
          />
          <link href="/assets/css/slick.min.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <div id="subpages-sidebar" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
