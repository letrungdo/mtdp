import { Button, Col, Row } from "antd";
import React from "react";
import Countdown, { zeroPad } from "react-countdown";
import companyInfo from "../../../data/company-info.json";
import Container from "../../other/Container";
import SectionTitle from "../../other/SectionTitle";

function DowTwo({ countdownLast }) {
  return (
    <div className="dow-two">
      <Container>
        <Row align="middle" justify="space-between">
          <Col sm={24} lg={12}>
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
                  <i className="fad fa-phone-alt fa-2x" /><span>Gọi ngay</span>
                </a>
              </Button>
            </div>
          </Col>
          <Col lg={10}>
            <div className="dow-two-img up-down-anim">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/sections/dale-of-week/two/1.webp"
                }
                alt="Dale of the week image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default React.memo(DowTwo);
