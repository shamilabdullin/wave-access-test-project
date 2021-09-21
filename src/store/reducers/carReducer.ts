import { CarState, ADD_CAR, CarAction } from "../../types/car";

const initialState: CarState = {
  cars: ["Mazda", "Subaru"],
};

export const carReducer = (
  state = initialState,
  action: CarAction
): CarState => {
  switch (action.type) {
    case ADD_CAR:
      console.log(action.payload);
      return { ...state, cars: state.cars.concat([action.payload]) };

    default:
      return state;
  }
};
