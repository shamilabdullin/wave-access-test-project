import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Client } from "../types/car";
import { Popup } from "./Popup";

const AddCarModal: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { addCar } = useActions();
  const { cars } = useTypedSelector((state) => state.car);
  const id: number = cars[cars.length - 1].id + 1;

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
      handleClose={handleClose}
      handleShow={handleShow}
      show={show}
      handleSubmit={handleSubmit}
    />
  );
};

export default AddCarModal;
