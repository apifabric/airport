import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GateHomeComponent } from './home/Gate-home.component';
import { GateNewComponent } from './new/Gate-new.component';
import { GateDetailComponent } from './detail/Gate-detail.component';

const routes: Routes = [
  {path: '', component: GateHomeComponent},
  { path: 'new', component: GateNewComponent },
  { path: ':id', component: GateDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Gate-detail-permissions'
      }
    }
  }
];

export const GATE_MODULE_DECLARATIONS = [
    GateHomeComponent,
    GateNewComponent,
    GateDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GateRoutingModule { }