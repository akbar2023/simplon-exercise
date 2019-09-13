import { Component, OnInit } from '@angular/core';
import { CarService } from '@core/services/car.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from '@core/models/car';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

  car: Car;

  constructor(private carService: CarService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.carService.getCar(id).subscribe(car => this.car = car);
    });    

  }

}
