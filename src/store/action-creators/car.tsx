import { ADD_CAR } from "../../types/car";

export function addCar(car: string) {
  return {
    type: ADD_CAR,
    payload: car,
  };
}
