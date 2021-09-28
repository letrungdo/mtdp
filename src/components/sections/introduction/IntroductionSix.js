import React from "react";
import SectionTitle from "../../other/SectionTitle";
import SocialIcons from "../../other/SocialIcons";
import Container from "../../other/Container";
import { Col, Row } from "antd";

const data = [
  {
    name: "Nguyễn Ngân Thạch",
    job: "Tổng giám đốc",
    image: "/assets/images/sections/introduction/six/1.jpg",
  },
  {
    name: "Nguyễn Nhật Giang",
    job: "Giám đốc điều hành",
    image: "/assets/images/sections/introduction/six/2.jpg",
  },
  {
    name: "Lee Ji Eun",
    job: "Giám đốc thiết kế",
    image: "/assets/images/sections/introduction/six/3.jpg",
  },
  {
    name: "Lý Lệ Hà",
    job: "Giám đốc thi công",
    image: "/assets/images/sections/introduction/six/4.jpg",
  },
];

const IntroductionSix = () => {
  return (
    <div className="introduction-six">
      <Container>
        <SectionTitle title="Ban lãnh đạo" className="-center" />
        <div className="introduction-six-content">
          <Row gutter={[30, 30]}>
            {data.map((item) => (
              <Col key={item.name} xs={24} sm={12} md={6}>
                <div
                  className="introduction-six-content__item"
                  style={{ backgroundImage: `url('${item.image}')` }}
                >
                  <main>
                    <h3>{item.name}</h3>
                    <h5>{item.job}</h5>
                    <SocialIcons className="-white" />
                  </main>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default IntroductionSix;
