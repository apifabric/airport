import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {FLIGHTCREW_MODULE_DECLARATIONS, FlightCrewRoutingModule} from  './FlightCrew-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    FlightCrewRoutingModule
  ],
  declarations: FLIGHTCREW_MODULE_DECLARATIONS,
  exports: FLIGHTCREW_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FlightCrewModule { }