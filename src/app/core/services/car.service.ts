import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '@core/models/car';

@Injectable({
  providedIn: 'root'
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
}
