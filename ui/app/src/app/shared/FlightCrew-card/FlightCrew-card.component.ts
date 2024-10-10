import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './FlightCrew-card.component.html',
  styleUrls: ['./FlightCrew-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.FlightCrew-card]': 'true'
  }
})

export class FlightCrewCardComponent {


}