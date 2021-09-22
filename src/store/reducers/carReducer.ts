import {
  CarState,
  ADD_CAR,
  CarAction,
  Client,
  CHECK_CAR,
} from "../../types/car";

const vitalya = new Client(1, "Виталик", "mazda", "123456789", false);
const misha = new Client(2, "Миша", "ferrari", "890456789", true);

const initialState: CarState = {
  cars: [vitalya, misha],
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
