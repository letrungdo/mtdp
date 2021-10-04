import Head from "next/head";
import React, { useEffect } from "react";
import LayoutOne from "../components/layout/LayoutOne";
import Container from "../components/other/Container";
import FieldActivity from "../components/other/FieldActivity";
import DowOne from "../components/sections/dale-of-week/DowOne";
import DowTwo from "../components/sections/dale-of-week/DowTwo";
import HeroSliderOne from "../components/sections/hero-slider/HeroSliderOne";
import IntroductionFour from "../components/sections/introduction/IntroductionFour";
import IntroductionTwo from "../components/sections/introduction/IntroductionTwo";
import companyInfo from "../data/company-info.json";

export default function Home() {
  useEffect(() => {
    import("scrollreveal").then((m) => {
      const scrollReveal = m.default;
      scrollReveal().reveal(".sanim", {
        delay: 200,
        distance: "30px",
        origin: "bottom",
        duration: 1000,
        interval: 50,
      });
    });
  }, []);
  return (
    <LayoutOne title="Trang chủ">
      <Head>
        <meta name="title" content="Xây dựng Mai Thạch Đại Phát" />
        <meta
          name="description"
          content="Xây dựng Mai Thạch Đại Phát chuyên xây nhà thô, xây nhà phố, xây nhà cho thuê, văn phòng cần sửa chữa cải tạo, thay đổi công năng..."
        />
        <meta
          name="image"
          content={`${process.env.PUBLIC_URL}/assets/images/thumbnail.jpg`}
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/assets/images/thumbnail.jpg`}
        />
        <meta property="og:title" content="Xây dựng Mai Thạch Đại Phát" />
        <meta
          property="og:description"
          content="Xây dựng Mai Thạch Đại Phát chuyên xây nhà thô, xây nhà phố, xây nhà cho thuê, văn phòng cần sửa chữa cải tạo, thay đổi công năng..."
        />
        <meta property="og:url" content={process.env.PUBLIC_URL} />
      </Head>
      <HeroSliderOne data={companyInfo.slider} />
      <IntroductionTwo />
      <Container>
        <FieldActivity />
      </Container>
      <DowTwo countdownLast={100000000} />
      <Container fluid>
        <DowOne data={companyInfo.introduction.one} countdownLast={100000000} />
      </Container>
      <IntroductionFour />
    </LayoutOne>
  );
}
