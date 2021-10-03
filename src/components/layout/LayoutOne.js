import React from "react";
import Head from "next/head";
import { BackTop } from "antd";

import HeaderTwo from "../header/HeaderTwo";
import Footer from "../footer/Footer";
import withHeaderScroll from "../../common/withHeaderScroll";

const ScrolledHeader = withHeaderScroll(HeaderTwo);

function LayoutOne({ title, children, headerClass, footerClass, containerFluid }) {
  return (
    <>
      <Head>
        <title>{title} - Mai Thạch Đại Phát</title>
      </Head>
      <ScrolledHeader className={headerClass} containerFluid={containerFluid} />
      {children}
      <Footer className={footerClass} />
      <BackTop />
    </>
  );
}

export default React.memo(LayoutOne);
