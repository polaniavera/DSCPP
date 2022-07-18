import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-detailed-panel-summary',
  styleUrls: ['./detailed-panel-summary.component.scss'],
  template: `
    <div class="summary-container">
      <div *ngFor="let item of summary">
        <div>{{ item.title }}</div>
        <div class="h6">{{ item.value }}</div>
      </div>
    </div>
  `,
})
export class DetailedPanelSummaryComponent {
  @Input() summary: {title: string; value: number}[];
}

