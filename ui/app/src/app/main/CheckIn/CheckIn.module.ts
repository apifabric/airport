import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CHECKIN_MODULE_DECLARATIONS, CheckInRoutingModule} from  './CheckIn-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CheckInRoutingModule
  ],
  declarations: CHECKIN_MODULE_DECLARATIONS,
  exports: CHECKIN_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CheckInModule { }