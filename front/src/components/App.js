import React, { useState } from "react";
import Header from "./Header";
import Items from "./Items";
import ModalForm from "./ModalForm";
import "./App.css";

const App = () => {
  const [isModalOpen, setIsModulOpen] = useState(false);
  const handleAddItem = () => {
    console.log(isModalOpen);
    setIsModulOpen(!isModalOpen);
  };
  return (
    <div className="App">
      <Header handleAddItem={handleAddItem} />
      <Items />
      {isModalOpen && <ModalForm onCloseModal={handleAddItem} />}
    </div>
  );
};

export default App;
