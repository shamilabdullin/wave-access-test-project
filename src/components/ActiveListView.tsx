import React from "react";
import { ActiveListViewProps } from "../types/propTypes";
import AddOrderModal from "./AddOrder";
import { CheckedOrdersTable } from "./CheckedOrdersTable";
import { UncheckedOrdersTable } from "./UncheckedOrdersTable";
import { useTranslation } from "react-i18next";

export const ActiveListView: React.FC<ActiveListViewProps> = ({
  uncheckedOrders,
  checkedOrders,
}) => {

	const { t } = useTranslation();

  return (
    <div className="container active-list">
      <div className="active-list-body">
        <div className="active-list-body-elements-1">
          <div className="active-list-body-title">
            <h3>{t("active orders")}</h3>
          </div>
          <hr />
          <UncheckedOrdersTable orders={uncheckedOrders} />
        </div>
        <div className="active-list-body-elements-2">
          <div className="active-list-body-title">
            <h3>{t("finished orders")}</h3>
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
