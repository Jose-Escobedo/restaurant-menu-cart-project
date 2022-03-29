import Navbar from "./Navbar.js";
import { Route, Switch } from "react-router-dom";
import Reviews from "./Reviews";
import Home from "./Home";
import About from "./About";
import React, { useState, useEffect } from "react";

function App() {
  const [menu, setMenu] = useState([]);
  const [reviews, setReviews] = useState([]);

  function handleRenderMenu(data) {
    setMenu(data);
    console.log(data);
  }

  function handleRenderReviews(data) {
    setReviews(data);
    console.log(data);
  }

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
          <Home menu={menu} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/reviews">
          <Reviews reviews={reviews} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
