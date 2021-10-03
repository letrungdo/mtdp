import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import Container from "../../other/Container";
import SectionTitle from "../../other/SectionTitle";

const IntroductionFive = ({ data }) => {
  return (
    <div className="introduction-five">
      <Container>
        <Row align="middle" gutter={40}>
          <Col xs={0} sm={12} md={8}>
            <div className="introduction-five-image">
              <Image
                src={"/assets/images/sections/introduction/five/1.jpg"}
                alt="Xây dựng Mai Thạch Đại Phát"
                objectFit="contain"
                height={500}
                width={340}
              />
            </div>
          </Col>
          <Col sm={12} md={16}>
            <div className="introduction-five-benefits">
              <SectionTitle title="Tại sao chọn chúng tôi" className="-left" />
              <Row gutter={[30, 30]}>
                {data.map((item) => (
                  <Col key={item.iconSrc} md={12}>
                    <div className="introduction-five-benefits__item">
                      <div className="introduction-five-benefits__item-image">
                        <i className={item.iconSrc} />
                      </div>
                      <div className="introduction-five-benefits__item-content">
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IntroductionFive;
