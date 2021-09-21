import "./styles/activeList.css";
import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
//  import { addCar } from "../store/action-creators/car";
//  import { useDispatch } from "react-redux";
import AddCarModal from "../components/AddCarModal";

const ActiveList: React.FC = () => {
  const { cars } = useTypedSelector((state) => state.car);
  console.log(cars);
  return (
    <div className="container active-list">
      <div className="active-list-title">
        <h1>Машины, записавшиеся на тех обслуживание</h1>
      </div>
      <div className="active-list-body">
        <div className="active-list-body-elements">{cars}</div>
        <div className="active-list-body-button"></div>
        <AddCarModal />
      </div>
    </div>
  );
};

export default ActiveList;
