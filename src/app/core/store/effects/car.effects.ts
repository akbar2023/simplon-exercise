import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromCarActions from '@core/store/actions/car.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CarService } from '@core/services/car.service';
import { of } from 'rxjs';

@Injectable()
export class CarEffects {

  @Effect()
  LoadCars$ = this.actions$
    .pipe(
      ofType(fromCarActions.ActionTypes.LoadCars),
      switchMap(() => this.carService.getCars()),
      map((cars) => new fromCarActions.LoadCarsSuccess(cars)),
      catchError((error) => of(new fromCarActions.LoadCarsFailed(error)))
    );


  @Effect()
    DeleteCar$ = this.actions$
    .pipe(
      ofType(fromCarActions.ActionTypes.DeleteCar),
      switchMap((action: fromCarActions.DeleteCar) => this.carService.deleteCar(action.id)),
      map(() => new fromCarActions.DeleteCarSuccess()),
      catchError((error) => of(new fromCarActions.DeleteCarFailed(error)))
    );

    @Effect()
    UpdateCar$ = this.actions$
    .pipe(
      ofType(fromCarActions.ActionTypes.UpdateCar),
      switchMap((action: fromCarActions.UpdateCar) => this.carService.updateCar(action.car)),
      map(() => new fromCarActions.UpdateCarSuccess()),
      catchError((error) => of(new fromCarActions.UpdateCarFailed(error)))
    );

    @Effect()
    AddCar$ = this.actions$
    .pipe(
      ofType(fromCarActions.ActionTypes.AddCar),
      switchMap((action: fromCarActions.AddCar) => this.carService.addCar(action.car)),
      map(() => new fromCarActions.AddCarSuccess()),
      catchError((error) => of(new fromCarActions.AddCarFailed(error)))
    );

    @Effect()
    GetCar$ = this.actions$
    .pipe(
      ofType(fromCarActions.ActionTypes.GetCar),
      switchMap((action: fromCarActions.GetCar) => this.carService.getCar(action.id)),
      map((car) => new fromCarActions.GetCarSuccess(car)),
      catchError((error) => of(new fromCarActions.GetCarFailed(error)))
    );


  constructor(
    private carService: CarService,
    private readonly actions$: Actions) { }
}
