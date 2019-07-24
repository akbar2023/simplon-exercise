import * as fromCarReducer from '@core/store/reducers/car.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
  cars: fromCarReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  cars: fromCarReducer.reducer
};
