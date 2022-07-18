import { Component, OnDestroy } from '@angular/core';

import { Electricity, ElectricityData, ScenarioInfo } from '../../../../@core/data/electricity';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-economic-info',
  styleUrls: ['./scenario-info.component.scss'],
  templateUrl: './scenario-info.component.html',
})
export class EconomicInfoComponent implements OnDestroy {

  private alive = true;
  listData: ScenarioInfo[];

  constructor(private electricityService: ElectricityData) {
    this.electricityService.getEconomicData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((listData: ScenarioInfo[] ) => {
        this.listData = listData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
