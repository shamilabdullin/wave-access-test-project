import React from "react";
import { Button, Table } from "react-bootstrap";
import { useActions } from "../hooks/useActions";
import { OrderTableProps } from "../types/propTypes";
import { Order } from "../types/order";

export const UncheckedOrdersTable: React.FC<OrderTableProps> = ({ orders }) => {
  const { checkOrder } = useActions();
  return (
    <div className="active-list-body-orders">
      {orders.length !== 0 ? (
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
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.clientName}</td>
                <td>{order.carModel}</td>
                <td>{order.phone}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => {
                      checkOrder(order.id);
                      const orders = JSON.parse(
                        localStorage.getItem("orders") || "[]"
                      ) as Order[];
                      const newOrder = orders[order.id];
                      orders.splice(order.id);
                      newOrder.checked = true;
                      const newOrders = [...orders, newOrder];
                      localStorage.setItem("orders", JSON.stringify(newOrders));
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
