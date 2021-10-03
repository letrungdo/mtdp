import { Drawer } from "antd";
import React, { useState } from "react";
import MobileNavigator from "./MobileNavigator";

function MobileMenuOpener() {
  const [visible, setVisible] = useState(false);
  const onShowDrawer = () => {
    setVisible(true);
  };
  const onCloseDrawer = () => {
    setVisible(false);
  };
  return (
    <>
      <a onClick={onShowDrawer} className="menu-mobile-opener" href="#">
        <i className="fal fa-bars fa-2x" />
      </a>
      <Drawer
        title=""
        placement="right"
        closable={true}
        onClose={onCloseDrawer}
        visible={visible}
        placement="left"
        width={320}
        closeIcon={<i class="fad fa-times fa-2x" />}
      >
        <MobileNavigator />
      </Drawer>
    </>
  );
}

export default React.memo(MobileMenuOpener);
