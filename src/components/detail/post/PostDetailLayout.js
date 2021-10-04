import { Button, Image } from "antd";
import React from "react";

function PostDetailContent({ data }) {
  return (
    <div className="post-detail-content">
      <div className="post-detail-content__main">
        <h1 className="post-detail-title">{data.title} </h1>
        <Image
          className="post-detail-image"
          width="100%"
          title={data.title}
          src={data.coverImage}
          alt="Post detail image"
          placeholder
        />
        <p className="post-detail-paragraph">{data.shortDescription}</p>
        <h3 className="post-detail-subtitle"></h3>
        <p className="post-detail-paragraph"></p>
        <p className="post-detail-paragraph"></p>
        <p className="post-detail-paragraph"></p>
      </div>
      <div className="post-detail-content__footer">
        <div className="post-detail-content__footer-tags">
          {data.tag.map((item, index) => (
            <Button key={index}>{item}</Button>
          ))}
        </div>
        {/* <div className="post-detail-content__footer-share">
          <span>Share:</span>
          <SocialIcons />
        </div> */}
      </div>
      {/* <PostDetailComment data={data.comments} /> */}
    </div>
  );
}

export default React.memo(PostDetailContent);
