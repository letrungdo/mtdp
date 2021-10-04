import { Breadcrumb, Button, Col, Form, Input, message, Row } from "antd";
import getConfig from "next/config";
import React, { useState } from "react";
import axiosService from "../common/axiosService";
import LayoutOne from "../components/layout/LayoutOne";
import Container from "../components/other/Container";
import SectionTitle from "../components/other/SectionTitle";
import companyInfo from "../data/company-info.json";

const { publicRuntimeConfig } = getConfig();

function contactUs() {
  const [running, setRunning] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
    if (running) return;
    setRunning(true);
    import("recaptcha-v3").then((res) => {
      res.load(publicRuntimeConfig.recaptchaKey).then((recaptcha) => {
        recaptcha.execute("submit").then((token) => {
          if (!token) {
            message.error("Gửi thất bại!");
            setRunning(false);
            return;
          }
          console.log("token", token);
          axiosService
            .post("/api/contact", {
              ...values,
              subject: `[${values.email}] - ${values.name}`,
            })
            .then((res) => {
              message.success("Gửi thành công!");
              setRunning(false);
            })
            .catch((err) => {
              message.error("Gửi thất bại!");
              setRunning(false);
            });
        });
      });
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <LayoutOne title="Liên hệ">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Trang chủ
          </Breadcrumb.Item>
          <Breadcrumb.Item>Liên hệ</Breadcrumb.Item>
        </Breadcrumb>
        <div className="contact">
          <div className="contact-map">
            <iframe
              src={companyInfo.mapsIframe}
              width="100%"
              height="600"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div>
          <div className="contact-methods">
            <Row gutter={15}>
              <Col xs={24} md={8}>
                <div className="contact-methods-item">
                  <i className="fal fa-map-marker-alt" />
                  <p>{companyInfo.address}</p>
                </div>
              </Col>
              <Col xs={24} md={8}>
                <div className="contact-methods-item">
                  <i className="fal fa-envelope" />
                  <p>
                    <span>Điện thoại:</span>{" "}
                    <a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
                  </p>
                  <p>
                    <span>Email:</span>{" "}
                    <a href={`mailto:${companyInfo.email}`}>
                      {companyInfo.email}
                    </a>
                  </p>
                </div>
              </Col>
              <Col xs={24} md={8}>
                <div className="contact-methods-item">
                  <i className="fal fa-clock" />
                  <p>
                    <span>Thứ 2 - Thứ 7:</span> 8:00 – 22:00
                  </p>
                  <p>
                    <span>Chủ nhật:</span> 8:00 - 17:00
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="contact-form">
            <div className="contact-form__title">
              <SectionTitle
                hideDecoration
                title="Để lại tin nhắn"
                className="-center"
              />
              <p>
                Nhân viên của chúng tôi sẽ gọi lại sau và giải đáp các thắc mắc
                của bạn.
              </p>
            </div>
            <Form
              name="review"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Row gutter={30}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="name"
                    rules={[
                      { required: true, message: "Vui lòng nhập tên của bạn!" },
                    ]}
                  >
                    <Input placeholder="Tên" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="email"
                    rules={[
                      { type: "email", message: "Email không hợp lệ." },
                      {
                        required: true,
                        message: "Vui lòng nhập email của bạn!",
                      },
                    ]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="message">
                    <Input.TextArea placeholder="Tin nhắn" />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      shape="round"
                      loading={running}
                    >
                      Gửi
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </Container>
    </LayoutOne>
  );
}

export default React.memo(contactUs);
