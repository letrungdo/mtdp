import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import Container from "../../other/Container";
import SectionTitle from "../../other/SectionTitle";

const IcHeading = ({ title }) => {
  return (
    <h3>
      <i className="fad fa-check-square" />
      {title}
    </h3>
  );
};

function IntroductionTwo() {
  return (
    <div className="introduction-two">
      <Container>
        <div className="introduction-two-wrapper">
          <Row>
            <Col md={12}>
              <div className="introduction-two-image">
                <Image
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/sections/introduction/two/1.png"
                  }
                  alt="introduction-image"
                  objectFit="contain"
                  height={450}
                  width={600}
                />
              </div>
            </Col>
            <Col md={12}>
              <div className="introduction-two-content">
                <SectionTitle
                  title="Công ty TNHH Xây dựng Mai Thạch Đại Phát"
                  hideDecoration
                />
                <p>
                  Được thành lập năm 2021. Xây dựng Mai Thạch Đại Phát là công
                  ty chuyên những công trình có yêu cầu đặc biệt như:
                </p>
                <IcHeading title="Xây nhà thô còn dang dở" />
                <IcHeading title="Nhà dự án giao thô cần hoàn thiện gấp" />
                <IcHeading title="Nhà cho thuê, văn phòng cần sửa chữa cải tạo, thay đổi công năng" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default React.memo(IntroductionTwo);
