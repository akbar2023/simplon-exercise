import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private readonly baseUrl = 'api/cars/';
}
