import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { CarService } from '@core/services/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '@core/models/car';
import { Brand } from '@core/models/brand';
import { NgForm, FormControl, FormGroup } from '@angular/forms';
import { FuelType } from '@core/models/fuel-type';
import { MomentDateAdapter} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as moment from 'moment';


export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY-MM-DD',
    dateA11yLabel: 'YYYY-MM-DD',
    monthYearA11yLabel: 'YYYY-MM-DD',
  },
};


@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
  
})
export class EditCarComponent implements OnInit {

  car: Car;
  brands = Brand;
  fuelTypes = FuelType;
  id: number;
  carForm: FormGroup;


  // fuelTypes: SelectItem<FuelType>[] = [
  //   {name: "Gasoline", value: FuelType.Gasoline},
  //   {name: "Diesel", value: FuelType.Diesel },
  //   {name: "LPG", value: FuelType.LPG },
  //   {name: "Electric", value: FuelType.Electric},
  // ];

  constructor(private carService: CarService, private route: ActivatedRoute, private router: Router, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id']);
      if (this.id) {
        this.carService.getCar(this.id).subscribe(car => {
          this.car = Object.assign({}, car);
          this.carForm = new FormGroup({
            name: new FormControl(this.car.name),
            brand: new FormControl(this.car.brand),
            horsePower: new FormControl(this.car.horsePower),
            price: new FormControl(this.car.price),
            fuelType: new FormControl(this.car.fuelType),
            startOfSales: new FormControl(this.car.startOfSales),
            endOfSales: new FormControl(this.car.endOfSales),
          });

          this.cd.markForCheck();
        });
      } else {
        this.car = {
          id: null, name: null, brand: null, fuelType: null, price: null, horsePower: null, startOfSales: null, endOfSales: null
        };
        this.carForm = new FormGroup({
          name: new FormControl(''),
          brand: new FormControl(''),
          horsePower: new FormControl(''),
          price: new FormControl(''),
          fuelType: new FormControl(''),
          startOfSales: new FormControl(''),
          endOfSales: new FormControl(''),
        });
      }
    });
  }

  onSubmit() {
    if (this.id) {
      this.carForm.value.id = this.id;
      this.carForm.value.endOfSales =  moment(this.carForm.value.endOfSales).format('YYYY-MM-DD');
      this.carForm.value.startOfSales =  moment(this.carForm.value.startOfSales).format('YYYY-MM-DD');
      this.carService.updateCar(this.carForm.value).subscribe((car) => console.log(car));
      this.router.navigate(['overview']);
    } else {
      this.carForm.value.endOfSales =  moment(this.carForm.value.endOfSales).format('YYYY-MM-DD');
      this.carForm.value.startOfSales =  moment(this.carForm.value.startOfSales).format('YYYY-MM-DD');
      this.carService.addCar(this.carForm.value).subscribe();
      this.router.navigate(['overview']);
    }
  }

}
