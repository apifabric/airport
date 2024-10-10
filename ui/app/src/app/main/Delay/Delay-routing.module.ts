import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelayHomeComponent } from './home/Delay-home.component';
import { DelayNewComponent } from './new/Delay-new.component';
import { DelayDetailComponent } from './detail/Delay-detail.component';

const routes: Routes = [
  {path: '', component: DelayHomeComponent},
  { path: 'new', component: DelayNewComponent },
  { path: ':id', component: DelayDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Delay-detail-permissions'
      }
    }
  }
];

export const DELAY_MODULE_DECLARATIONS = [
    DelayHomeComponent,
    DelayNewComponent,
    DelayDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DelayRoutingModule { }