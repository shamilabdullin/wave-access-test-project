import React, { useState } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCar } from "../store/action-creators/car";

const AddCarModal: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(addCar(event.target.carModel.value));
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
                  <Form.Group controlId="">
                    <Form.Label>Введите ваши имя и фамилию</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group controlId="">
                    <Form.Label>Введите марку вашего автомобиля</Form.Label>
                    <Form.Control type="text" name="carModel" />
                  </Form.Group>
                  <Form.Group controlId="">
                    <Form.Label>Введите ваш номер телефона</Form.Label>
                    <Form.Control type="text" />
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

export default AddCarModal;
