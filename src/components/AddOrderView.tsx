import React, { ChangeEvent } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
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
  const { nameValue, carValue, phoneValue } = useTypedSelector(
    (state) => state.form
  );
  const { validCar, validName, validPhone } = useActions();
  const { invalidCar, invalidName, invalidPhone } = useActions();
  const handleNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    const target: HTMLInputElement = e.currentTarget as HTMLInputElement;
    const name: string = target.value;
    name == "" || name.length > 20 ? invalidName() : validName();
  };
  const handleCarModelInput = (e: ChangeEvent<HTMLInputElement>) => {
    const target: HTMLInputElement = e.currentTarget as HTMLInputElement;
    const carModel: string = target.value;
    carModel == "" || carModel.length > 20 ? invalidCar() : validCar();
  };
  const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
    const target: HTMLInputElement = e.currentTarget as HTMLInputElement;
    const phone: string = target.value;
    const reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    reg.test(phone) ? validPhone() : invalidPhone();
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
                    value={nameValue}
                    placeholder="Введите ФИО"
                    valueValid={nameValid}
                  />
                  <PopupFormGroup
                    title={"Введите марку вашего автомобиля"}
                    onChange={handleCarModelInput}
                    name="carModel"
                    value={carValue}
                    placeholder="Введите марку автомобиля"
                    valueValid={carValid}
                  />
                  <PopupFormGroup
                    title={"Введите ваш номер телефона"}
                    onChange={handlePhoneInput}
                    name="phone"
                    value={phoneValue}
                    placeholder="Введите номер телефона"
                    valueValid={phoneValid}
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
