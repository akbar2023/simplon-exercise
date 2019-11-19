import { Action } from '@ngrx/store';
import { Car } from '@core/models/car';

export enum ActionTypes {
  LoadCars = '[Cars] Get cars from API',
  LoadCarsSuccess = '[Cars] Get cars from API Success',
  LoadCarsFailed = '[Cars] Get cars from API Failed',
  LoadCar = '[Car] Get car from API',
  LoadCarSuccess = '[Car] Get car from API Success',
  LoadCarFailed = '[Car] Get car from API Failed',
  DeleteCar = '[Car] Delete car from API',
  DeleteCarSuccess = '[Car] Delete car from API Success',
  DeleteCarFailed = '[Car] Delete car from API Success',
  UpdateCar = '[Car] Update car from API',
  UpdateCarSuccess = '[Car] Update car from API Success',
  UpdateCarFailed = '[Car] Update car from API failed',
  AddCar = '[Car] Add car to API',
  AddCarSuccess = '[Car] Add car to API Success',
  AddCarFailed = '[Car] Add car to API failed',
  GetCar = '[Car] Get car from API',
  GetCarSuccess = '[Car] Get car from API Success',
  GetCarFailed = '[Car] Get car from API failed',
}

export class LoadCars implements Action {
  readonly type = ActionTypes.LoadCars;
}

export class LoadCarsSuccess implements Action {
  readonly type = ActionTypes.LoadCarsSuccess;

  constructor(public cars: Car[]) {}
}

export class LoadCarsFailed implements Action {
  readonly type = ActionTypes.LoadCarsFailed;

  constructor(public error: any) {}
}

export class DeleteCar implements Action {
  readonly type = ActionTypes.DeleteCar;

  constructor(public id: number) {}
}

export class DeleteCarSuccess implements Action {
  readonly type = ActionTypes.DeleteCarSuccess;
}

export class DeleteCarFailed implements Action {
  readonly type = ActionTypes.DeleteCarFailed;

  constructor(public error: any) {}
}

export class UpdateCar implements Action {
  readonly type = ActionTypes.UpdateCar;

  constructor(public car: Car) {}
}

export class UpdateCarSuccess implements Action {
  readonly type = ActionTypes.UpdateCarSuccess;
}

export class UpdateCarFailed implements Action {
  readonly type = ActionTypes.UpdateCarFailed;

  constructor(public error: any) {}
}

export class AddCar implements Action {
  readonly type = ActionTypes.AddCar;

  constructor(public car: Car) {}
}

export class AddCarSuccess implements Action {
  readonly type = ActionTypes.AddCarSuccess;
}

export class AddCarFailed implements Action {
  readonly type = ActionTypes.AddCarFailed;

  constructor(public error: any) {}
}

export class GetCar implements Action {
  readonly type = ActionTypes.GetCar;

  constructor(public id: number) {}
}

export class GetCarSuccess implements Action {
  readonly type = ActionTypes.GetCarSuccess;

  constructor(public car: Car) {}
}

export class GetCarFailed implements Action {
  readonly type = ActionTypes.GetCarFailed;

  constructor(public error: any) {}
}


export type Actions =
  | LoadCars
  | LoadCarsSuccess
  | LoadCarsFailed

  | DeleteCar
  | DeleteCarSuccess
  | DeleteCarFailed

  | UpdateCar
  | UpdateCarSuccess
  | UpdateCarFailed

  | AddCar
  | AddCarSuccess
  | AddCarFailed

  | GetCar
  | GetCarSuccess
  | GetCarFailed;
