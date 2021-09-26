import React from "react";
import { CarsTableProps } from "../types/car";

export const CheckedCarsTable: React.FC<CarsTableProps> = ({ cars }) => {
  return (
    <div className="active-list-body-orders">
      {cars.map((car) => (
        <h4 key={car.id}>
          {car.id} {car.name} {car.carModel} {car.phone}
        </h4>
      ))}
    </div>
  );
};
