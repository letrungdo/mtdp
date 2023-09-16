import { Breadcrumb, Button, Col, Row } from "antd";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import LayoutOne from "../components/layout/LayoutOne";
import Container from "../components/other/Container";

export default function error() {
  return (
    <LayoutOne title="Lỗi 404">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Trang chủ
          </Breadcrumb.Item>
          <Breadcrumb.Item>Lỗi 404</Breadcrumb.Item>
        </Breadcrumb>
        <div className="error">
          <Row gutter={50}>
            <Col xs={24} md={12}>
              <div className="error-content">
                <h2>Trang không tồn tại!</h2>
                <p>
                  Xin lỗi, trang bạn đang tìm kiếm không tồn tại, có thể đã bị
                  xóa hoặc thay đổi tên.
                </p>
                <Button type="primary" shape="round">
                  <Link href={process.env.PUBLIC_URL + "/"}>
                    Về trang chủ
                  </Link>
                </Button>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="error-img">
                <Image
                  src={"/assets/images/pages/404/1.png"}
                  alt="404 Image"
                  width={400}
                  height={280}
                  objectFit="contain"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </LayoutOne>
  );
}
