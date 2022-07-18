import { Observable } from 'rxjs';

export interface AreaUpstreamObj {
  oil:{asset1: number[], asset2: number[], asset3: number[]},
  water:{asset1: number[], asset2: number[], asset3: number[]},
  gas:{asset1: number[], asset2: number[], asset3: number[]},
  condensate:{asset1: number[], asset2: number[], asset3: number[]},
  date: number[],
  series: string[]
}

export interface BarUpstreamObj {
  cash:{asset1: number[], asset2: number[], asset3: number[]},
  dcf:{asset1: number[], asset2: number[], asset3: number[]},
  capex:{asset1: number[], asset2: number[], asset3: number[]},
  opex:{asset1: number[], asset2: number[], asset3: number[]},
  date: number[],
  series: string[]
}

export interface WaterfallObj {
  service:{total: any[], asset1: any[], asset2: any[], asset3: any[]},
  product:{total: any[], asset1: any[], asset2: any[], asset3: any[]},
  other:{total: any[], asset1: any[], asset2: any[], asset3: any[]},
  category: string[],
  date: number[],
  series: string[]
}

export abstract class BusinessData {
  abstract getAreaUpstreamData(): Observable<AreaUpstreamObj>;
  abstract getBarUpstreamData(): Observable<BarUpstreamObj>;
  abstract getWaterfallData(): Observable<WaterfallObj>;
}