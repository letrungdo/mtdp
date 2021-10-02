import React from "react";
import MenuOne from "./menu/MenuOne";

import TopNavOne from "./top-nav/TopNavOne";

export default function HeaderTwo() {
  return (
    <>
      <TopNavOne />
      <MenuOne containerFluid />
    </>
  );
}
