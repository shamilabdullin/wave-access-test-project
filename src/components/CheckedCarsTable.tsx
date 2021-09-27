import React from "react";
import { Table } from "react-bootstrap";
import { CarsTableProps } from "../types/car";

export const CheckedCarsTable: React.FC<CarsTableProps> = ({ cars }) => {
  return (
    <div className="active-list-body-orders">
      {cars.length !== 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>ФИО</th>
              <th>Модель машины</th>
              <th>Номер телефона</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.name}</td>
                <td>{car.carModel}</td>
                <td>{car.phone}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div>
          <h4 className="inactive-list-body-empty-orders">
            завершенных заказов нет
          </h4>
        </div>
      )}
    </div>
  );
};
