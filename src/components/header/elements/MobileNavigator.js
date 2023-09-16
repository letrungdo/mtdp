import { Menu } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import navigatorData from "../../../data/navigator.json";
import SocialIcons from "../../other/SocialIcons";

function MobileNavigator() {
  const { SubMenu } = Menu;
  const [current, setCurrent] = useState("mail");
  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div className="menu-mobile">
      <Menu
        className="menu-mobile-navigator"
        onClick={handleClick}
        selectedKeys={[current]}
        mode="inline"
      >
        <Menu.Item key="homepage">
          <Link href={process.env.PUBLIC_URL + navigatorData.HOME.href}>
            {navigatorData.HOME.title}
          </Link>
        </Menu.Item>
        {/* <SubMenu key="shop" title={navigatorData.SHOP.title}>
          <SubMenu key="shop layout" title="Layout shop">
            {navigatorData.SHOP.subMenu.layout.map((item) => (
              <Menu.Item key={item.title}>
                <Link href={process.env.PUBLIC_URL + item.href}>
                  <a> {item.title}</a>
                </Link>
              </Menu.Item>
            ))}
          </SubMenu>
          <SubMenu key="shop detail" title="Detail shop">
            {navigatorData.SHOP.subMenu.detail.map((item) => (
              <Menu.Item key={item.title}>
                <Link href={process.env.PUBLIC_URL + item.href}>
                  <a> {item.title}</a>
                </Link>
              </Menu.Item>
            ))}
          </SubMenu>
          <SubMenu key="shop pages" title="Pages shop">
            {navigatorData.SHOP.subMenu.pages.map((item) => (
              <Menu.Item key={item.title}>
                <Link href={process.env.PUBLIC_URL + item.href}>
                  <a> {item.title}</a>
                </Link>
              </Menu.Item>
            ))}
          </SubMenu>
        </SubMenu> */}
        {/* <Menu.Item key="blog">
          <Link href={process.env.PUBLIC_URL + navigatorData.BLOG.href}>
            <a>{navigatorData.BLOG.title}</a>
          </Link>
        </Menu.Item> */}
        <SubMenu key="pages" title={navigatorData.PAGES.title}>
          {navigatorData.PAGES.subMenu.map((item) => (
            <Menu.Item key={item.title}>
              <Link href={process.env.PUBLIC_URL + item.href}>
                 {item.title}
              </Link>
            </Menu.Item>
          ))}
        </SubMenu>
        <Menu.Item key="contact">
          <Link href={process.env.PUBLIC_URL + navigatorData.CONTACT.href}>
            {navigatorData.CONTACT.title}
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link href={process.env.PUBLIC_URL + navigatorData.ABOUT.href}>
            {navigatorData.ABOUT.title}
          </Link>
        </Menu.Item>
      </Menu>
      <div className="menu-mobile-functions">
        {/* <Link href={process.env.PUBLIC_URL + "/other/login"}>
          <a className="menu-mobile-functions__login">Login / Register</a>
        </Link> */}
        <SocialIcons />
      </div>
    </div>
  );
}

export default React.memo(MobileNavigator);
