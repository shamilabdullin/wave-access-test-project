import {
  CLOSE_POPUP,
  PopupAction,
  PopupState,
  SHOW_POPUP,
} from "../../types/popup";

const initialState: PopupState = {
  show: false,
};

export const popupReducer = (
  state = initialState,
  action: PopupAction
): PopupState => {
  switch (action.type) {
    case SHOW_POPUP:
      return { ...state, show: true };

    case CLOSE_POPUP:
      return { ...state, show: false };

    default:
      return state;
  }
};
