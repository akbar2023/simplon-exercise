import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Car } from '@core/models/car';
import { CarService } from '@core/services/car.service';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { State } from '@core/store';
import { LoadCars, DeleteCar } from '@core/store/actions/car.actions';
import { MatDialog } from '@angular/material';
import { DeleteConfirmComponent } from 'app/edit-car/delete-confirm/delete-confirm.component';
import { find, map, filter } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {Brand} from "@core/models/brand";


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {

  cars$: Observable<State['cars']>;
  filter: string;
  filterBrand: string;
  cars: Car[];

  displayedColumns: string[] =
    [
      'brand',
      'name',
      'price',
      'fuelType',
      'horsePower',
      'startOfSales',
      'endOfSales',
      'actions'
    ];


  brands: Brand[] = [
    Brand.Dacia,
    Brand.Renault,
    Brand.Alpine
  ];

  dataSource = new MatTableDataSource([]);
  sub: Subscription;

  constructor(private carService: CarService,
    private store: Store<State>,
    private cd: ChangeDetectorRef,
    private dialog: MatDialog) {
    this.cars$ = store.select('cars');
  }

  // Data sorting
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    this.store.dispatch(new LoadCars());

    this.dataSource.sort = this.sort;

    this.sub = this.cars$.subscribe((cars) => {
      this.cars = cars.list;
      this.dataSource.data = cars.list;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  // Delete with confirm
  deleteCar(id: number):void  {
    let selectedCar$ = this.cars$.pipe(
      map(state => state.list.find(car => car.id === id))
    );
    let dialogRef = this.dialog.open(DeleteConfirmComponent,
      {
        width: '350px',
        data: { car$: selectedCar$ }
      }
    );
    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this.store.dispatch(new DeleteCar(id));
        }
      })

  }

  updateFilter(val: string) {
    this.filter = val;
    // this.filter[0].toUpperCase();
    console.log(this.filter);
    this.dataSource.data = this.cars.filter((car=> car.name.toLowerCase().includes(this.filter.toLowerCase())));
  }

  brandFilter(brand: string) {
    this.filterBrand = brand;
    this.dataSource.data = this.cars.filter((car=> car.brand.includes(this.filterBrand)));
  }
}
