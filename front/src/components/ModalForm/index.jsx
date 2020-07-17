import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/items/itemsOperations";

import style from "./ModalForm.module.css";

const INITIAL_STATE = {
  price: "",
  image: "",
  title: "",
  description: "",
};

const ModalForm = ({ onCloseModal}) => {
  const [state, setState] = useState(INITIAL_STATE);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((state) => ({ ...state, [name]: value }));
  };

  const clear = () => {
    setState(INITIAL_STATE);
  };

  const dispatch = useDispatch();

  const handleSubmite = (e) => {
    e.preventDefault();
    dispatch(addItem(state));
    clear();
    onCloseModal();
  };

  return (
    <div className={style.overlay} data-modal="modal" name="modal">
      <form onSubmit={handleSubmite} className={style.modal}>
        <h3>Add new hot-dog</h3>
        <input
          type="text"
          placeholder="Price"
          className={style.inputFormAdd}
          name="price"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Title"
          className={style.inputFormAdd}
          name="title"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className={style.inputFormAdd}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image"
          className={style.inputFormAdd}
          onChange={handleChange}
          required
        />
        <div>
          <button
            className={style.btnForm}
            type="button"
            onClick={onCloseModal}
          >
            No thanks
          </button>
          <button type="submit" className={style.btnForm}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
export default ModalForm;
