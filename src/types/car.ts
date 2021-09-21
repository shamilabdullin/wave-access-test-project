export interface CarState {
  cars: any[];
}

export const ADD_CAR = "ADD_CAR";

interface AddCarAction {
  type: "ADD_CAR";
  payload: [];
}

export type CarAction = AddCarAction;
