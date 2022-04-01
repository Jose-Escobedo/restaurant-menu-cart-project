import Navbar from "./Navbar.js";
import { Route, Switch } from "react-router-dom";
import Reviews from "./Reviews";
import Home from "./Home";
import About from "./About";
import NewReviewForm from "./NewReviewForm";
import React, { useState, useEffect } from "react";
import Cart from "./Cart";

function App() {
  const [menu, setMenu] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [total, setTotal] = useState(0);

  function handleTotal(price) {
    setTotal(total + price);
    console.log(menu);
  }

  function handleRenderMenu(data) {
    setMenu(data);
    console.log(data);
  }

  function handleRenderReviews(data) {
    setReviews(data);
    console.log(data);
  }

<<<<<<< HEAD
  function handleCartClick(id, cart, price) {
    setMenu(
      menu.map((item) => (id === item.id ? { ...item, isCart: cart } : item))
    );
  }

  const addNewReview = (e) => {
    // let newReview = [...reviews, newReviewObj]
    // setReviews(newReview)

    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e),
    })
      .then((res) => res.json())
      .then(setReviews([...reviews, e]));
  };
=======
 const addNewReview = (e) => {
  // let newReview = [...reviews, newReviewObj]
  // setReviews(newReview)
  e.preventdefault()
  fetch("https://localhost:3000/reviews", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(e)
    })
      .then (res => res.json())
      .then(setReviews([...reviews, e]))
 }

>>>>>>> e216b01f30abac7bab9332fde441a67b47bbc4ca

  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((res) => res.json())
      .then(handleRenderMenu);
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then(handleRenderReviews);
  }, []);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home
            menu={menu}
            handleCartClick={(id) => handleCartClick(id, true)}
          />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/reviews">
<<<<<<< HEAD
          <Reviews reviews={reviews} />
          <NewReviewForm
            addNewReview={addNewReview}
            NewReviewForm={NewReviewForm}
          />
        </Route>
        <Route exact path={"/cart"}>
          <Cart
            menu={menu.filter((item) => item.isCart)}
            handleClick={(id) => handleCartClick(id, false)}
            handleTotal={(price) => handleTotal(price)}
          />
=======
          <Reviews  reviews={reviews} />
          <NewReviewForm addNewReview={addNewReview}
          NewReviewForm={NewReviewForm} />
>>>>>>> e216b01f30abac7bab9332fde441a67b47bbc4ca
        </Route>
      </Switch>
    </>
  );
}

export default App;
