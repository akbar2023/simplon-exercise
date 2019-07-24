import { Action } from '@ngrx/store';

export enum ActionTypes {
  TryGetCars = '[Cars] Get cars from API'
}

export class TryGetCars implements Action {
  readonly type = ActionTypes.TryGetCars;
}

export type Actions = TryGetCars;
