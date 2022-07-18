import { Component, OnDestroy } from '@angular/core';
import { ProgressInfo, StatsProgressBarData } from '../../../@core/data/stats-progress-bar';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'activity-gantt',
  styleUrls: ['./activity-gantt.component.scss'],
  templateUrl: './activity-gantt.component.html',
})
export class ActivityGanttComponent implements OnDestroy {

  private alive = true;

  progressInfoData: ProgressInfo[];

  constructor(private statsProgressBarService: StatsProgressBarData) {
    this.statsProgressBarService.getProjectsKpiData().pipe(takeWhile(() => this.alive)).subscribe((data) => {
        this.progressInfoData = data;
      });
  }
  
  ngOnDestroy() {
    this.alive = true;
  }
}
