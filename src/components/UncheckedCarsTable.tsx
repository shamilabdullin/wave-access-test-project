import React from "react";
import { Button, Table } from "react-bootstrap";
import { useActions } from "../hooks/useActions";
//  import { useTypedSelector } from "../hooks/useTypedSelector";
import { CarsTableProps } from "../types/car";
import { Client } from "../types/car";

export const UncheckedCarsTable: React.FC<CarsTableProps> = ({ cars }) => {
  const { checkCar } = useActions();
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
              <th>Прошел ТО</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.name}</td>
                <td>{car.carModel}</td>
                <td>{car.phone}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => {
                      checkCar(car.id);
                      const orders = JSON.parse(
                        localStorage.getItem("cars") || "[]"
                      ) as Client[];
                      const order = orders![car.id];
                      order.checked = true;
                      const newOrders = [...orders];
                      localStorage.setItem("cars", JSON.stringify(newOrders));
                    }}
                  >
                    Добавить
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
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
