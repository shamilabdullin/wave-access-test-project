import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { checkCar } from "../store/action-creators/car";
import { CarsTableProps } from "../types/car";

export const UncheckedCarsTable: React.FC<CarsTableProps> = ({ cars }) => {
  const dispatch = useDispatch();

  return (
    <div className="active-list-body-orders">
      {cars.length !== 0 ? (
        cars.map((car) => (
          <h4 key={car.id}>
            {car.id} {car.name} {car.carModel} {car.phone}
            <Button
              variant="primary"
              onClick={() => dispatch(checkCar(car.id))}
            >
              Добавить
            </Button>
          </h4>
        ))
      ) : (
        <div>
          <h4 className="active-list-body-empty-orders">
            активных заказов нет
          </h4>
        </div>
      )}
    </div>
  );
};
