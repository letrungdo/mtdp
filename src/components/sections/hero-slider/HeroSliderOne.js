import { Col, Row } from "antd";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Container from "../../other/Container";
import { NextArrow, PrevArrow } from "../../other/SliderArrow";

function HeroSliderOne({ data, containerFluid }) {
  const [currentSlideIndex, setNextSlideIndex] = useState(0);
  const settings = {
    fade: true,
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
  useEffect(() => {
    const currentSlide = document.querySelector(
      `.hero-slider.-style-one .slick-slide[data-index="${currentSlideIndex}"]`
    );
    const animationItems = currentSlide.querySelectorAll("[data-animation]");
    animationItems.forEach((item, index) => {
      const animationName = item.dataset.animation;
      const animationDelay = item.dataset.delay;
      console.log(animationName);
      item.classList.add("animate__animated", animationName);
      item.style.animationDelay = animationDelay + "s";
      item.addEventListener("animationend", function () {
        this.classList.remove("animate__animated", animationName);
        this.removeEventListener("animationend", function () {
          return;
        });
      });
    });
  }, [currentSlideIndex]);

  return (
    <div className="hero-slider -carousel -style-one">
      <Container fluid={containerFluid}>
        <Slider
          beforeChange={beforeChange}
          className="arrow-center"
          {...settings}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className={`slick-slider-item ${classNames({
                active: index === currentSlideIndex,
              })}`}
            >
              <div className="hero-slider-background">
                <Image
                  src={item.background}
                  alt="background image"
                  layout="fill"
                />
              </div>
              <Container>
                <div className="hero-slider-content-wrapper">
                  {/* <Row align="middle">
                    <div className="hero-slider-content">
                      <h5 data-animation="animate__fadeInDown">
                        {item.subTitle}
                      </h5>
                      <h1 data-delay="0.2" data-animation="animate__fadeInDown">
                        {item.title}
                      </h1>
                    </div>
                  </Row> */}
                </div>
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
                    <a>
                      <Image
                        src={`/assets/images/hero-slider/${i + 1}.jpg`}
                        alt="sub item"
                        layout="responsive"
                        height={180}
                        width={300}
                      />
                    </a>
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
