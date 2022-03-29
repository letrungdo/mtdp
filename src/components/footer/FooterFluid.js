import { Col, Row } from "antd";
import React from "react";
import Container from "../other/Container";
import FooterInfomation from "./elements/FooterInfomation";
import FooterQuickLinks from "./elements/FooterQuickLinks";

function FooterFluid() {
  return (
    <div className="footer -fluid -style-one">
      <div className="footer-top">
        <Container fluid>
          <Row gutter={15}>
            <Col xs={24} md={9} lg={10}>
              <FooterInfomation />
            </Col>
            <Col xs={0} md={1} lg={2} />
            <Col xs={24} md={14} lg={12}>
              <FooterQuickLinks colSize={{ span: 8 }} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container fluid>
          <div className="footer-bottom__wrapper">
            <p>
              Copyright © 2022{" "}
              <a href="https://letrungdo.com" target="_blank">
                letrungdo.com
              </a>
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}
export default React.memo(FooterFluid);
