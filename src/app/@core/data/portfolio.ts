import { Observable } from 'rxjs';

export interface ClusterUpstreamObj {
  value:{asset1: number[][], asset2: number[][], asset3: number[][]},
  cost:{asset1: number[][], asset2: number[][], asset3: number[][]},
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

export interface ScatSingleObj {
  value:{asset1: any[], asset2: any[], asset3: any[]},
  cost:{asset1: any[], asset2: any[], asset3: any[]},
  date: number[],
  series: string[]
}

export interface BarHorizontalObj {
  dcf:{asset1: number[], asset2: number[], asset3: number[]},
  irr:{asset1: number[], asset2: number[], asset3: number[]},
  npv:{asset1: number[], asset2: number[], asset3: number[]},
  rf:{asset1: number[], asset2: number[], asset3: number[]},
  utc:{asset1: number[], asset2: number[], asset3: number[]},
  date: number[],
  series: string[]
}

export interface DetailedPortfolioObj {
  scenario1:{oil: number[], water: number[], gas: number[], cost: number[], revenue: number[], discount: number[], ncf: number[], npv: number[], capex: number[]},
  scenario2:{oil: number[], water: number[], gas: number[], cost: number[], revenue: number[], discount: number[], ncf: number[], npv: number[], capex: number[]},
  scenario3:{oil: number[], water: number[], gas: number[], cost: number[], revenue: number[], discount: number[], ncf: number[], npv: number[], capex: number[]},
  category: number[],
  series: string[]
}

export abstract class PortfolioData {
  abstract getClusterUpstreamData(): Observable<ClusterUpstreamObj>;
  abstract getProductionUpstreamData(): Observable<ProductionUpstreamObj>;
  abstract getInjectionUpstreamData(): Observable<InjectionUpstreamObj>;
  abstract getBarStackedData(): Observable<BarStackedObj>;
  abstract getLineScenarioData(): Observable<BarStackedObj>;
  abstract getScatSingleData(): Observable<ScatSingleObj>;
  abstract getBarHorizontalData(): Observable<BarHorizontalObj>;
  abstract getDetailedPortfolioData(): Observable<DetailedPortfolioObj>;
}