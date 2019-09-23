import { Component, OnInit } from '@angular/core';
import { CarService } from '@core/services/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '@core/models/car';
import { Brand } from '@core/models/brand';
import { NgForm, FormControl, FormGroup } from '@angular/forms';
import { FuelType } from '@core/models/fuel-type';


@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss'],
})
export class EditCarComponent implements OnInit {

  car: Car;
  brands = Brand;
  fuelTypes = FuelType;
  id: number;

  carForm = new FormGroup({
    name: new FormControl(''),
    brand: new FormControl(''),
    horsePower: new FormControl(''),
    fuelType: new FormControl(''),
    startOfSales: new FormControl(''),
    endOfSales: new FormControl(''),
  });
  

  // fuelTypes: SelectItem<FuelType>[] = [
  //   {name: "Gasoline", value: FuelType.Gasoline},
  //   {name: "Diesel", value: FuelType.Diesel },
  //   {name: "LPG", value: FuelType.LPG },
  //   {name: "Electric", value: FuelType.Electric},
  // ];

  constructor(private carService: CarService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id']);
      if (this.id) {
        this.carService.getCar(this.id).subscribe(car => this.car = Object.assign({}, car));
      } else {
        this.car = {
          id: null, name: null, brand: null, fuelType: null, price: null, horsePower: null, startOfSales: null, endOfSales: null
        };
      }

    });
  }


  onSubmit(form: NgForm) {



    if (this.id) {
      form.value.id = this.id;
      this.carService.updateCar(form.value).subscribe((car) => console.log(car));
      this.router.navigate(['overview']);
    } else {
      this.carService.addCar(form.value).subscribe();
      this.router.navigate(['overview']);
    }
  }

}
