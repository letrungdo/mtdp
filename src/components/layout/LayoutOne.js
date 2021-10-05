import { BackTop } from "antd";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import Footer from "../footer/Footer";

const HeaderTwo = dynamic(import("../header/HeaderTwo"));

function LayoutOne({
  title,
  children,
  headerClass,
  footerClass,
  containerFluid,
}) {
  return (
    <>
      <Head>
        <title>{title} - Mai Thạch Đại Phát</title>
      </Head>
      <HeaderTwo className={headerClass} containerFluid={containerFluid} />
      {children}
      <Footer className={footerClass} />
      <BackTop />
    </>
  );
}

export default React.memo(LayoutOne);
