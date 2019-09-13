import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { EditCarComponent } from './edit-car/edit-car.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'details/:id', component: CarDetailsComponent },
  { path: 'edit/:id', component: EditCarComponent},
  { path: 'add-car', component: EditCarComponent},
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
