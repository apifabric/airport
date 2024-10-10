import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightHomeComponent } from './home/Flight-home.component';
import { FlightNewComponent } from './new/Flight-new.component';
import { FlightDetailComponent } from './detail/Flight-detail.component';

const routes: Routes = [
  {path: '', component: FlightHomeComponent},
  { path: 'new', component: FlightNewComponent },
  { path: ':id', component: FlightDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Flight-detail-permissions'
      }
    }
  },{
    path: ':flight_id/Booking', loadChildren: () => import('../Booking/Booking.module').then(m => m.BookingModule),
    data: {
        oPermission: {
            permissionId: 'Booking-detail-permissions'
        }
    }
},{
    path: ':flight_id/CheckIn', loadChildren: () => import('../CheckIn/CheckIn.module').then(m => m.CheckInModule),
    data: {
        oPermission: {
            permissionId: 'CheckIn-detail-permissions'
        }
    }
},{
    path: ':flight_id/Delay', loadChildren: () => import('../Delay/Delay.module').then(m => m.DelayModule),
    data: {
        oPermission: {
            permissionId: 'Delay-detail-permissions'
        }
    }
},{
    path: ':flight_id/FlightCrew', loadChildren: () => import('../FlightCrew/FlightCrew.module').then(m => m.FlightCrewModule),
    data: {
        oPermission: {
            permissionId: 'FlightCrew-detail-permissions'
        }
    }
},{
    path: ':flight_id/Maintenance', loadChildren: () => import('../Maintenance/Maintenance.module').then(m => m.MaintenanceModule),
    data: {
        oPermission: {
            permissionId: 'Maintenance-detail-permissions'
        }
    }
}
];

export const FLIGHT_MODULE_DECLARATIONS = [
    FlightHomeComponent,
    FlightNewComponent,
    FlightDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }