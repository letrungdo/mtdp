import { Breadcrumb, Button, Col, Form, Input, Row } from "antd";
import React from "react";
import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import SectionTitle from "../../components/other/SectionTitle";
import companyInfo from "../../data/company-info.json";

function contactUs() {
  const onFinish = (values) => {
    console.log("Success:", values);
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.621640518476!2d106.74180031526474!3d10.686448063769113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe93fd577e906732e!2zQ8O0bmcgVHkgVG5oaCBE4buLY2ggVuG7pSBC4bqjbyBW4buHIEhvw6BuZyBHaWEgU8OgaSBHw7Ju!5e0!3m2!1svi!2s!4v1632655510138!5m2!1svi!2s"
              width="100%"
              height="600"
              frameborder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabindex="0"
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
              <p>Nhân viên của chúng tôi sẽ gọi lại sau và giải đáp các thắc mắc của bạn.</p>
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
                      { required: true, message: "Vui lòng nhập email của bạn!" },
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
                    <Button type="primary" htmlType="submit" shape="round">
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
