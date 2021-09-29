import React, { ChangeEvent } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import {
  invalidCar,
  invalidName,
  invalidPhone,
} from "../store/action-creators/form";
import { PopupProps } from "../types/propTypes";
import { PopupFormGroup } from "./PopupFormGroup";

export const Popup: React.FC<PopupProps> = ({
  handleShow,
  handleClose,
  show,
  handleSubmit,
}) => {
  const { nameValid, carValid, phoneValid } = useTypedSelector(
    (state) => state.form
  );
  const { validCar, validName, validPhone } = useActions();
  const handleNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    const target: HTMLInputElement = e.currentTarget as HTMLInputElement;
    const name: string = target.value;
    name !== "" || name.length < 20 ? validName() : invalidName();
  };
  const handleCarModelInput = (e: ChangeEvent<HTMLInputElement>) => {
    const target: HTMLInputElement = e.currentTarget as HTMLInputElement;
    const carModel: string = target.value;
    carModel !== "" || carModel.length < 20 ? validCar() : invalidCar();
  };
  const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
    const target: HTMLInputElement = e.currentTarget as HTMLInputElement;
    const phone: string = target.value;
    phone.length > 6 ?? phone.length < 13 ? validPhone() : invalidPhone();
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Добавить машину
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добавьте машину в очередь</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <Row>
              <Col>
                <Form onSubmit={handleSubmit}>
                  <PopupFormGroup
                    title={"Введите ваше ФИО"}
                    onChange={handleNameInput}
                    name="name"
                  />
                  <PopupFormGroup
                    title={"Введите марку вашего автомобиля"}
                    onChange={handleCarModelInput}
                    name="carModel"
                  />
                  <PopupFormGroup
                    title={"Введите ваш номер телефона"}
                    onChange={handlePhoneInput}
                    name="phone"
                  />
                  <Form.Group controlId="">
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={
                        nameValid && carValid && phoneValid
                          ? handleClose
                          : handleShow
                      }
                    >
                      Добавить
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
