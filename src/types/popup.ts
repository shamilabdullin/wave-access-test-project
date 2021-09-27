export interface PopupState {
  show: boolean;
}
export const SHOW_POPUP = "SHOW_POPUP";
export const CLOSE_POPUP = "CLOSE_POPUP";

interface ShowPopupAction {
  type: "SHOW_POPUP";
}
interface ClosePopupAction {
  type: "CLOSE_POPUP";
}

export type PopupAction = ShowPopupAction | ClosePopupAction;
