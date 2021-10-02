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
    <LayoutOne title="Mai Thạch Đại Phát" containerFluid>
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
