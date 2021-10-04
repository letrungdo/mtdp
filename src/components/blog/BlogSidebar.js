import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../components/post/Post";
import {
  setCurrentCategory,
  setCurrentTag,
} from "../../redux/actions/blogFilterActions";
import FetchDataHandle from "../other/FetchDataHandle";

const data = {
  categories: [
    { name: "Xây dựng", value: "xay-dung" },
    { name: "Thiết kế", value: "thiet-ke" },
  ],
};

const BlogSidebarSection = ({ children, title, className }) => {
  return (
    <div className={`blog-sidebar-section ${classNames(className)}`}>
      <div className="blog-sidebar-section__header">
        <h5>{title}</h5>
      </div>
      <div className="blog-sidebar-section__content">{children}</div>
    </div>
  );
};

function BlogSidebar({ recentPostsData }) {
  const dispatch = useDispatch();
  const blogFilterState = useSelector((state) => state.blogFilterReducer);
  const { category, tag } = blogFilterState;
  const onChooseCategory = (e, val) => {
    e.preventDefault();
    dispatch(setCurrentCategory(val));
  };
  const onChooseTag = (val) => {
    dispatch(setCurrentTag(val));
  };
  return (
    <div className="blog-sidebar">
      <BlogSidebarSection className="-categories" title="Chuyên mục">
        <ul>
          <li className={classNames({ active: category === "" })}>
            <a
              onClick={(e) => onChooseCategory(e, "")}
              href={process.env.PUBLIC_URL + "#"}
            >
              Tấc cả
            </a>
          </li>
          {data.categories.map((item, index) => (
            <li
              className={classNames({ active: category === item.value })}
              key={index}
            >
              <a onClick={(e) => onChooseCategory(e, item.value)} href="#">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </BlogSidebarSection>
      <BlogSidebarSection className="-recent-post" title="Posts gần đây">
        <FetchDataHandle
          data={recentPostsData}
          renderData={(data) =>
            data.map((item, index) => (
              <Post key={index} type="tiny" data={item} />
            ))
          }
        />
      </BlogSidebarSection>
    </div>
  );
}

export default React.memo(BlogSidebar);
