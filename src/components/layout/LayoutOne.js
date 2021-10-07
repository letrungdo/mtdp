import { BackTop } from "antd";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import React from "react";
import Footer from "../footer/Footer";

const HeaderTwo = dynamic(import("../header/HeaderTwo"));

function LayoutOne({
  title,
  children,
  headerClass,
  footerClass,
  containerFluid,
  description,
  ...seo
}) {
  return (
    <>
      <NextSeo title={title} description={description} {...seo} />
      <HeaderTwo className={headerClass} containerFluid={containerFluid} />
      {children}
      <Footer className={footerClass} />
      <BackTop />
    </>
  );
}

export default React.memo(LayoutOne);
