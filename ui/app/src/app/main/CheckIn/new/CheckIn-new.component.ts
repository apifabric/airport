import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'CheckIn-new',
  templateUrl: './CheckIn-new.component.html',
  styleUrls: ['./CheckIn-new.component.scss']
})
export class CheckInNewComponent {
  @ViewChild("CheckInForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}