import { CLOSE_POPUP, SHOW_POPUP } from "../../types/popup";

export function showPopup() {
  return {
    type: SHOW_POPUP,
  };
}
export function closePopup() {
  return {
    type: CLOSE_POPUP,
  };
}
