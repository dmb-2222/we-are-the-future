import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/items/itemsOperations";
import FormInput from '../UI/FormInput'

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
  const { image, title, price, description } = state;
  return (
    <div className={style.overlay} data-modal="modal" name="modal">
      <form onSubmit={handleSubmite} className={style.modal}>
        <h3>Add new hot-dog</h3>
        <FormInput
        image={image}
        title={title}
        price={price}
        description={description}
        handleChange={handleChange}
        styleEdit={style.inputFormAdd}
        isAddForm={true}
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
