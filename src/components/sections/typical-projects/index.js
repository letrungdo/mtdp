import React, { useState } from "react";
import Slider from "react-slick";
import companyInfo from "../../../data/company-info.json";
import SectionTitle from "../../other/SectionTitle";
import { NextArrow, PrevArrow } from "../../../components/other/SliderArrow";
import classNames from "classnames";
import Image from "next/legacy/image";
import Container from "../../other/Container";

function TypicalProjects() {
  const [currentSlideIndex, setNextSlideIndex] = useState(0);

  const settings = {
    // fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const beforeChange = (oldIndex, newIndex) => {
    setNextSlideIndex(newIndex);
  };

  return (
    <div className="hero-slider -carousel -style-one">
      <SectionTitle title="Công trình tiêu biểu" className="-left" />
      <Slider
        beforeChange={beforeChange}
        className="arrow-center"
        autoplay
        {...settings}
      >
        {companyInfo.aboutGallery.map((item, index) => (
          <div
            key={index}
            className={`slick-slider-item spacing ${classNames({
              active: index === currentSlideIndex,
            })}`}
          >
            <Image
              src={item}
              alt="background image"
              layout="fill"
              objectFit="cover"
            />
            <Container>
              <div className="hero-slider-content-wrapper"></div>
            </Container>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TypicalProjects;
