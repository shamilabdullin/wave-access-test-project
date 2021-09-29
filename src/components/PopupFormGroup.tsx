import React from "react";
import { Form } from "react-bootstrap";
import { FormGroupProps } from "../types/propTypes";

export const PopupFormGroup: React.FC<FormGroupProps> = ({
  title,
  onChange,
  name,
}) => {
  return (
    <Form.Group controlId="" className="mb-3">
      <Form.Label>{title}</Form.Label>
      <Form.Control type="text" name={name} onChange={onChange} />
    </Form.Group>
  );
};
