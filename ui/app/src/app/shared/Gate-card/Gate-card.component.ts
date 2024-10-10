import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Gate-card.component.html',
  styleUrls: ['./Gate-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Gate-card]': 'true'
  }
})

export class GateCardComponent {


}