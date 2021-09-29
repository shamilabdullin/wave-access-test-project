import * as CarActionCreators from "./order";
import * as PopupActionCreators from "./popup";
import * as FormActionCreators from "./form";

export default {
  ...CarActionCreators,
  ...PopupActionCreators,
  ...FormActionCreators,
};
