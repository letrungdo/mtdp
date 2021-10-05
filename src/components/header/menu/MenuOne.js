import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../../other/Container";
import MobileMenuOpener from "../elements/MobileMenuOpener";
import Navigator from "../elements/Navigator";

export default function MenuOne({ containerFluid }) {
  return (
    <div className="menu -style-one">
      <Container fluid={containerFluid}>
        <div className="menu-wrapper">
          <MobileMenuOpener />
          <Link href={process.env.PUBLIC_URL + "/"}>
            <a className="menu-logo">
              <Image
                src={"/assets/images/logo.svg"}
                alt="MTDP logo"
                height={45}
                width={134}
              />
            </a>
          </Link>
          <Navigator />
        </div>
      </Container>
    </div>
  );
}
