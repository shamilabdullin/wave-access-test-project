import { combineReducers } from "redux";
import { carReducer } from "./carReducer";
import { popupReducer } from "./popupReducer";

export const rootReducer = combineReducers({
  car: carReducer,
  popup: popupReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
