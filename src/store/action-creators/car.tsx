import { ADD_CAR, CHECK_CAR, Client } from "../../types/car";

export function addCar(car: Client) {
  return {
    type: ADD_CAR,
    payload: car,
  };
}
export function checkCar(id: number) {
  return {
    type: CHECK_CAR,
    payload: id,
  };
}
