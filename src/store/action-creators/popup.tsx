import { CLOSE_POPUP, PopupAction, SHOW_POPUP } from "../../types/popup";

export function showPopup(): PopupAction {
  return {
    type: SHOW_POPUP,
  };
}
export function closePopup(): PopupAction {
  return {
    type: CLOSE_POPUP,
  };
}
