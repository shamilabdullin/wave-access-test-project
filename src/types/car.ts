export class Client {
  constructor(
    id: number,
    name: string,
    carModel: string,
    phone: string,
    checked: boolean
  ) {
    this.id = id;
    this.name = name;
    this.carModel = carModel;
    this.phone = phone;
    this.checked = checked;
  }
  id: number;
  name: string;
  carModel: string;
  phone: string;
  checked: boolean;
}

export interface CarState {
  cars: Client[];
}

export const ADD_CAR = "ADD_CAR";
export const CHECK_CAR = "CHECK_CAR";

interface AddCarAction {
  type: "ADD_CAR";
  payload: [];
}
interface CheckCarAction {
  type: "CHECK_CAR";
  payload: number;
}

export type CarAction = AddCarAction | CheckCarAction;

export type CarsTableProps = {
  cars: Client[];
};
