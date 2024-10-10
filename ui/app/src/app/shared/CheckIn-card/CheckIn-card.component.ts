import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './CheckIn-card.component.html',
  styleUrls: ['./CheckIn-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.CheckIn-card]': 'true'
  }
})

export class CheckInCardComponent {


}