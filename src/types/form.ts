export interface FormState {
  nameValid: boolean;
  carValid: boolean;
  phoneValid: boolean;
  nameValue: string;
  carValue: string;
  phoneValue: string;
}
/* eslint-disable no-unused-vars */
export enum FormActionTypes {
  NAME_VALID = "NAME_VALID",
  CAR_VALID = "CAR_VALID",
  PHONE_VALID = "PHONE_VALID",
  NAME_INVALID = "NAME_INVALID",
  CAR_INVALID = "CAR_INVALID",
  PHONE_INVALID = "PHONE_INVALID",
  NAME_VALUE = "NAME_VALUE",
  CAR_VALUE = "CAR_VALUE",
  PHONE_VALUE = "PHONE_VALUE",
}
/* eslint-enable no-unused-vars */
interface NameValidAction {
  type: "NAME_VALID";
}
interface CarValidAction {
  type: "CAR_VALID";
}
interface PhoneValidAction {
  type: "PHONE_VALID";
}
interface NameInvalidAction {
  type: "NAME_INVALID";
}
interface CarInvalidAction {
  type: "CAR_INVALID";
}
interface PhoneInvalidAction {
  type: "PHONE_INVALID";
}
interface NameValueAction {
  type: "NAME_VALUE";
  payload: string;
}
interface CarValueAction {
  type: "CAR_VALUE";
  payload: string;
}
interface PhoneValueAction {
  type: "PHONE_VALUE";
  payload: string;
}

export type FormAction =
  | NameValidAction
  | CarValidAction
  | PhoneValidAction
  | NameInvalidAction
  | CarInvalidAction
  | PhoneInvalidAction
  | NameValueAction
  | CarValueAction
  | PhoneValueAction;
