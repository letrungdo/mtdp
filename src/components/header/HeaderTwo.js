import React from "react";
import MenuOne from "./menu/MenuOne";
import TopNavOne from "./top-nav/TopNavOne";

export default function HeaderTwo({ containerFluid }) {
  return (
    <>
      <TopNavOne containerFluid={containerFluid} />
      <MenuOne containerFluid={containerFluid} />
    </>
  );
}
