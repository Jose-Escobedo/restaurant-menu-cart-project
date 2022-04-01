import React from "react";

<<<<<<< HEAD
function ReviewItem({ review: { name, content } }) {
  // const [reviews, setReviews] = useState([]);

  // const addNewReview = (newReviewObj) => {
  //  let newReview = [...reviews, newReviewObj]
  //  setReviews(newReview)
  // }
=======
function ReviewItem({review: {name, content}}) {
  
  // const [reviews, setReviews] = useState([]);
  
    
  
  // const addNewReview = (newReviewObj) => {
  //  let newReview = [...reviews, newReviewObj]
  //  setReviews(newReview)
 // }

  
>>>>>>> e216b01f30abac7bab9332fde441a67b47bbc4ca

  return (
    <div className="review-item">
      <h1>{name}</h1>
      <h2>{content}</h2>
    </div>
  );
}


export default ReviewItem;
