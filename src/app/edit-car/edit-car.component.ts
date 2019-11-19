import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { CarService } from '@core/services/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '@core/models/car';
import { Brand } from '@core/models/brand';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FuelType } from '@core/models/fuel-type';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { State } from '@core/store';
import { UpdateCar, AddCar, GetCar } from '@core/store/actions/car.actions';


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
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],

})
export class EditCarComponent implements OnInit, OnDestroy {
  brands = Brand;
  fuelTypes = FuelType;
  id: number;
  carForm: FormGroup;

  sub: Subscription;

  createForm(car?: Car) {
    this.carForm = this.fb.group({
      name: [car ? car.name : '', Validators.required],
      brand: [car ? car.brand : '', Validators.required],
      horsePower: [car ? car.horsePower : '', ],
      price: [car ? car.price : '', Validators.min(0)],
      fuelType: [car ? car.fuelType : '', ],
      startOfSales: [car ? car.startOfSales : '', ],
      endOfSales: [car ? car.endOfSales : '', ]
    });
  }

  constructor(
    private carService: CarService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef,
    private store: Store<State>
  ) {
  }

  ngOnInit() {
    this.sub = this.store.select(state => state.cars.selectedCar).subscribe(car => {
      this.createForm(car);
      this.cd.markForCheck();
    });
    this.route.params.subscribe(params => {
      // tslint:disable-next-line: radix
      this.id = parseInt(params.id);
      if (this.id) {
        this.store.dispatch(new GetCar(this.id));
        // this.carService.getCar(this.id).subscribe(car => {
        // this.createForm(car);
        // this.cd.markForCheck();
        // });

      } else {
        this.createForm();
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit() {
    if (this.id) {
      this.carForm.value.id = this.id;
      this.carForm.value.endOfSales = moment(this.carForm.value.endOfSales).format('YYYY-MM-DD');
      this.carForm.value.startOfSales = moment(this.carForm.value.startOfSales).format('YYYY-MM-DD');
      console.log(this.carForm);
      this.store.dispatch(new UpdateCar(this.carForm.value));
      // this.carService.updateCar().subscribe((car) => console.log(car));
      this.router.navigate(['overview']);
    } else {
      this.carForm.value.endOfSales = moment(this.carForm.value.endOfSales).format('YYYY-MM-DD');
      this.carForm.value.startOfSales = moment(this.carForm.value.startOfSales).format('YYYY-MM-DD');
      this.store.dispatch(new AddCar(this.carForm.value));
      // this.carService.addCar(this.carForm.value).subscribe();
      this.router.navigate(['overview']);
    }
  }

}
