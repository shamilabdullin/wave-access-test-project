import "./styles/activeList.css";
import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
//  import { addCar } from "../store/action-creators/car";
//  import { useDispatch } from "react-redux";
import AddCarModal from "../components/AddCarModal";
import { Button } from "react-bootstrap";
import { checkCar } from "../store/action-creators/car";
import { useDispatch } from "react-redux";
import { Client } from "../types/car";

const ActiveList: React.FC = () => {
  const { cars } = useTypedSelector((state) => state.car);
  const uncheckedCars: Client[] = cars.filter((car) => {
    return car.checked === false;
  });
  const checkedCars: Client[] = cars.filter((car) => {
    return car.checked == true;
  });
  const dispatch = useDispatch();

  return (
    <div className="container active-list">
      <div className="active-list-title">
        <h1>Машины, записавшиеся на техобслуживание</h1>
      </div>
      <div className="active-list-body">
        <div className="active-list-body-elements">
          {uncheckedCars.map((car) => (
            <h4 key={car.id}>
              {car.id} {car.name} {car.carModel} {car.phone}
              <Button
                variant="primary"
                onClick={() => dispatch(checkCar(car.id))}
              >
                Добавить
              </Button>
            </h4>
          ))}
        </div>
        <div className="active-list-body-elements-2">
          {checkedCars.map((car) => (
            <h4 key={car.id}>
              {car.id} {car.name} {car.carModel} {car.phone}
            </h4>
          ))}
        </div>
        <div className="active-list-body-button"></div>
        <AddCarModal />
      </div>
    </div>
  );
};

export default ActiveList;
