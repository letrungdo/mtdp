import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="vi">
        <Head>
          <meta
            name="title"
            content="Xây dựng Mai Thạch Đại Phát"
          />
          <meta
            name="description"
            content="Xây dựng Mai Thạch Đại Phát chuyên xây nhà thô, xây nhà phố, xây nhà cho thuê, văn phòng cần sửa chữa cải tạo, thay đổi công năng..."
          />
          <link rel="icon" href="/favicon.png" />
          <link
            href="https://kit-pro.fontawesome.com/releases/v5.13.0/css/pro.min.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
          <link href="/assets/css/elegant-icon.css" rel="stylesheet" />
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
