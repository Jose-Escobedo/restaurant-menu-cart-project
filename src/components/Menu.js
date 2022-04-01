import React from "react";
import MenuItem from "./MenuItem";

function Menu({ menu, handleCartClick }) {
  return (
    <div className="menu">
      {menu.map((item) => {
        return (
          <MenuItem menu={item} key={item.id} handleClick={handleCartClick} />
        );
      })}
    </div>
  );
}

export default Menu;
