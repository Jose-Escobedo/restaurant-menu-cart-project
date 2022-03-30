import React from "react";
import { useState } from "react";
function NewReviewForm ({addNewReview}) {
    const blankReview = {
        name: "",
        content: ""
        }
        const [newReview, setFormData] = useState(blankReview)
        const {name, content} = newReview
    
    const handleForm = (e) => {
  e.preventdefault()
  fetch("https://localhost:3000/reviews", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReview)
    })
      .then (res => res.json())
      .then(addNewReview)
 }
return (
    <div className="ui segment">
    <form onSubmit={handleForm}className="review-form">
      <input 
      type="text"
      name="title"
      value={newReview.name}
      onChange={(e) => setFormData({
        ...newReview, name: e.target.value
      })}
         />
      <textarea 
      type="text"
      name="content"
      placeholder="Write your review here..."
      rows={5}
      value={newReview.content}
      onChange={(e) => setFormData({
        ...newReview, content: e.target.value
      })}
         />
    </form>
    <button onClick= {(e) => setFormData(newReview)}
    className="ui button" type="submit">
    Add Review
  </button>
  </div>
  );
}
export default NewReviewForm;