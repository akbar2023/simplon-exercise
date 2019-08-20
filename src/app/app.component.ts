import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '@core/store';
import { LoadCars } from '@core/store/actions/car.actions';
import { Car } from '@core/models/car';
import { CarService } from '@core/services/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  cars: Car[] = [];
  

  constructor(private readonly store: Store<State>, private carService: CarService) {}

  ngOnInit(): void {
    // this.store.dispatch(new LoadCars());
  
    this.carService.getCars().subscribe(cars => this.cars = cars);
  }
}
