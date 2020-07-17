import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, updateItem } from "../../redux/items/itemsOperations";
import { getItemsSelector } from "../../redux/items/itemsSelectors";
import style from "./EditForm.module.css";

const INITIAL_STATE = {
  price: "",
  image: "",
  title: "",
  description: "",
};
const EditFrorm = ({ id, closeEdit }) => {
  const [state, setState] = useState(INITIAL_STATE);
  const dispatch = useDispatch();

  const handlDelete = (id) => {
    dispatch(deleteItem(id));
  };
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((state) => ({ ...state, [name]: value }));
  };
  const handleSubmite = (e) => {
    e.preventDefault();
    closeEdit()
    dispatch(updateItem(state));
  };
  const items = useSelector(getItemsSelector);
  useEffect(() => {
    setState(items.find((item) => item.id === id));
  }, [id, items]);



  const wrapperRef = useRef(null);
  useEffect(() => {
    const handleClickOutside =(e)=> {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        closeEdit()
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, closeEdit]);

  return (
    <form onSubmit={handleSubmite} ref={wrapperRef}>
      <input
        type="text"
        name="image"
        className={style.inputFormAdd}
        onChange={handleChange}
        value={state.image}
      />
      <input
        type="text"
        className={style.inputFormAdd}
        name="title"
        onChange={handleChange}
        value={state.title}
      />
      <input
        type="text"
        className={style.inputFormAdd}
        name="price"
        onChange={handleChange}
        value={state.price}
      />
      <textarea
        type="text"
        name="description"
        className={style.inputFormAdd}
        onChange={handleChange}
        value={state.description}
      />

      <div>
        <button type="submit" className={style.btnEdit}>
          Upgrate
        </button>
        <button
          type="button"
          className={style.btnEdit}
          onClick={() => handlDelete(id)}
        >
          Delete
        </button>
      </div>
    </form>
  );
};

export default EditFrorm;
