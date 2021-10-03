import { Button, Col, Image, Row } from "antd";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { formatDate, removeDash } from "../../common/utils";

function Post({ type, className, style, data }) {
  switch (type) {
    case "tiny":
      return (
        <div className={`post-tiny ${classNames(className)}`}>
          <div className="post-tiny-image">
            <Link
              href={process.env.PUBLIC_URL + `/blog/post/[slug]`}
              as={process.env.PUBLIC_URL + `/blog/post/${data.slug}`}
            >
              <a>
                <Image
                  width="100%"
                  title={data.title}
                  src={data.coverImage}
                  alt="Post image"
                  placeholder
                  preview={false}
                />
              </a>
            </Link>
          </div>

          <div className="post-tiny-content">
            <Link
              href={process.env.PUBLIC_URL + `/blog/post/[slug]`}
              as={process.env.PUBLIC_URL + `/blog/post/${data.slug}`}
            >
              <a className="post-tiny-title">{data.title}</a>
            </Link>
            <p className="post-tiny-date">{formatDate(data.publicDate)}</p>
          </div>
        </div>
      );
    case "row":
    default:
      return (
        <Row gutter={30} className={`post -style-one ${classNames(className)}`}>
          <Col xs={24} sm={8}>
            <div className="post-image">
              <Link
                href={process.env.PUBLIC_URL + `/blog/post/[slug]`}
                as={process.env.PUBLIC_URL + `/blog/post/${data.slug}`}
              >
                <a>
                  <Image
                    title={data.title}
                    src={data.coverImage}
                    alt="Post image"
                    placeholder
                    preview={false}
                  />
                </a>
              </Link>
            </div>
          </Col>
          <Col xs={24} sm={16}>
            <div className="post-content">
              <Button type="primary" className="post-category">
                {removeDash(data.category)}
              </Button>
              <Link
                href={process.env.PUBLIC_URL + `/blog/post/[slug]`}
                as={process.env.PUBLIC_URL + `/blog/post/${data.slug}`}
              >
                <a className="post-title">{data.title}</a>
              </Link>
              <div className="post-info">
                <p className="credit date">{formatDate(data.publicDate)}</p>
                <p className="credit comment">{data.comments.length} Comment</p>
              </div>
              <p className="post-description">{data.shortDescription}</p>
              <Link
                href={process.env.PUBLIC_URL + `/blog/post/[slug]`}
                as={process.env.PUBLIC_URL + `/blog/post/${data.slug}`}
              >
                <a className="post-readmore">
                  Read More
                  <span>
                    <i className="arrow_carrot-2right" />
                  </span>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      );
  }
}

export default React.memo(Post);
