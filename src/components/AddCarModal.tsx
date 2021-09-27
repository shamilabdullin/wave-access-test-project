import React from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Client } from "../types/car";
import { Popup } from "./Popup";

const AddCarModal: React.FC = () => {
  const { addCar } = useActions();
  const { showPopup } = useActions();
  const { closePopup } = useActions();
  const { cars } = useTypedSelector((state) => state.car);
  const { show } = useTypedSelector((state) => state.popup);
  let id = 0;
  if (cars.length) {
    id = cars[cars.length - 1].id + 1;
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const client = new Client(
      id,
      event.target.name.value,
      event.target.carModel.value,
      event.target.phone.value,
      false
    );
    addCar(client);
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

export default AddCarModal;
