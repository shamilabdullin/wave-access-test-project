import { FormAction, FormActionTypes, FormState } from "../../types/form";

const initialState: FormState = {
  nameValid: false,
  carValid: false,
  phoneValid: false,
  nameValue: "",
  carValue: "",
  phoneValue: "",
};

export const formReducer = (
  state = initialState,
  action: FormAction
): FormState => {
  switch (action.type) {
    case FormActionTypes.NAME_VALID:
      return { ...state, nameValid: true };

    case FormActionTypes.CAR_VALID:
      return { ...state, carValid: true };

    case FormActionTypes.PHONE_VALID:
      return { ...state, phoneValid: true };

    case FormActionTypes.NAME_INVALID:
      return { ...state, nameValid: false };

    case FormActionTypes.CAR_INVALID:
      return { ...state, carValid: false };

    case FormActionTypes.PHONE_INVALID:
      return { ...state, phoneValid: false };

    case FormActionTypes.NAME_VALUE:
      return { ...state, nameValue: action.payload };

    case FormActionTypes.CAR_VALUE:
      return { ...state, carValue: action.payload };

    case FormActionTypes.PHONE_VALUE:
      return { ...state, phoneValue: action.payload };

    default:
      return state;
  }
};
