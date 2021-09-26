import "./styles/activeList.css";
import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import AddCarModal from "../components/AddCarModal";
import { Client } from "../types/car";
import { UncheckedCarsTable } from "../components/UncheckedCarsTable";
import { CheckedCarsTable } from "../components/CheckedCarsTable";

const ActiveList: React.FC = () => {
  const { cars } = useTypedSelector((state) => state.car);
  const uncheckedCars: Client[] = cars.filter((car) => {
    return car.checked === false;
  });
  const checkedCars: Client[] = cars.filter((car) => {
    return car.checked == true;
  });

  return (
    <div className="container active-list">
      <div className="active-list-body">
        <div className="active-list-body-elements-1">
          <div className="active-list-body-title">
            <h3>Активные заказы</h3>
          </div>
          <UncheckedCarsTable cars={uncheckedCars} />
        </div>
        <div className="active-list-body-elements-2">
          <div className="active-list-body-title">
            <h2>Неактивные заказы</h2>
          </div>
          <CheckedCarsTable cars={checkedCars} />
        </div>
        <div className="active-list-body-button">
          <AddCarModal />
        </div>
      </div>
    </div>
  );
};

export default ActiveList;
