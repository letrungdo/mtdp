import Head from "next/head";
import React from "react";
import LayoutOne from "../components/layout/LayoutOne";
import Container from "../components/other/Container";
import FieldActivity from "../components/other/FieldActivity";
import DowOne from "../components/sections/dale-of-week/DowOne";
import DowTwo from "../components/sections/dale-of-week/DowTwo";
import HeroSliderOne from "../components/sections/hero-slider/HeroSliderOne";
import IntroductionFour from "../components/sections/introduction/IntroductionFour";
import IntroductionTwo from "../components/sections/introduction/IntroductionTwo";
import dowOneData from "../data/sections/dale-of-week.json";
import heroslideData from "../data/sections/hero-slider.json";

export default function Home() {
  return (
    <LayoutOne title="Trang chủ" containerFluid>
      <Head>
        <meta name="title" content="Xây dựng Mai Thạch Đại Phát" />
        <meta
          name="description"
          content="Xây dựng Mai Thạch Đại Phát chuyên xây nhà thô, xây nhà phố, xây nhà cho thuê, văn phòng cần sửa chữa cải tạo, thay đổi công năng..."
        />
        <meta
          name="image"
          content={`${process.env.PUBLIC_URL}/assets/images/pages/thumbnail.jpg`}
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/assets/images/pages/thumbnail.jpg`}
        />
      </Head>
      <HeroSliderOne containerFluid data={heroslideData.one} />
      <IntroductionTwo />
      <Container fluid>
        <FieldActivity className="-bordered" containerFluid />
      </Container>
      <DowTwo countdownLast={100000000} />
      <Container fluid>
        {/* <IntroductionOne data={introductionOneData.one} /> */}
        <DowOne data={dowOneData.one} countdownLast={100000000} />
      </Container>
      <IntroductionFour />
      {/* <BannerOne data={bannerData.one} /> */}
    </LayoutOne>
  );
}
