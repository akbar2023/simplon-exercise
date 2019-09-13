import { Component, OnInit } from '@angular/core';
import { Car } from '@core/models/car';
import { CarService } from '@core/services/car.service';
import { MatTable } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox'; 

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  // Checkboxes


  cars: Car[] = [];

  displayedColumns: string[] = ['brand', 'name', 'price', 'fuelType', 'horse power', 'start of sales', 'end of sales', 'actions'];

  dataSource = this.cars;

  constructor(private carService: CarService) {}
  
  ngOnInit() {
    this.carService.getCars().subscribe(cars => {this.cars = cars
      console.log(this.cars)});
    
  }

  deleteCar(id: number) {
    this.carService.deleteCar(id).subscribe();
    this.carService.getCars().subscribe(cars => this.cars = cars);
  }

}
