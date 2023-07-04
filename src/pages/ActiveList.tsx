import "./styles/activeList.css";
import React from "react";
import { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Order } from "../types/order";
import { ActiveListView } from "../components/ActiveListView";
import { of } from "rxjs";

const ActiveList: React.FC = () => {
  const { orders } = useTypedSelector((state) => state.order);
  const uncheckedOrders: Order[] = orders.filter((order) => {
    return order.checked === false;
  });
  const checkedOrders: Order[] = orders.filter((order) => {
    return order.checked == true;
  });

  //work with rxjs
  const stream$ = of('Hello', 'World')
  stream$.subscribe(
    number => console.log(number)
  );

  // useEffect(() => {
  //   const saved = JSON.parse(localStorage.getItem("orders") || "[]") as Order[];
  //   saved.forEach((order) => {
  //     addOrder(order);
  //   });
  // }, []);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  return (
    <ActiveListView
      uncheckedOrders={uncheckedOrders}
      checkedOrders={checkedOrders}
    />
  );
};

export default ActiveList;
