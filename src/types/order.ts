export class Order {
  constructor(
    id: number,
    clientName: string,
    carModel: string,
    phone: string,
    checked: boolean
  ) {
    this.id = id;
    this.clientName = clientName;
    this.carModel = carModel;
    this.phone = phone;
    this.checked = checked;
  }
  id: number;
  clientName: string;
  carModel: string;
  phone: string;
  checked: boolean;
}

export interface OrderState {
  orders: Order[];
}

export const ADD_ORDER = "ADD_ORDER";
export const CHECK_ORDER = "CHECK_ORDER";

interface AddOrderAction {
  type: "ADD_ORDER";
  payload: Order;
}
interface CheckOrderAction {
  type: "CHECK_ORDER";
  payload: number;
}

export type OrderAction = AddOrderAction | CheckOrderAction;
