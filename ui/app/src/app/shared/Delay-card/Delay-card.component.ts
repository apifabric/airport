import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Delay-card.component.html',
  styleUrls: ['./Delay-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Delay-card]': 'true'
  }
})

export class DelayCardComponent {


}