import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadingSelector } from "../redux/loading/loadingSelectors";
import { getItem } from "../redux/items/itemsOperations";
import Header from "./Header";
import Items from "./Items";
import ModalForm from "./ModalForm";
import Loader from "./Loader";
import "./App.css";

const App = () => {
  const [isModalOpen, setIsModulOpen] = useState(false);
  const handleAddItem = () => {
    setIsModulOpen(!isModalOpen);
  };

  const dispatch = useDispatch();
  const isLoad = useSelector(loadingSelector);
  const memoizedCallback = useCallback(() => {
    dispatch(getItem());
  }, [dispatch]);

  useEffect(() => {
    memoizedCallback();
  }, [memoizedCallback]);

  return (
    <div className="App">
      <Header handleAddItem={handleAddItem} />
      <Items />
      {isModalOpen && <ModalForm onCloseModal={handleAddItem} />}
      {isLoad && <Loader />}
    </div>
  );
};

export default App;
