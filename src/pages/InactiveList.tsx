import "./styles/inactiveList.css";
import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Client } from "../types/car";

const InactiveList: React.FC = () => {
  const { cars } = useTypedSelector((state) => state.car);
  console.log(cars);
  const checkedCars: Client[] = cars.filter((car) => {
    return car.checked == true;
  });
  console.log(checkedCars);
  return (
    <div className="container inactive-list">
      <div className="inactive-list-title">
        <h1>Машины, прошедшие техобслуживание</h1>
      </div>
      <div className="active-list-body">
        <div className="active-list-body-elements">
          {checkedCars.map((car) => (
            <h4 key={car.id}>
              {car.id} {car.name} {car.carModel} {car.phone}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InactiveList;
