import { FuelType } from './fuel-type';

export interface Car {
  id: number;
  name: string;
  brand: string;
  fuelType: FuelType;
  price: number;
  horsePower: number;
  endOfSales: string;
  startOfSales: string;
}
