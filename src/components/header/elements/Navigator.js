import Link from "next/link";
import React from "react";
import navigatorData from "../../../data/navigator.json";

function Navigator() {
  return (
    <ul className="navigation">
      <li className="navigation-item">
        <Link href={navigatorData.HOME.href}>
          <a className="navigation-item__title">{navigatorData.HOME.title}</a>
        </Link>
      </li>
      {/* <li className="navigation-item">
        <Link href={process.env.PUBLIC_URL + navigatorData.BLOG.href}>
          <a className="navigation-item__title">{navigatorData.BLOG.title}</a>
        </Link>
      </li> */}
      <li className="navigation-item">
        <Link href={process.env.PUBLIC_URL + navigatorData.PAGES.href}>
          <a className="navigation-item__title">
            {navigatorData.PAGES.title}
            <i className="fad fa-angle-down" />
          </a>
        </Link>
        <ul className="navigation-item__submenu">
          {navigatorData.PAGES.subMenu.map((item, index) => (
            <li key={index}>
              <Link href={process.env.PUBLIC_URL + item.href}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li className="navigation-item">
        <Link href={process.env.PUBLIC_URL + navigatorData.CONTACT.href}>
          <a className="navigation-item__title">
            {navigatorData.CONTACT.title}
          </a>
        </Link>
      </li>
      <li className="navigation-item">
        <Link href={process.env.PUBLIC_URL + navigatorData.ABOUT.href}>
          <a className="navigation-item__title">{navigatorData.ABOUT.title}</a>
        </Link>
      </li>
    </ul>
  );
}

export default React.memo(Navigator);
