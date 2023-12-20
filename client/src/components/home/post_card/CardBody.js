import React, { useState } from "react";
import Carousel from "../../Carousel";

const CardBody = ({ post, theme }) => {
  const [readMore, setReadMore] = useState(false);

  const maxWidth = 400;
  const maxHeight = 400;
  return (
    <div className="card_body">
      <div
        className="card_body-content"
        style={{
          filter: theme ? "invert(1)" : "invert(0)",
          color: theme ? "white" : "#111",
        }}
      >
        <span>
          {post.content.length < 60
            ? post.content
            : readMore
            ? post.content + " "
            : post.content.slice(0, 60) + " ....."}
        </span>
        {post.content.length > 60 && (
          <span className="readMore" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Hide content" : "Read more"}
          </span>
        )}
      </div>
      {post.images.length > 0 && (
        <Carousel
          images={post.images}
          id={post._id}
          maxWidth={maxWidth}
          maxHeight={maxHeight}
        />
      )}
    </div>
  );
};

export default CardBody;
