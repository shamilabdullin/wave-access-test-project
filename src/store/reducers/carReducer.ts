import {
  CarState,
  ADD_CAR,
  CarAction,
  Client,
  CHECK_CAR,
} from "../../types/car";
import { client1, client2, client3, client4 } from "../../models/models";

const initialState: CarState = {
  cars: [client1, client2, client3, client4], //  initial state with 4 clients just for example
};

export const carReducer = (
  state = initialState,
  action: CarAction
): CarState => {
  switch (action.type) {
    case ADD_CAR:
      console.log(action.payload);
      return { ...state, cars: state.cars.concat(action.payload) };

    case CHECK_CAR:
      const client = state.cars.find((client) => client.id === action.payload);
      if (client instanceof Client) {
        client.checked = true;
      }
      return { ...state, cars: state.cars };

    default:
      return state;
  }
};
