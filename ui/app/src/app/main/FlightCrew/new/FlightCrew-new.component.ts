import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'FlightCrew-new',
  templateUrl: './FlightCrew-new.component.html',
  styleUrls: ['./FlightCrew-new.component.scss']
})
export class FlightCrewNewComponent {
  @ViewChild("FlightCrewForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}