import { css } from "@emotion/css";
import { Col, Row } from "antd";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import Container from "../../other/Container";
import SectionTitle from "../../other/SectionTitle";

const DownOneItem = React.memo(({ reverse, data }) => {
  return (
    <div
      className={`dow-one-content__item ${classNames({ "-reverse": reverse })}`}
    >
      <div className="dow-one-content__item-image">
        <i className={data.iconSrc} />
      </div>
      <div className="dow-one-content__item-content">
        <h5>{data.title}</h5>
        <p>{data.description}</p>
      </div>
    </div>
  );
});

function DowOne({ data, countdownLast }) {
  return (
    <div className="dow-one">
      <Container>
        <SectionTitle title="Tại sao chọn chúng tôi" className="-center" />
        <div className="dow-one-content">
          <Row align="center" gutter={15}>
            <Col
              md={11}
              lg={8}
              className={css`
                display: flex;
                align-items: center;
              `}
            >
              <Row gutter={[0, 30]}>
                {data.slice(0, 2).map((item, index) => (
                  <Col key={index} span={24}>
                    <DownOneItem reverse data={item} />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col md={0} lg={8}>
              <Image
                className="dow-one-image"
                src={"/assets/images/sections/dale-of-week/one/img.jpg"}
                alt=""
                layout="responsive"
                height={190}
                width={300}
              />
            </Col>
            <Col
              sm={2}
              md={2}
              lg={0}
              className={css`
                height: 30px;
                width: 30px;
              `}
            />
            <Col
              md={11}
              lg={8}
              className={css`
                display: flex;
                align-items: center;
              `}
            >
              <Row gutter={[0, 30]}>
                {data.slice(2, 4).map((item, index) => (
                  <Col key={index} span={24}>
                    <DownOneItem data={item} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default React.memo(DowOne);
