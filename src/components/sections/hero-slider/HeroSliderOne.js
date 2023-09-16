import { Col, Row } from "antd";
import classNames from "classnames";
import Image from "next/legacy/image";
import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import Container from "../../other/Container";
import { NextArrow, PrevArrow } from "../../other/SliderArrow";

function HeroSliderOne({ data, containerFluid }) {
  const [currentSlideIndex, setNextSlideIndex] = useState(0);
  const settings = {
    // fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const beforeChange = (oldIndex, newIndex) => {
    setNextSlideIndex(newIndex);
  };

  return (
    <div className="hero-slider -carousel -style-one">
      <Container fluid={containerFluid}>
        <Slider
          beforeChange={beforeChange}
          className="arrow-center"
          autoplay
          {...settings}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className={`slick-slider-item ${classNames({
                active: index === currentSlideIndex,
              })}`}
            >
              <Image
                src={item.background}
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
        <div className="hero-slider-subitems">
          <Row gutter={15}>
            {Array.from(Array(3), (e, i) => {
              return (
                <Col key={i} xs={8}>
                  <Link href={process.env.PUBLIC_URL + "#"}>
                    <Image
                      src={`/assets/images/hero-slider/${i + 1}.jpg`}
                      alt="sub item"
                      layout="responsive"
                      height={180}
                      width={300}
                    />
                  </Link>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default React.memo(HeroSliderOne);
