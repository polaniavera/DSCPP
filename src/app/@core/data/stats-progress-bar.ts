import { Observable } from 'rxjs';

export interface ProgressInfo {
  title: string;
  value: number;
  activeProgress: number;
  description: string;
}

export interface ProgressKpi {
  title: string;
  value: number;
  activeProgress: number;
  status: string;
  description: string;
}

export interface GanttKpi {
  title: string;
  value: number;
  activeProgress: number;
  status: string;
  description: string;
  delta: {
    up: boolean,
    value: number,
  },
}

export interface GanttChartsKpi {
  budget: number[],
  resources: number[],
  risks: number[],
  issues: number[],
  category: string[],
}

export abstract class StatsProgressBarData {
  abstract getProgressInfoData(): Observable<ProgressInfo[]>;
  abstract getProgressKpiData(): Observable<ProgressKpi[]>;
  abstract getProjectsKpiData(): Observable<GanttKpi[]>;
  abstract getChartsKpiData(): Observable<GanttChartsKpi>;
}
