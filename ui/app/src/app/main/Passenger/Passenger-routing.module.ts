import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassengerHomeComponent } from './home/Passenger-home.component';
import { PassengerNewComponent } from './new/Passenger-new.component';
import { PassengerDetailComponent } from './detail/Passenger-detail.component';

const routes: Routes = [
  {path: '', component: PassengerHomeComponent},
  { path: 'new', component: PassengerNewComponent },
  { path: ':id', component: PassengerDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Passenger-detail-permissions'
      }
    }
  },{
    path: ':passenger_id/Booking', loadChildren: () => import('../Booking/Booking.module').then(m => m.BookingModule),
    data: {
        oPermission: {
            permissionId: 'Booking-detail-permissions'
        }
    }
},{
    path: ':passenger_id/CheckIn', loadChildren: () => import('../CheckIn/CheckIn.module').then(m => m.CheckInModule),
    data: {
        oPermission: {
            permissionId: 'CheckIn-detail-permissions'
        }
    }
}
];

export const PASSENGER_MODULE_DECLARATIONS = [
    PassengerHomeComponent,
    PassengerNewComponent,
    PassengerDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassengerRoutingModule { }