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
      return { show: true };

    case CLOSE_POPUP:
      return { show: false };

    default:
      return state;
  }
};
