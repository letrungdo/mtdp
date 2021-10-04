import { css } from "@emotion/css";
import React from "react";
import dataA from "../../../data/company-info.json";
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
  const data = dataA.introduction.four;
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
          {data.map((item, i) => {
            return (
              <IcHeading
                key={i}
                title={item.title}
                line={i !== data.length - 1}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default React.memo(IntroductionFour);
