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
import { Brand } from '@core/models/brand';
import * as moment from 'moment';


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

  // Constructeur
  constructor(private carService: CarService, private store: Store<State>, private cd: ChangeDetectorRef, private dialog: MatDialog) {
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

  // Delete car confirm
  deleteCar(id: number): void {
    const selectedCar$ = this.cars$.pipe(
      map(state => state.list.find(car => car.id === id))
    );
    const dialogRef = this.dialog.open(DeleteConfirmComponent,
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
      });
  }

  // Upadtes cars overview with the filter input
  updateFilter(val: string) {
    this.filter = val;
    console.log(this.filter);
    this.dataSource.data = this.cars.filter((car => car.name.toLowerCase().includes(this.filter.toLowerCase())));
  }

  // Filter cars overview with brands with select
  brandFilter(brand: string) {
    this.filterBrand = brand;
    this.dataSource.data = this.cars.filter((car => car.brand.includes(this.filterBrand)));
  }

  // Change the date format from YYYY-MM-DD to DD/MM/YYYY
  formatDate(date: string): string {
    if (date) {
      const parsedDate = moment(date, 'YYYY-MM-DD');
      return parsedDate.format('DD/MM/YYYY');
    }
  }


}
