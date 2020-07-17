import React from "react";
import { useSelector } from "react-redux";
import { getItemsSelector } from "../../redux/items/itemsSelectors";
import Item from "../UI/Item";
import style from "./Items.module.css";

const Items = () => {
  const items = useSelector(getItemsSelector);
  return (
    <div className={style.items}>
      <p className={style.title}>All hot-dogs</p>
      <div className={style.line}></div>
      <ul className={style.itemBox}>
        {items.length > 0 &&
          items.map((item) => (
            <li key={item.id} className={style.item}>
              <Item
                title={item.title}
                srcImage={item.image}
                price={item.price}
                description={item.description}
                id={item.id}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Items;
