import { Breadcrumb, Col, Row } from "antd";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogSidebar from "../../../components/blog/BlogSidebar";
import PostDetailLayout from "../../../components/detail/post/PostDetailLayout";
import LayoutOne from "../../../components/layout/LayoutOne";
import Container from "../../../components/other/Container";
import FetchDataHandle from "../../../components/other/FetchDataHandle";
import PartnerOne from "../../../components/sections/partners/PartnerOne";
import {
  fetchPostDetailRequest,
  fetchRecentPostsRequest,
} from "../../../redux/actions/blogActions";

function postDetail() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug } = router.query;
  const blogState = useSelector((state) => state.blogReducer);
  const { postDetail, recentPosts } = blogState;
  useEffect(() => {
    dispatch(fetchPostDetailRequest(slug));
    dispatch(fetchRecentPostsRequest({ limit: 4 }));
  }, []);
  return (
    <LayoutOne title={postDetail?.data[0]?.title}>
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Trang chủ
          </Breadcrumb.Item>
          <Breadcrumb.Item>Blog</Breadcrumb.Item>
        </Breadcrumb>
        <div className="blog-detail">
          <Row gutter={30}>
            <Col xs={24} lg={18}>
              <FetchDataHandle
                data={postDetail}
                renderData={(data) => <PostDetailLayout data={data[0]} />}
              />
            </Col>
            <Col xs={24} lg={6}>
              <BlogSidebar recentPostsData={recentPosts} />
            </Col>
          </Row>
        </div>
        {/* <PartnerOne /> */}
      </Container>
    </LayoutOne>
  );
}

export default React.memo(postDetail);
