import Link from "next/link";
import React from "react";
import Container from "../../other/Container";
import MobileMenuOpener from "../elements/MobileMenuOpener";
import Navigator from "../elements/Navigator";

export default function MenuTwo({ containerFluid }) {
  return (
    <div className="menu -style-two">
      <Container fluid={containerFluid}>
        <div className="menu-wrapper">
          <MobileMenuOpener />
          <Link href={process.env.PUBLIC_URL + "/"}>
            <a className="menu-logo">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/logo.svg"}
                alt="MTDP logo"
                height={50}
              />
            </a>
          </Link>
          {/* <SearchForm enterButton={<i className="icon_search" />} /> */}
          <Navigator />
          {/* <FunctionItems /> */}
        </div>
      </Container>
    </div>
  );
}
