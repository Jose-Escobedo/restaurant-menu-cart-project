import React from "react";
import Menu from "./Menu";

function Home({ menu, handleCartClick }) {
  return <Menu menu={menu} handleCartClick={handleCartClick} />;
}

export default Home;
