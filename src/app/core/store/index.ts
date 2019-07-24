import * as fromCarReducer from '@core/store/reducers/car.reducer';

export interface State {
  cars: fromCarReducer.State;
}

export const reducers: State = {
  cars: fromCarReducer.reducer
};
