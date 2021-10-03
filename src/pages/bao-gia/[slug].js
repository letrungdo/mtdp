import { Breadcrumb, Image } from "antd";
import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
// import PostBody from "../../components/post/PostBody";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <LayoutOne title={post.title}>
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Trang chủ
          </Breadcrumb.Item>
          <Breadcrumb.Item>Báo giá</Breadcrumb.Item>
        </Breadcrumb>
        <Head>
          <meta name="title" content="Xây dựng Mai Thạch Đại Phát" />
          <meta name="description" content={post.description} />
          <meta name="image" content={`${process.env.PUBLIC_URL}${post.ogImage.url}`} />
          <meta property="og:image" content={`${process.env.PUBLIC_URL}${post.ogImage.url}`} />
        </Head>
        <div className={"bao-gia"}>
          <h1 className="bao-gia-title">{post.title}</h1>
          <p>{post.description}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </Container>
    </LayoutOne>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "description",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
