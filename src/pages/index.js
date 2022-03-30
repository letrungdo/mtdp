import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import LayoutOne from "../components/layout/LayoutOne";
import Container from "../components/other/Container";
import TypicalProjects from "../components/sections/typical-projects";
import companyInfo from "../data/company-info.json";

const HeroSliderOne = dynamic(
  import("../components/sections/hero-slider/HeroSliderOne")
);
const IntroductionTwo = dynamic(
  import("../components/sections/introduction/IntroductionTwo")
);
const IntroductionFour = dynamic(
  import("../components/sections/introduction/IntroductionFour")
);
const DowOne = dynamic(import("../components/sections/dale-of-week/DowOne"));
const DowTwo = dynamic(import("../components/sections/dale-of-week/DowTwo"));
const FieldActivity = dynamic(import("../components/other/FieldActivity"));

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
      <HeroSliderOne data={companyInfo.slider} />
      <IntroductionTwo />
      <Container>
        <FieldActivity />
        <TypicalProjects />
      </Container>
      <DowTwo countdownLast={100000000} />
      <Container fluid>
        <DowOne data={companyInfo.introduction.one} countdownLast={100000000} />
      </Container>
      <IntroductionFour />
    </LayoutOne>
  );
}
