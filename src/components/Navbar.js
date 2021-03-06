import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  width: "90px",
  padding: "20px 40px 20px 20px",
  margin: "0px",
  textDecoration: "none",
  color: "white",
};

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{ background: "black" }}
        >
          {" "}
          Home{" "}
        </NavLink>{" "}
        <NavLink
          to="/about"
          exact
          style={linkStyles}
          activeStyle={{ background: "black" }}
        >
          {" "}
          About{" "}
        </NavLink>{" "}
        <NavLink
          to="/reviews"
          exact
          style={linkStyles}
          activeStyle={{ background: "black" }}
        >
          {" "}
          Reviews{" "}
        </NavLink>
      </ul>
      <div className="title-cart-container">
        <h1>Frank and Jose's Italian Kitchen</h1>
        <NavLink to="/cart" exact style={linkStyles}>
          <img id="img-cart" src={"./images/shopping-cart.png"}></img>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
