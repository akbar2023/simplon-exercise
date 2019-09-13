import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '@core/models/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private readonly baseUrl = 'api/cars/';

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.baseUrl);
  }

  getCar(id: number): Observable<Car> {
    return this.http.get<Car>(this.baseUrl + id);
  } 
  
  updateCar(car: Car): Observable<Car> {
    return this.http.put<Car>(this.baseUrl, car);
  }
  
  // updateCar(car: Car): Observable<Car> {
  //   return this.http.put<Car>(this.baseUrl + car.id, car);
  // }

  deleteCar (id: number): Observable<{}> {
    return this.http.delete(this.baseUrl + id);
  }
  
  addCar (car: Car): Observable<Car> {
    return this.http.post<Car>(this.baseUrl, car);
  }



}
