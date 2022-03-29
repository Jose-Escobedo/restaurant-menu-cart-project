import React from "react";
import ReviewItem from "./ReviewItem";

function Reviews({ reviews }) {
  return (
    <div className="reviews-container">
      <h1>Reviews</h1>
      <div className="reviews">
        {reviews.map((review) => {
          return <ReviewItem key={review.id} review={review} />;
        })}
      </div>
      <button>Add a review</button>
    </div>
  );
}

export default Reviews;
