import { css } from "@emotion/css";
import React from "react";
import dataA from "../../../data/sections/introduction.json";
import Container from "../../other/Container";
import SectionTitle from "../../other/SectionTitle";

const IcHeading = ({ title, line = true }) => {
  return (
    <>
      <h3>
        <i className="fad fa-check-double" />
        {title}
        {line && <div className="line" />}
      </h3>
    </>
  );
};

function IntroductionFour() {
  const data = dataA.four;
  return (
    <div className="introduction-four">
      <Container>
        <SectionTitle
          hideDecoration
          title="Cam kết dịch vụ"
          className={`-coffee -title-white -center ${css`
            margin-bottom: 0;
            padding: 1rem 0;
            background-image: linear-gradient(to right, #011b54, #2fb3a8);
            border-radius: 10px 10px 0 0;
            h2 {
              color: #33b9b0 !important;
            }
          `}`}
        />
        <div className="introduction-four-content">
          <IcHeading title="Cam kết thỉ công đúng 100% những hạng mục công việc đã nêu trong hợp đồng." />
          <IcHeading title="Tuyệt đối không đưa vật tư giả, vật tư kém chất lượng vào thi công công trình." />
          <IcHeading title="Cam kết chịu phạt tiến độ theo đúng thỏa thuận trong hợp đồng." />
          <IcHeading title="Giữ giá xây dựng tại thời điểm ký kết hợp đồng cho đến khi hoàn thành công trình." />
          <IcHeading title="Không bán thầu dưới mọi hình thức" />
          <IcHeading title="Cam kết chịu trách nhiệm pháp lý đối với công trình do công ty thỉ công theo đúng quy định của pháp luật Việt Nam." />
          <IcHeading title="Sẵn lòng đền bù mọi thiệt hại vật chất cho công trình và nhà xung quanh nếu lỗi do công ty gây ra." />
          <IcHeading title="Chế độ bảo hành chu đáo cùng đội ngũ nhân sự chuyên nghiệp và có trách nhiệm." />
          <IcHeading title="Tuân thủ nghiêm ngặt các quy định an toàn lao động và an toàn phòng chống dịch dưới sự giám sát thường xuyên của Kỹ sư xây dựng và Phòng ATLĐ." />
          <IcHeading title="Hỗ trợ kiểm tra, thẩm định kết cấu cũ." />
          <IcHeading title="Hỗ trợ thủ tục và hồ sơ xỉn cấp phép nhà cải tạo." />
          <IcHeading title="Hỗ trợ bản vẽ cải tạo nhà." />
          <IcHeading
            title="Hỗ trợ làm việc với ban dự án về hồ sơ pháp lý, thủ tục thi công công trình, thủ tục hoàn công với nhà dự án."
            line={false}
          />
        </div>
      </Container>
    </div>
  );
}

export default React.memo(IntroductionFour);
