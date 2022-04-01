import React from "react";
import { useState } from "react";
<<<<<<< HEAD
function NewReviewForm({ addNewReview }) {
  const blankReview = {
    name: "",
    content: "",
  };
  const [newReview, setFormData] = useState(blankReview);
  const { name, content } = newReview;

  function handleTitleChange(e) {
    setFormData({
      ...newReview,
      name: e.target.value,
    });
    console.log(newReview);
  }

  function handleContentChange(e) {
    setFormData({
      ...newReview,
      content: e.target.value,
    });
    console.log(newReview);
  }

  const handleForm = (e) => {
    e.preventDefault();
    addNewReview(newReview);
    setFormData(blankReview);
  };
  return (
    <div className="form-container">
      <form onSubmit={handleForm} className="review-form">
        <input
          type="text"
          name="title"
          value={newReview.name}
          placeholder="Insert your name here..."
          onChange={handleTitleChange}
        />
        <textarea
          type="text"
          name="content"
          placeholder="Write your review here..."
          rows={5}
          value={newReview.content}
          onChange={handleContentChange}
        />
      </form>
      <button onClick={handleForm} className="form-button" type="submit">
        Add Review
      </button>
    </div>
  );
}
export default NewReviewForm;
=======
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
>>>>>>> e216b01f30abac7bab9332fde441a67b47bbc4ca
