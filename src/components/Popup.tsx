import React from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { PopupProps } from "../types/car";

export const Popup: React.FC<PopupProps> = ({
  handleShow,
  handleClose,
  show,
  handleSubmit,
}) => {
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
                  <Form.Group controlId="" className="mb-3">
                    <Form.Label>Введите ваши имя и фамилию</Form.Label>
                    <Form.Control type="text" name="name" />
                  </Form.Group>
                  <Form.Group controlId="" className="mb-3">
                    <Form.Label>Введите марку вашего автомобиля</Form.Label>
                    <Form.Control type="text" name="carModel" />
                  </Form.Group>
                  <Form.Group controlId="" className="mb-3">
                    <Form.Label>Введите ваш номер телефона</Form.Label>
                    <Form.Control type="text" name="phone" />
                  </Form.Group>
                  <Form.Group controlId="">
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={handleClose}
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
