import React from "react";
import MenuItem from "./MenuItem";

function Menu({ menu }) {
  return (
    <div className="menu">
      {menu.map((item) => {
        return <MenuItem menu={item} key={item.id} />;
      })}
    </div>
  );
}

export default Menu;
