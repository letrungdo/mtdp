import { Col, Row } from "antd";
import classNames from "classnames";
import React from "react";
import Container from "../other/Container";
import FooterInfomation from "./elements/FooterInfomation";
import FooterQuickLinks from "./elements/FooterQuickLinks";

function Footer({ containerFluid, className }) {
  return (
    <div className={`footer -style-one ${classNames(className)}`}>
      <div className="footer-top">
        <Container fluid={containerFluid}>
          <Row gutter={15}>
            <Col xs={24} md={9} lg={8}>
              <FooterInfomation />
            </Col>
            <Col xs={24} md={15} lg={16}>
              <FooterQuickLinks colSize={{ span: 8 }} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container fluid={containerFluid}>
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
export default React.memo(Footer);
