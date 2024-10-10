import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightCrewHomeComponent } from './home/FlightCrew-home.component';
import { FlightCrewNewComponent } from './new/FlightCrew-new.component';
import { FlightCrewDetailComponent } from './detail/FlightCrew-detail.component';

const routes: Routes = [
  {path: '', component: FlightCrewHomeComponent},
  { path: 'new', component: FlightCrewNewComponent },
  { path: ':id', component: FlightCrewDetailComponent,
    data: {
      oPermission: {
        permissionId: 'FlightCrew-detail-permissions'
      }
    }
  }
];

export const FLIGHTCREW_MODULE_DECLARATIONS = [
    FlightCrewHomeComponent,
    FlightCrewNewComponent,
    FlightCrewDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightCrewRoutingModule { }