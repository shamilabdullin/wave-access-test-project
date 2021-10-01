import React from "react";
import { ActiveListViewProps } from "../types/propTypes";
import AddOrderModal from "./AddOrder";
import { CheckedOrdersTable } from "./CheckedOrdersTable";
import { UncheckedOrdersTable } from "./UncheckedOrdersTable";

export const ActiveListView: React.FC<ActiveListViewProps> = ({
  uncheckedOrders,
  checkedOrders,
}) => {
  return (
    <div className="container active-list">
      <div className="active-list-body">
        <div className="active-list-body-elements-1">
          <div className="active-list-body-title">
            <h3>Активные заказы</h3>
          </div>
          <hr />
          <UncheckedOrdersTable orders={uncheckedOrders} />
        </div>
        <div className="active-list-body-elements-2">
          <div className="active-list-body-title">
            <h3>Завершенные заказы</h3>
          </div>
          <hr />
          <CheckedOrdersTable orders={checkedOrders} />
        </div>
        <div className="active-list-body-button">
          <AddOrderModal />
        </div>
      </div>
    </div>
  );
};
