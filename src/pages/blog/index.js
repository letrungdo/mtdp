import { Breadcrumb, Col, Pagination, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogSidebar from "../../components/blog/BlogSidebar";
import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import FetchDataHandle from "../../components/other/FetchDataHandle";
import Post from "../../components/post/Post";
import {
  fetchPostsRequest,
  fetchRecentPostsRequest,
} from "../../redux/actions/blogActions";

function blogPage() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const blogState = useSelector((state) => state.blogReducer);
  const blogFilterState = useSelector((state) => state.blogFilterReducer);
  const { allPosts, recentPosts } = blogState;
  const { category, tag } = blogFilterState;
  useEffect(() => {
    dispatch(fetchRecentPostsRequest({ limit: 4 }));
  }, []);
  useEffect(() => {
    dispatch(fetchPostsRequest({ limit: 4, page: currentPage, category, tag }));
  }, [currentPage, blogFilterState]);

  const onPaginationChange = (current) => {
    setCurrentPage(current);
  };
  return (
    <LayoutOne title="Blog">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Trang chủ
          </Breadcrumb.Item>
          <Breadcrumb.Item>Blog</Breadcrumb.Item>
        </Breadcrumb>
        <div className="blog">
          <Row gutter={30}>
            <Col xs={24} lg={18}>
              <div className="blog-content">
                <FetchDataHandle
                  data={allPosts}
                  renderData={(data) => (
                    <Row>
                      {data.map((item, index) => (
                        <Col key={index} span={24}>
                          <Post type="row" data={item} />
                        </Col>
                      ))}
                    </Row>
                  )}
                />
              </div>
              <Pagination
                onChange={onPaginationChange}
                defaultCurrent={currentPage}
                pageSize={4}
                total={allPosts.count}
              />
            </Col>
            <Col xs={24} lg={6}>
              <BlogSidebar recentPostsData={recentPosts} />
            </Col>
          </Row>
        </div>
      </Container>
    </LayoutOne>
  );
}

export default React.memo(blogPage);
