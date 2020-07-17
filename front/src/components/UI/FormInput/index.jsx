import React from "react";

const FormInput = ({
  styleEdit,
  handleChange,
  image,
  title,
  price,
  description,
  isAddForm = false,
}) => (
  <>
    <input
      type="text"
      name="image"
      className={styleEdit}
      onChange={handleChange}
      value={image}
      placeholder={isAddForm ? "Image" : ""}
    />
    <input
      type="text"
      className={styleEdit}
      name="title"
      onChange={handleChange}
      value={title}
      placeholder={isAddForm ? "Title" : ""}
    />
    <input
      type="text"
      className={styleEdit}
      name="price"
      onChange={handleChange}
      value={price}
      placeholder={isAddForm ? "Price" : ""}
    />
    <textarea
      type="text"
      name="description"
      className={styleEdit}
      onChange={handleChange}
      value={description}
      placeholder={isAddForm ? "Description" : ""}
    />
  </>
);
export default FormInput;
