import { Breadcrumb, Button, Col, Row } from "antd";
import React from "react";
import CountUp from "react-countup";
import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import SectionTitle from "../../components/other/SectionTitle";
import IntroductionFive from "../../components/sections/introduction/IntroductionFive";
import IntroductionSix from "../../components/sections/introduction/IntroductionSix";
import PartnerOne from "../../components/sections/partners/PartnerOne";
import data from "../../data/pages/about.json";
import introductionData from "../../data/sections/dale-of-week.json";

function aboutUs() {
  return (
    <LayoutOne title="Giới thiệu">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Trang chủ
          </Breadcrumb.Item>
          <Breadcrumb.Item>Giới thiệu</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <div className="about">
        <Container>
          <div className="about-story">
            <div className="about-story__content">
              <SectionTitle title="Giới thiệu về chúng tôi" className="-left" />
              <div className="about-story__video">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/pages/contact/video.jpg"
                  }
                  alt="introduction image"
                />
                <Button
                  type="primary"
                  shape="circle"
                  icon={<i className="fas fa-play" />}
                />
              </div>
              <p>
                Thành lập từ năm 2021, Công ty TNHH Xây Dựng Mai Thạch Đại Phát
                luôn dẫn đầu trong lĩnh vực thiết kế và thi công xây dựng các
                công trình dân dụng tại Tp. Hồ Chí Minh và các tỉnh lân cận
                trong khu vực miền nam. Với đội ngũ thiết kế chuyên nghiệp gồm:
                những Thạc Sĩ, Kiến Trúc Sư, Kỹ Sư, Chuyên Gia Nội Thất lành
                nghề, chúng tôi luôn đảm bảo công tác tư vấn, thiết kế đạt chất
                lượng qua các tiêu chí mang tính sáng tạo, hiện đại, chính xác
                và tiết kiệm tối ưu chi phí hoàn thiện cho quyền lợi của Quý
                Khách Hàng.
              </p>
              <p>
                Trong lĩnh vực thi công xây dựng, với lực lượng nhân sự chuyên
                nghiệp gồm 60 Kỹ Sư Giám Sát Công Trình đầy nhiệt huyết cùng hơn
                1000 công nhân lành nghề được chia thành nhiều đội ngũ chuyên
                môn như: Xí Nghiệp Xây Dựng, Đội Hoàn Thiện, Xưởng Nội Thất,
                Xưởng Cơ Khí, Đội Điện Nươc, Đội Sơn Nước… Chúng tôi sẵn sàng
                cam kết với quý khách hàng về các chuẩn mực trong quá trình hợp
                tác và làm việc, mang đến một công trình hoàn hảo nhất với thông
                điệp đồng hành xây nên hạnh phúc cùng quý khách hàng.
              </p>
              <p>
                Với tiêu chí chuyên nghiệp trong công việc, tận tâm trong dịch
                vụ và chu đáo khi hậu mãi, công ty TNHH Xây Dựng Mai Thạch Đại
                Phát luôn là một nhà thiết kế và nhà thầu chính được tín nhiệm
                hiện nay. Công ty TNHH Xây Dựng Mai Thạch Đại Phát đã thiết kế
                và thi công tất cả các hạng mục của hơn 800 công trình các loại
                như Biệt Thự, Cao ốc Văn Phòng, Siêu Thị, Khách Sạn, Nhà Phố…
                Công ty TNHH Xây Dựng Mai Thạch Đại Phát luôn lớn mạnh trong
                niềm tin của khách hàng để hoàn thành công trình của bạn vì
                chúng tôi cam kết lấy chất lượng và uy tín làm mục tiêu hoạt
                động.
              </p>
            </div>
          </div>
          <div className="about-statistical">
            <Row gutter={[30, 30]}>
              {data.statistical.map((item) => (
                <Col key={item.icon} xs={24} md={8}>
                  <div className="about-statistical__item">
                    <div className="about-statistical__item-icon">
                      <i className={item.icon}></i>
                      {/* <img
                        src={process.env.PUBLIC_URL + item.icon}
                        alt="Statistcal icon"
                      /> */}
                    </div>
                    <div className="about-statistical__item-data">
                      <CountUp start={0} end={item.number} delay={0}>
                        {({ countUpRef }) => (
                          <div className="about-statistical__item-data__countup">
                            {item.prefix && <span>{item.prefix}</span>}
                            <h3 ref={countUpRef} />
                            {item.suffixes && <span>{item.suffixes}</span>}
                          </div>
                        )}
                      </CountUp>
                      <p>{item.object}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
        <div className="about-introduction">
          <IntroductionFive data={introductionData.one} />
          <IntroductionSix />
        </div>

        {/* <Container>
          <PartnerOne />
        </Container> */}
      </div>
    </LayoutOne>
  );
}

export default React.memo(aboutUs);
