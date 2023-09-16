import { Col, Row } from "antd";
import Image from "next/legacy/image";
import React from "react";
import data from "../../../data/company-info.json";
import Container from "../../other/Container";
import SectionTitle from "../../other/SectionTitle";

const IcHeading = ({ title, className }) => {
  return (
    <h3 className={className}>
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
                  src={"/assets/images/sections/introduction/two/1.webp"}
                  alt="introduction-image"
                  objectFit="contain"
                  height={400}
                  width={600}
                />
              </div>
            </Col>
            <Col md={12}>
              <div className="introduction-two-content">
                <SectionTitle
                  title={data.companyName}
                  hideDecoration
                  className="sanim"
                />
                <p className="sanim">
                  Mai Thạch Đại Phát là công ty chuyên xây dựng những công trình
                  có yêu cầu đặc biệt như:
                </p>
                {data.introduction.two.map((d, i) => (
                  <IcHeading key={i} className="sanim" {...d} />
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default React.memo(IntroductionTwo);
