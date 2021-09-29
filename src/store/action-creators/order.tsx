import { ADD_ORDER, CHECK_ORDER, Order, OrderAction } from "../../types/order";

export function addOrder(order: Order): OrderAction {
  return {
    type: ADD_ORDER,
    payload: order,
  };
}
export function checkOrder(id: number): OrderAction {
  return {
    type: CHECK_ORDER,
    payload: id,
  };
}
