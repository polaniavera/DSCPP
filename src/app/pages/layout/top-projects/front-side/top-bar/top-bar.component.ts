import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-top-bar',
  styleUrls: ['./top-bar.component.scss'],
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent {

  @Input() barData: { prevDate: string; prevValue: number; nextDate: string; nextValue: number };
  @Input() successDelta: boolean;
}
