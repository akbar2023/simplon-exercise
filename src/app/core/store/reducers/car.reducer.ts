import { Car } from '@core/models/car';
import * as fromCarActions from '@core/store/actions/car.actions';

export interface State {
  list: Car[];
  selectedCar: Car;
}

export const initialState: State = {
  list: [],
  selectedCar: null
};

export function reducer(state = initialState, action: fromCarActions.Actions): State {
  switch (action.type) {
    case fromCarActions.ActionTypes.LoadCarsSuccess:
      return {
        ...state,
        list: action.cars
      };

    case fromCarActions.ActionTypes.DeleteCar:
      return {
        ...state,
        list: state.list.filter(car => car.id !== action.id)
      };

    case fromCarActions.ActionTypes.UpdateCar:
      return {
        ...state,
        list: state.list.filter(car => car)
      };

    case fromCarActions.ActionTypes.AddCar:
      return {
        ...state,
        list: state.list.filter(car => car)
      };

    case fromCarActions.ActionTypes.GetCarSuccess:
      return {
        ...state,
        selectedCar: action.car
      };

    default:
      return state;
  }
}
