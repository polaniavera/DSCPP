import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { ProgressInfo, ProgressKpi, GanttKpi, GanttChartsKpi, StatsProgressBarData } from '../data/stats-progress-bar';

@Injectable()
export class StatsProgressBarService extends StatsProgressBarData {
  private progressInfoData: ProgressInfo[] = [
    {
      title: 'Profit',
      value: 572900,
      activeProgress: 70,
      description: 'Better than last week (70%)',
    },
    {
      title: 'Net Cash',
      value: 6378,
      activeProgress: 30,
      description: 'Better than last week (30%)',
    }
  ];

  private progressKpiData: ProgressKpi[] = [
    {
      title: 'Oil Target',
      value: 6000000,
      activeProgress: 70,
      status: 'success',
      description: 'Better than last week (70%)',
    },
    {
      title: 'Gas Target',
      value: 8000000,
      activeProgress: 68,
      status: 'warning',
      description: 'Better than last week (30%)',
    },
    {
      title: 'Condensate Target',
      value: 2000000,
      activeProgress: 75,
      status: 'success',
      description: 'Better than last week (30%)',
    }
  ];

  private projectsKpiData: GanttKpi[] = [
    {
      title: 'Project 1',
      value: 6000000,
      activeProgress: 70,
      status: 'success',
      description: '5 risks',
      delta: {
        up: true,
        value: 5,
      },
    },
    {
      title: 'Project 2',
      value: 8000000,
      activeProgress: 28,
      status: 'warning',
      description: '15 risks',
      delta: {
        up: true,
        value: 1,
      },
    },
    {
      title: 'Project 3',
      value: 2000000,
      activeProgress: 75,
      status: 'success',
      description: '0 risks',
      delta: {
        up: true,
        value: 10,
      },
    },
    {
      title: 'Project 4',
      value: 2000000,
      activeProgress: 50,
      status: 'warning',
      description: '2 risks',
      delta: {
        up: false,
        value: 3,
      },
    },
    {
      title: 'Project 5',
      value: 2000000,
      activeProgress: 25,
      status: 'danger',
      description: '32 risks',
      delta: {
        up: false,
        value: 8,
      },
    },
    {
      title: 'Project 6',
      value: 2000000,
      activeProgress: 85,
      status: 'success',
      description: '0 risks',
      delta: {
        up: true,
        value: 25,
      },
    },
    {
      title: 'Project 7',
      value: 2000000,
      activeProgress: 73,
      status: 'success',
      description: '2 risks',
      delta: {
        up: true,
        value: 12,
      },
    },{
      title: 'Project 8',
      value: 2000000,
      activeProgress: 81,
      status: 'success',
      description: '0 risks',
      delta: {
        up: true,
        value: 15,
      },
    },{
      title: 'Project 9',
      value: 2000000,
      activeProgress: 69,
      status: 'warning',
      description: '2 risks',
      delta: {
        up: true,
        value: 18,
      },
    },
  ];

  private dataGanttCHart: GanttChartsKpi ={
    budget:[116,129,135,86,73,85,73,68,92,],
    resources:[44,72,106,107,66,91,92,113,107,],
    risks:[88,77,83,111,57,55,60,60,72,],
    issues:[210,180,130,90,80,70,65,60,55,],
    category:['P1','P2','P3','P4','P5','P6','P7','P8','P9',],
  };


  getProgressInfoData(): Observable<ProgressInfo[]> {
    return observableOf(this.progressInfoData);
  }

  getProgressKpiData(): Observable<ProgressKpi[]> {
    return observableOf(this.progressKpiData);
  }

  getProjectsKpiData(): Observable<GanttKpi[]> {
    return observableOf(this.projectsKpiData);
  }

  getChartsKpiData(): Observable<GanttChartsKpi> {
    return observableOf(this.dataGanttCHart);
  }
}
