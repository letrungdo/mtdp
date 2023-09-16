import { Button, Col, Row } from "antd";
import Image from "next/legacy/image";
import React from "react";
import Countdown, { zeroPad } from "react-countdown";
import companyInfo from "../../../data/company-info.json";
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
function DowTwo({ countdownLast }) {
  return (
    <div className="dow-two">
      <Container>
        <Row justify="space-between" gutter={20}>
          <Col sm={24} md={12}>
            <div className="dow-two-content">
              <SectionTitle
                title="Gọi ngay để nhận tư vấn miễn phí"
                hideDecoration
              />
              <p>
                Xây dựng Mai Thạch Đại Phát cùng bạn xây nhà đẹp sang.
                <br />
                Dịch vụ chuyên nghiệp, giá thành hợp lý.
              </p>
              <Countdown
                date={Date.now() + countdownLast}
                renderer={({ days, hours, minutes, seconds }) => {
                  return (
                    <div className="dow-two-countdown">
                      <div className="dow-two-countdown-item">
                        <h6>{zeroPad(days)}</h6> <span>Ngày</span>
                      </div>
                      <div className="dow-two-countdown-item">
                        <h6>{zeroPad(hours)}</h6> <span>Giờ</span>
                      </div>
                      <div className="dow-two-countdown-item">
                        <h6>{zeroPad(minutes)} </h6>
                        <span>Phút</span>
                      </div>
                      <div className="dow-two-countdown-item">
                        <h6>{zeroPad(seconds)}</h6> <span>Giây</span>
                      </div>
                    </div>
                  );
                }}
              />
              <Button type="primary" shape="round">
                <a href={`tel:${companyInfo.phone}`}>
                  <i className="fad fa-phone-alt fa-2x" />
                  <span>Gọi ngay</span>
                </a>
              </Button>
            </div>
          </Col>
          <Col md={10} className="dow-two-img up-down-anim">
            <Image
              src={"/assets/images/sections/dale-of-week/two/1.webp"}
              width={480}
              height={300}
              objectFit="contain"
            />
          </Col>
        </Row>

        <div className="introduction-two-content mt-20">
          <SectionTitle title="Các gói thi công ưu đãi lớn:" hideDecoration />
          <Row>
            {companyInfo.introduction.five.map((d, i) => (
              <Col md={12} key={i}>
                <IcHeading className="sanim" title={d.title} />
                <p className="text">{d.content}</p>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default React.memo(DowTwo);
