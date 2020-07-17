import React, { useState } from "react";
import EditFrom from "../../EditForm";
import style from "./Item.module.css";

const Item = ({ srcImage, title, description, price, id }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");

  const handleEdit = (id) => {
    setIsEdit(!isEdit);
    setEditId(id);
  };
  const closeEdit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <div className={style.containerItem} >
      <img src={srcImage} alt={title} className={style.img} />
      {!isEdit ? (
        <>
          <h5>{title}</h5>
          <p>{price}$</p>
          <p>{description}</p>
          <button
            type="button"
            className={style.btnEdit}
            onClick={() => handleEdit(id)}
          >
            Edit
          </button>
        </>
      ) : (
        <EditFrom id={editId} closeEdit={closeEdit} />
      )}
    </div>
  );
};
export default Item;
