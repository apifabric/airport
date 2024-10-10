import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInHomeComponent } from './home/CheckIn-home.component';
import { CheckInNewComponent } from './new/CheckIn-new.component';
import { CheckInDetailComponent } from './detail/CheckIn-detail.component';

const routes: Routes = [
  {path: '', component: CheckInHomeComponent},
  { path: 'new', component: CheckInNewComponent },
  { path: ':id', component: CheckInDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CheckIn-detail-permissions'
      }
    }
  }
];

export const CHECKIN_MODULE_DECLARATIONS = [
    CheckInHomeComponent,
    CheckInNewComponent,
    CheckInDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckInRoutingModule { }