import { Component, OnInit } from '@angular/core';
import { CarService } from '@core/services/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '@core/models/car';
import { Brand } from '@core/models/brand';
import { NgForm } from '@angular/forms';
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
    const checkMissingInfo = () => {
      let field: string = null;
      Object.entries<string>(form.value).some(([key, value]) => {
        if (value === null) {
          field = key;
          return true;
        }
      });
      return changeString(field);
    };
    let missingInfo: string;
    if (this.id) {
      form.value.id = this.id;
      this.carService.updateCar(form.value).subscribe((car) => console.log(car));
      this.router.navigate(['overview']);
    } else if ((missingInfo = checkMissingInfo())) {
      alert(missingInfo + " is missing");
    } else {
      this.carService.addCar(form.value).subscribe();
      this.router.navigate(['overview']);
    }


  }

}

// Function de string en majuscule

function changeString(value) {
  let newString = "";
  //endOfSale
  for (const c of value) {
    const lower = c.toLowerCase();
    if (c !== lower) {
      newString += " ";
    }
    newString += lower;
  }
  newString = newString[0].toUpperCase() + newString.substr(1);
  return newString;
}

