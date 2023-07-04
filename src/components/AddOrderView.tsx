import React, { ChangeEvent } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { PopupProps } from "../types/propTypes";
import { PopupFormGroup } from "./PopupFormGroup";
import { useTranslation } from "react-i18next";

export const AddOrderView: React.FC<PopupProps> = ({
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
  const { t } = useTranslation();

  const { validCar, validName, validPhone } = useActions();
  const { invalidCar, invalidName, invalidPhone } = useActions();

  const handleNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    const target: HTMLInputElement = e.currentTarget as HTMLInputElement;
    const name: string = target.value;
    name === "" || name.length > 20 ? invalidName() : validName();
  };
  const handleCarModelInput = (e: ChangeEvent<HTMLInputElement>) => {
    const target: HTMLInputElement = e.currentTarget as HTMLInputElement;
    const carModel: string = target.value;
    carModel === "" || carModel.length > 20 ? invalidCar() : validCar();
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
        {t("add car")}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t("add a car to the queue")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <Row>
              <Col>
                <Form onSubmit={handleSubmit}>
                  <PopupFormGroup
                    title={t("enter your bio")}
                    onChange={handleNameInput}
                    name="name"
                    value={nameValue}
                    placeholder={t("enter your bio")}
                    valueValid={nameValid}
                  />
                  <PopupFormGroup
                    title={t("enter brand of your car")}
                    onChange={handleCarModelInput}
                    name="carModel"
                    value={carValue}
                    placeholder={t("enter brand of your car")}
                    valueValid={carValid}
                  />
                  <PopupFormGroup
                    title={t("enter phone")}
                    onChange={handlePhoneInput}
                    name="phone"
                    value={phoneValue}
                    placeholder={t("enter phone")}
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
                      {t("add")}
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t("close")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
