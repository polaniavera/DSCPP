import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { PeriodsService } from './periods.service';
import { TrafficList, TrafficListData } from '../data/traffic-list';

@Injectable()
export class TrafficListService extends TrafficListData {

  private getRandom = (roundTo: number) => Math.round(Math.random() * roundTo);
  private data = {};

  constructor(private period: PeriodsService) {
    super();
    this.data = {
      week: this.getDataWeek(),
      month: this.getDataMonth(),
      year: this.getDataYear(),
      project: this.getDataProject(),
      scenario: this.getDataScenario()
    };
  }

  private getDataWeek(): TrafficList[] {
    const getFirstDateInPeriod = () => {
      const weeks = this.period.getWeeks();
      return weeks[weeks.length - 1];
    };
    return this.reduceData(this.period.getWeeks(), getFirstDateInPeriod);
  }

  private getDataMonth(): TrafficList[] {
    const getFirstDateInPeriod = () => {
      const months = this.period.getMonths();
      return months[months.length - 1];
    };
    return this.reduceData(this.period.getMonths(), getFirstDateInPeriod);
  }

  private getDataYear(): TrafficList[] {
    const getFirstDateInPeriod = () => {
      const years = this.period.getYears();
      return `${parseInt(years[0], 10) - 1}`;
    };
    return this.reduceData(this.period.getYears(), getFirstDateInPeriod);
  }

  private getDataProject(): TrafficList[] {
    const getFirstDateInPeriod = () => {
      const project = this.period.getProjects();
      return project[project.length - 1];
    };
    return this.reduceData(this.period.getProjects(), getFirstDateInPeriod);
  }

  private getDataScenario(): TrafficList[] {
    const getFirstDateInPeriod = () => {
      const scenarios = this.period.getScenarios();
      return scenarios[scenarios.length - 1];
    };
    return this.reduceData(this.period.getScenarios(), getFirstDateInPeriod);
  }

  private reduceData(timePeriods: string[], getFirstDateInPeriod: () => string): TrafficList[] {
    return timePeriods.reduce((result, timePeriod, index) => {
      const hasResult = result[index - 1];
      const prevDate = hasResult ? result[index - 1].comparison.nextDate : getFirstDateInPeriod();
      const prevValue = hasResult ? result[index - 1].comparison.nextValue : this.getRandom(100);
      const nextValue = this.getRandom(100);
      const deltaValue = prevValue - nextValue;

      const item = {
        date: timePeriod,
        value: this.getRandom(1000),
        id: this.getRandom(100),
        npv: this.getRandom(1000),
        capex: this.getRandom(1000),
        rf: this.getRandom(1000),
        dpi: this.getRandom(1000),
        prod: this.getRandom(1000),
        delta: {
          up: deltaValue <= 0,
          value: Math.abs(deltaValue),
        },
        comparison: {
          prevDate,
          prevValue,
          nextDate: timePeriod,
          nextValue,
        },
      };

      return [...result, item];
    }, []);
  }

  getTrafficListData(period: string): Observable<TrafficList> {
    return observableOf(this.data[period]);
  }
}
