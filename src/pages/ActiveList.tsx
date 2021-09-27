import "./styles/activeList.css";
import React from "react";
import { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import AddCarModal from "../components/AddCarModal";
import { Client } from "../types/car";
import { UncheckedCarsTable } from "../components/UncheckedCarsTable";
import { CheckedCarsTable } from "../components/CheckedCarsTable";
import { useActions } from "../hooks/useActions";

const ActiveList: React.FC = () => {
  const { cars } = useTypedSelector((state) => state.car);
  const uncheckedCars: Client[] = cars.filter((car) => {
    return car.checked === false;
  });
  const checkedCars: Client[] = cars.filter((car) => {
    return car.checked == true;
  });

  const { addCar } = useActions();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cars") || "[]") as Client[];
    saved.forEach((car, i, saved) => {
      addCar(car);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(cars));
  }, [cars]);

  return (
    <div className="container active-list">
      <div className="active-list-body">
        <div className="active-list-body-elements-1">
          <div className="active-list-body-title">
            <h3>Активные заказы</h3>
          </div>
          <hr />
          <UncheckedCarsTable cars={uncheckedCars} />
        </div>
        <div className="active-list-body-elements-2">
          <div className="active-list-body-title">
            <h3>Завершенные заказы</h3>
          </div>
          <hr />
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
