import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { BarLineObj, ProductionUpstreamObj, InjectionUpstreamObj, BarStackedObj, ScenarioData } from '../data/scenario';

@Injectable()
export class ScenarioService extends ScenarioData {

  private dataBarLine: BarLineObj ={
    value:{production:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0],
      asset1:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0],
      asset2:[25.6, 18.9, 19.0, 36.4, 18.7, 60.7, 125.6, 152.2, 98.7, 58.8, 60.0],
      asset3:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4]},
    cost:{production:[20.3, 23.4, 23.0, 16.5, 12.0,2.0, 2.2, 3.3, 4.5, 6.3, 10.2],
      asset1:[175.6, 182.2, 48.7, 18.8, 6.0,2.6, 5.9, 9.0, 26.4, 28.7, 70.7],
      asset2:[125.6, 152.2, 98.7, 58.8, 60.0,25.6, 18.9, 19.0, 36.4, 18.7, 60.7],
      asset3:[135.6, 162.2, 32.6, 20.0, 6.4,2.0, 4.9, 7.0, 23.2, 25.6, 76.7]},
    date:[2000,2005,2010,2015,2020,2025,2030,2035,2040,2045,2050],
    series:['Production','Asset 1','Asset 2','Asset 3']
  };

  private dataProductionUpstream: ProductionUpstreamObj ={
    oil:{asset1:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
      asset2:[3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7],
      asset3:[2.0, 5.0, 9.6, 25.4, 26.7, 72.7, 145.6, 132.2, 40.7, 25.8, 16.0, 12.3]},
    water:{asset1:[13.9, 15.9, 21.1, 28.7, 58.3, 79.2, 241.6, 56.6, 65.4, 28.4, 20.3, 10.7],
      asset2:[3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7,0.85],
      asset3:[8.6, 15.9, 29.0, 26.4, 23.7, 60.7, 75.6, 112.2, 88.7, 98.8, 60.0, 20.3,15.2]},
    gas:{asset1:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,1.2],
      asset2:[3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7],
      asset3:[75.6, 112.2, 88.7, 98.8, 60.0, 20.3,15.2,2.0, 5.0, 9.6, 25.4, 26.7, 72.7]},
    condensate:{asset1:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
      asset2:[2.0, 5.0, 9.6, 25.4, 26.7, 72.7, 145.6, 132.2, 40.7, 25.8, 16.0, 12.3],
      asset3:[3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]},
    date:[2000,2005,2010,2015,2020,2025,2030,2035,2040,2045,2050],
    series:['Asset 1','Asset 2','Asset 3']
  };

  private dataInjectionUpstream: InjectionUpstreamObj ={
    asset1:{optimized:[60.0, 62.3,61.2,73,65,82,96,101,110,112,123],
      raw:[51.0, 55.3, 56.2,63,58,78,89,99,105,107,120]},
    asset2:{optimized:[2.6, 5.9, 9.0, 10.1, 13.7, 20.7, 21.6, 22.2, 23.7, 25.8, 29.0],
      raw:[4.6, 6.9, 8.7, 9.1, 11.7, 10.7, 11.6, 9.2, 13.7, 18.8, 28.0]},
    asset3:{optimized:[32.3,32.6, 35.9, 39.0, 38.4, 38.7, 39.1, 39.9, 42.2, 48.7, 58.8],
      raw:[29.3,28.6, 29.9, 31.0, 26.6, 27.7, 29.7, 30.6, 32.2, 38.7, 42.8]},
    date:[2000,2005,2010,2015,2020,2025,2030,2035,2040,2045,2050],
    series:['Optimized','Raw']
  };

  private dataBarStacked: BarStackedObj ={
    raw:{asset1:[],asset2:[],asset3:[]},
    optimized:{asset1:[],asset2:[],asset3:[]},
    date:[],
    series:['Asset 1','Asset 2','Asset 3']
  };

  private dataLineScenario: BarStackedObj ={
    raw:{asset1:[60.0, 62.3,61.2,73,65,82,96,101,110,112,123]
      ,asset2:[51.0, 55.3, 56.2,63,58,78,89,99,105,107,120]
      ,asset3:[2.6, 5.9, 9.0, 10.1, 13.7, 20.7, 21.6, 22.2, 23.7, 25.8, 29.0]},
    optimized:{asset1:[32.3,32.6, 35.9, 39.0, 38.4, 38.7, 39.1, 39.9, 42.2, 48.7, 58.8]
      ,asset2:[29.3,28.6, 29.9, 31.0, 26.6, 27.7, 29.7, 30.6, 32.2, 38.7, 42.8]
      ,asset3:[4.6, 6.9, 8.7, 9.1, 11.7, 10.7, 11.6, 9.2, 13.7, 18.8, 28.0]},
    date:[2000,2005,2010,2015,2020,2025,2030,2035,2040,2045,2050],
    series:['Asset 1','Asset 2','Asset 3']
  };

  getBarLineData(): Observable<BarLineObj> {
    return observableOf(this.dataBarLine);
  }

  getProductionUpstreamData(): Observable<ProductionUpstreamObj> {
    return observableOf(this.dataProductionUpstream);
  }

  getInjectionUpstreamData(): Observable<InjectionUpstreamObj> {
    return observableOf(this.dataInjectionUpstream);
  }

  getBarStackedData(): Observable<BarStackedObj> {
    let raw = [[],[],[]]; let optimized = [[],[],[]]; let category = [];
    for (var i = 50; i <= 100; i++) {
      category.push(i+1950);
      raw[0].push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
      raw[1].push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
      raw[2].push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 2.5);
      optimized[0].push((Math.cos(i / 4) * (i / 4 -10) + i / 5) * 4);
      optimized[1].push((Math.sin(i / 4) * (i / 4 -10) + i / 5) * 2.5);
      optimized[2].push((Math.sin(i / 4) * (i / 4 -10) + i / 5) * 4);
    }
    this.dataBarStacked.raw.asset1 = raw[0];
    this.dataBarStacked.raw.asset2 = raw[1];
    this.dataBarStacked.raw.asset3 = raw[2];
    this.dataBarStacked.optimized.asset1 = optimized[0];
    this.dataBarStacked.optimized.asset2 = optimized[1];
    this.dataBarStacked.optimized.asset3 = optimized[2];
    this.dataBarStacked.date = category;
    return observableOf(this.dataBarStacked);
  }

  getLineScenarioData(): Observable<BarStackedObj> {
    return observableOf(this.dataLineScenario);
  }

}
