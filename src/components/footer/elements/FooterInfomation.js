import Link from "next/link";
import React from "react";
import companyInfo from "../../../data/company-info.json";
import SocialIcons from "../../other/SocialIcons";

export default function FooterInfomation() {
  return (
    <div className="footer-info">
      <Link href={process.env.PUBLIC_URL + "/"}>
        <a className="footer-info__logo">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/logo.svg"}
            alt="MTDP Logo"
          />
        </a>
      </Link>
      <ul>
        <li>Địa chỉ: 2295/84 Huỳnh Tấn Phát Thị Trấn Nhà Bè, H. Nhà Bè, HCM</li>
        <li>
          Điện thoại: <a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
        </li>
        <li>
          Email: <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
        </li>
      </ul>
      <SocialIcons type="primary" shape="circle" className="-btn-light" />
    </div>
  );
}
