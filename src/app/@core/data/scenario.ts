import { Observable } from 'rxjs';

export interface BarLineObj {
  value:{production: number[], asset1: number[], asset2: number[], asset3: number[]},
  cost:{production: number[], asset1: number[], asset2: number[], asset3: number[]},
  date: number[],
  series: string[]
}

export interface ProductionUpstreamObj {
  oil:{asset1: number[], asset2: number[], asset3: number[]},
  water:{asset1: number[], asset2: number[], asset3: number[]},
  gas:{asset1: number[], asset2: number[], asset3: number[]},
  condensate:{asset1: number[], asset2: number[], asset3: number[]},
  date: number[],
  series: string[]
}

export interface InjectionUpstreamObj {
  asset1:{optimized: number[], raw: number[]},
  asset2:{optimized: number[], raw: number[]},
  asset3:{optimized: number[], raw: number[]},
  date: number[],
  series: string[]
}

export interface BarStackedObj {
  raw:{asset1: number[], asset2: number[], asset3: number[]},
  optimized:{asset1: number[], asset2: number[], asset3: number[]},
  date: number[],
  series: string[]
}

export abstract class ScenarioData {
  abstract getBarLineData(): Observable<BarLineObj>;
  abstract getProductionUpstreamData(): Observable<ProductionUpstreamObj>;
  abstract getInjectionUpstreamData(): Observable<InjectionUpstreamObj>;
  abstract getBarStackedData(): Observable<BarStackedObj>;
  abstract getLineScenarioData(): Observable<BarStackedObj>;
}