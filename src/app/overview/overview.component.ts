import { Component, OnInit } from '@angular/core';
import { Car } from '@core/models/car';
import { CarService } from '@core/services/car.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '@core/store';
import { LoadCars } from '@core/store/actions/car.actions';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  cars: Car[] = [];
  cars$: Observable<State['cars']>;

  displayedColumns: string[] = 
  [
    'brand',
    'name',
    'price',
    'fuelType',
    'horse power',
    'start of sales',
    'end of sales',
    'actions'
  ];

  dataSource = this.cars;

  constructor(private carService: CarService, private store: Store<State>) {
    this.cars$ = store.select('cars');
  }
  
  ngOnInit() {
    this.store.dispatch(new LoadCars());
  }

  deleteCar(id: number) {
    this.carService.deleteCar(id).subscribe();
    this.carService.getCars().subscribe(cars => this.cars = cars);
  }

}
