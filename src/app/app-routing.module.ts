//External Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Internal Imports
import { MapPageComponent } from './map-page/map-page.component';
import { BicycleRouteComponent } from './bicycle-route/bicycle-route.component';

const routes: Routes = [{
  component: MapPageComponent,
  path: 'pedestrian'
},
{
  component: BicycleRouteComponent,
  path: 'bicycle'
},
{
  path: '',
  redirectTo: '/pedestrian',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
