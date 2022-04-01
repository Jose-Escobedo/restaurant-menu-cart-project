import React, { useState } from "react";
import ReviewItem from "./ReviewItem";

function Reviews({ reviews, handleButtonShowForm }) {
  // const [buttonShow, setButtonShow] = useState(true);
  // function handleButtonShowForm(e) {
  //   setButtonShow(!buttonShow);
  // }
  return (
    <div className="reviews-container">
      <h1 id="review-title">Reviews</h1>
      <div className="reviews">
        {reviews.map((review) => {
          return <ReviewItem key={review.id} review={review} />;
        })}
      </div>
      {/* {buttonShow ? (
        <button onClick={handleButtonShowForm}>Add a review</button>
      ) : null} */}
    </div>
  );
}

export default Reviews;
