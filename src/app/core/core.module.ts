import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryCarService } from './services/in-memory-car.service';
import { CarService } from './services/car.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromCore from '@core/store';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryCarService),
    StoreModule.forRoot(fromCore.reducers),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule
  ],
  providers: [
    CarService
  ]
})
export class CoreModule { }
