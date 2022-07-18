import { Component, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

import { TrafficList, TrafficListData } from '../../../@core/data/traffic-list';

@Component({
  selector: 'ngx-top-scenario',
  styleUrls: ['./top-scenario.component.scss'],
  templateUrl: './top-scenario.component.html',
})
export class TopScenarioComponent implements OnDestroy {

  private alive = true;

  trafficListData: TrafficList;
  period: string = 'scenario';

  constructor(private trafficListService: TrafficListData) {
    this.getTrafficFrontCardData(this.period);
  }

  getTrafficFrontCardData(period: string) {
    this.trafficListService.getTrafficListData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(trafficListData => {
        this.trafficListData = trafficListData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
