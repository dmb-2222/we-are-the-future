import React from "react";
import style from "./Header.module.css";
const Header = ({ handleAddItem }) => (
  <div className={style.header}>
    <div>LogoDogo</div>
    <button onClick={handleAddItem}>Add hot-dog</button>
  </div>
);
export default Header;
