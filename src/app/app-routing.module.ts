import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SpaceComponent } from './space/space.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleBookingComponent } from './vehicle-booking/vehicle-booking.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'space',
    component: SpaceComponent,
  },
  {
    path: 'vehicle',
    component: VehicleListComponent,
  },
  {
    path: 'vehicle-booking',
    component: VehicleBookingComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }