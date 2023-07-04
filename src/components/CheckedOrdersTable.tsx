import React from "react";
import { Table } from "react-bootstrap";
import { OrderTableProps } from "../types/propTypes";
import { useTranslation } from "react-i18next";

export const CheckedOrdersTable: React.FC<OrderTableProps> = ({ orders }) => {

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
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.clientName}</td>
                <td>{order.carModel}</td>
                <td>{order.phone}</td>
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
