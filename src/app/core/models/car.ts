import { FuelType } from './fuel-type';
import { Brand } from '@core/models/brand';

export interface Car {
  id: number;
  name: string;
  brand: Brand;
  fuelType: FuelType;
  price: number;
  horsePower: number;
  endOfSales: string;
  startOfSales: string;
}
