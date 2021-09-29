import { combineReducers } from "redux";
import { formReducer } from "./formReducer";
import { orderReducer } from "./orderReducer";
import { popupReducer } from "./popupReducer";

export const rootReducer = combineReducers({
  order: orderReducer,
  popup: popupReducer,
  form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
