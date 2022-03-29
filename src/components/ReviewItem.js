import React from "react";

function ReviewItem({ review }) {
  return (
    <div className="review-item">
      <h1>{`Name: ${review.name}`}</h1>
      <h2>{`Review: ${review.content}`}</h2>
    </div>
  );
}

export default ReviewItem;
