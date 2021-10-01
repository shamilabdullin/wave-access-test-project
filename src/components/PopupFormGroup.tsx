import React from "react";
import { Form } from "react-bootstrap";
import { FormGroupProps } from "../types/propTypes";

export const PopupFormGroup: React.FC<FormGroupProps> = ({
  title,
  onChange,
  name,
  placeholder,
  valueValid,
}) => {
  return (
    <div className="popup-form-group mb-3">
      <Form.Group controlId="">
        <Form.Label>{title}</Form.Label>
        <Form.Control
          type="text"
          name={name}
          onChange={onChange}
          placeholder={placeholder}
        />
      </Form.Group>
      {!valueValid && (
        <div style={{ color: "red" }}>Введите корректные данные</div>
      )}
    </div>
  );
};
