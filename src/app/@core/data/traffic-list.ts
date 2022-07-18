import { Observable } from 'rxjs';

export interface TrafficList {
  id: number;
  npv: number;
  capex: number;
  rf: number;
  dpi: number;
  prod: number;
  date: string;
  value: number;
  delta: {
    up: boolean;
    value: number;
  };
  comparison: {
    prevDate: string;
    prevValue: number;
    nextDate: string;
    nextValue: number;
  };
}

export abstract class TrafficListData {
  abstract getTrafficListData(period: string): Observable<TrafficList>;
}
