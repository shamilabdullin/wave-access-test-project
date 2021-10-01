import { ChangeEvent } from "react";
import { Order } from "./order";

export type ActiveListViewProps = {
  uncheckedOrders: Order[];
  checkedOrders: Order[];
};
export type FormInputProps = {
  title: string;
  validationFunction: () => void;
};
export type OrderTableProps = {
  orders: Order[];
};
export type PopupProps = {
  handleShow: () => void;
  handleClose: () => void;
  show: boolean;
  handleSubmit: (event: React.FormEvent) => void;
};
export type FormGroupProps = {
  title: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: any;
  placeholder: string;
  valueValid: any;
}