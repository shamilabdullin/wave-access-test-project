import React from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Order } from "../types/order";
import { Popup } from "./AddOrderView";

const AddOrderModal: React.FC = () => {
  const { addOrder, showPopup, closePopup } = useActions();
  const { invalidName, invalidCar, invalidPhone } = useActions();
  const { orders } = useTypedSelector((state) => state.order);
  const { show } = useTypedSelector((state) => state.popup);
  const { nameValid, carValid, phoneValid } = useTypedSelector(
    (state) => state.form
  );

  const handleSubmit = (event: React.SyntheticEvent) => {
    let id = 0;
    if (orders.length) {
      id = orders[orders.length - 1].id + 1;
    }
    event.preventDefault();
    const target = event.target as typeof event.target & {
      name: { value: string };
      carModel: { value: string };
      phone: { value: string };
    };
    if (nameValid && carValid && phoneValid) {
      const order = new Order(
        id,
        target.name.value,
        target.carModel.value,
        target.phone.value,
        false
      );
      addOrder(order);
      invalidName();
      invalidCar();
      invalidPhone();
    }
  };

  return (
    <Popup
      handleClose={closePopup}
      handleShow={showPopup}
      show={show}
      handleSubmit={handleSubmit}
    />
  );
};

export default AddOrderModal;
