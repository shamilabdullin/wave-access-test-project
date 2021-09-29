import {
  OrderState,
  ADD_ORDER,
  OrderAction,
  Order,
  CHECK_ORDER,
} from "../../types/order";

const initialState: OrderState = {
  orders: [],
};

export const orderReducer = (
  state = initialState,
  action: OrderAction
): OrderState => {
  switch (action.type) {
    case ADD_ORDER:
      return { orders: state.orders.concat(action.payload) };

    case CHECK_ORDER:
      const order = state.orders.find((order) => order.id === action.payload);
      if (order instanceof Order) {
        order.checked = true;
      }
      return { orders: state.orders };

    default:
      return state;
  }
};
