import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { FormGroupProps } from "../types/propTypes";
import { useTranslation } from "react-i18next";

export const PopupFormGroup: React.FC<FormGroupProps> = ({
  title,
  onChange,
  name,
  placeholder,
  valueValid,
}) => {

	const { t } = useTranslation();
	const inputRef = useRef<HTMLInputElement>(null)
	console.log(inputRef.current?.value)

  return (
    <div className="popup-form-group mb-3">
      <Form.Group controlId="">
        <Form.Label>{title}</Form.Label>
        <Form.Control
          type="text"
          name={name}
          onChange={onChange}
          placeholder={placeholder}
		  ref={inputRef}
        />
      </Form.Group>
      {!valueValid  && inputRef.current?.value !== undefined && (
        <div style={{ color: "red" }}>{t("enter correct data")}</div>
      )}
    </div>
  );
};
