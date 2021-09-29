import { FormAction, FormActionTypes } from "../../types/form";

export function validName(): FormAction {
  return {
    type: FormActionTypes.NAME_VALID,
  };
}
export function validCar(): FormAction {
  return {
    type: FormActionTypes.CAR_VALID,
  };
}
export function validPhone(): FormAction {
  return {
    type: FormActionTypes.PHONE_VALID,
  };
}
export function invalidName(): FormAction {
  return {
    type: FormActionTypes.NAME_INVALID,
  };
}
export function invalidCar(): FormAction {
  return {
    type: FormActionTypes.CAR_INVALID,
  };
}
export function invalidPhone(): FormAction {
  return {
    type: FormActionTypes.PHONE_INVALID,
  };
}
