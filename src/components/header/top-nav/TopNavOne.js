import { Select } from "antd";
import React from "react";
import companyInfo from "../../../data/company-info.json";
import Container from "../../other/Container";
import SocialIcons from "../../other/SocialIcons";

const flagData = [
  { name: "english", image: "/assets/images/header/flag-usa.png" },
  { name: "japanese", image: "/assets/images/header/flag-jp.png" },
  { name: "vietnamese", image: "/assets/images/header/flag-vn.png" },
];

export default function TopNavOne({ containerFluid }) {
  const { Option } = Select;
  return (
    <div className="top-nav-one">
      <Container fluid={containerFluid}>
        <div className="top-nav-one-wrapper">
          <div className="top-nav-one-left">
            <ul>
              <li>
                <i className="fas fa-envelope" />
                <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
              </li>
              <li>
                <i className="fas fa-phone-alt" />
                <a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
              </li>
            </ul>
          </div>
          <div className="top-nav-one-right">
            <div className="top-nav-one-right__item">
              <SocialIcons />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
