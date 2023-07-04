import React from "react";
import { Button, Table } from "react-bootstrap";
import { useActions } from "../hooks/useActions";
import { OrderTableProps } from "../types/propTypes";
import { Order } from "../types/order";
import { useTranslation } from "react-i18next";

export const UncheckedOrdersTable: React.FC<OrderTableProps> = ({ orders }) => {

  const { checkOrder } = useActions();
  const { t } = useTranslation();

  return (
    <div className="active-list-body-orders">
      {orders.length !== 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>{t("bio")}</th>
              <th>{t("car model")}</th>
              <th>{t("phone")}</th>
              <th>{t("passed")}</th>
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
                    {t("add")}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div>
          <h4 className="active-list-body-empty-orders">
            {t("no active orders")}
          </h4>
        </div>
      )}
    </div>
  );
};
