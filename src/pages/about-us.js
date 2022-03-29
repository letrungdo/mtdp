import { Breadcrumb, Button, Col, Row } from "antd";
import classNames from "classnames";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useCountUp } from "react-countup";
import Slider from "react-slick";
import LayoutOne from "../components/layout/LayoutOne";
import Container from "../components/other/Container";
import SectionTitle from "../components/other/SectionTitle";
import { NextArrow, PrevArrow } from "../components/other/SliderArrow";
import IntroductionFive from "../components/sections/introduction/IntroductionFive";
import IntroductionSix from "../components/sections/introduction/IntroductionSix";
import companyInfo from "../data/company-info.json";

const CountItem = (item) => {
  const countUpRef = useRef(null);

  const { start } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: item.number,
    duration: 2,
  });

  useEffect(() => {
    const countUp = countUpRef.current;
    if (!countUp) return;
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(countUp);
          observer.disconnect();
          start();
        }
      });
    };
    const observer = new IntersectionObserver(callback);
    observer.observe(countUp);
  }, [start]);

  return (
    <div className="about-statistical__item-data__countup">
      {item.prefix && <span>{item.prefix}</span>}
      <h3 ref={countUpRef} />
      {item.suffixes && <span>{item.suffixes}</span>}
    </div>
  );
};

function aboutUs() {
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
    <LayoutOne title="Giới thiệu">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Trang chủ
          </Breadcrumb.Item>
          <Breadcrumb.Item>Giới thiệu</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <div className="about">
        <Container>
          <div className="about-story">
            <div className="about-story__content">
              <SectionTitle title="Giới thiệu về chúng tôi" className="-left" />
              <div className="about-story__video">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/pages/contact/video.jpg"
                  }
                  alt="introduction image"
                />
                <Button
                  type="primary"
                  shape="circle"
                  icon={<i className="fas fa-play" />}
                />
              </div>
              <p>
                {`${companyInfo.companyName} `}
                luôn dẫn đầu trong lĩnh vực thiết kế và thi công xây dựng các
                công trình dân dụng tại Tp. Hồ Chí Minh và các tỉnh lân cận
                trong khu vực miền nam. Với đội ngũ thiết kế chuyên nghiệp gồm:
                những Thạc Sĩ, Kiến Trúc Sư, Kỹ Sư, Chuyên Gia Nội Thất lành
                nghề, chúng tôi luôn đảm bảo công tác tư vấn, thiết kế đạt chất
                lượng qua các tiêu chí mang tính sáng tạo, hiện đại, chính xác
                và tiết kiệm tối ưu chi phí hoàn thiện cho quyền lợi của Quý
                Khách Hàng.
              </p>
              <p>
                Trong lĩnh vực thi công xây dựng, với lực lượng nhân sự chuyên
                nghiệp gồm 60 Kỹ Sư Giám Sát Công Trình đầy nhiệt huyết cùng hơn
                1000 công nhân lành nghề được chia thành nhiều đội ngũ chuyên
                môn như: Xí Nghiệp Xây Dựng, Đội Hoàn Thiện, Xưởng Nội Thất,
                Xưởng Cơ Khí, Đội Điện Nươc, Đội Sơn Nước… Chúng tôi sẵn sàng
                cam kết với quý khách hàng về các chuẩn mực trong quá trình hợp
                tác và làm việc, mang đến một công trình hoàn hảo nhất với thông
                điệp đồng hành xây nên hạnh phúc cùng quý khách hàng.
              </p>
              <p>
                Với tiêu chí chuyên nghiệp trong công việc, tận tâm trong dịch
                vụ và chu đáo khi hậu mãi, luôn là một nhà thiết kế và nhà thầu
                chính được tín nhiệm hiện nay. {companyInfo.companyName} đã
                thiết kế và thi công tất cả các hạng mục của hơn 800 công trình
                các loại như Biệt Thự, Cao ốc Văn Phòng, Siêu Thị, Khách Sạn,
                Nhà Phố… Công ty luôn lớn mạnh trong niềm tin của khách hàng để
                hoàn thành công trình của bạn vì chúng tôi cam kết lấy chất
                lượng và uy tín làm mục tiêu hoạt động.
              </p>
            </div>
          </div>
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
          <div className="about-statistical">
            <Row gutter={[30, 30]}>
              {companyInfo.statistical.map((item) => (
                <Col key={item.icon} xs={24} md={8}>
                  <div className="about-statistical__item">
                    <div className="about-statistical__item-icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="about-statistical__item-data">
                      <CountItem {...item} />
                      <p>{item.object}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
        <div className="about-introduction">
          <IntroductionFive data={companyInfo.introduction.one} />
          <IntroductionSix />
        </div>
      </div>
    </LayoutOne>
  );
}

export default React.memo(aboutUs);
