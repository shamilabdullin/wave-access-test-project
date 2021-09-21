import { combineReducers } from "redux";
import { carReducer } from "./carReducer";

export const rootReducer = combineReducers({
  car: carReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
