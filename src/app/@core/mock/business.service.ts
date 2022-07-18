import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { AreaUpstreamObj, BusinessData, BarUpstreamObj, WaterfallObj } from '../data/business';

@Injectable()
export class BusinessService extends BusinessData {

  private getRandom = (roundTo: number) => Math.round(Math.random() * roundTo);

  /* const item = {
    value: this.getRandom(1000),
  }; */
  //private data: AreaUpstreamObj;

  private innerLinePoints: number[] = [
    94, 188, 225, 244, 253, 254, 249, 235, 208,
    173, 141, 118, 105, 97, 94, 96, 104, 121, 147,
    183, 224, 265, 302, 333, 358, 375, 388, 395,
    400, 400, 397, 390, 377, 360, 338, 310, 278,
    241, 204, 166, 130, 98, 71, 49, 32, 20, 13, 9,
  ];

  private dataAreaUpstream: AreaUpstreamObj ={
    oil:{asset1:[120, 132, 101, 134, 90, 230, 210,220,230,240,230],
      asset2:[220, 182, 191, 234, 290, 330, 310,350,310,320,322],
      asset3:[150, 232, 201, 154, 190, 330, 410,450,460,450,470]},
    water:{asset1:[320, 332, 301, 334, 390, 330, 320,330,380,350,370],
      asset2:[220, 182, 191, 234, 290, 330, 310,350,310,320,322],
      asset3:[820, 932, 901, 934, 1290, 1330, 1320,1450,1560,1660,1770]},
    gas:{asset1:[120, 132, 101, 134, 90, 230, 210,220,230,240,230],
      asset2:[320, 332, 301, 334, 390, 330, 320,330,380,350,370],
      asset3:[150, 232, 201, 154, 190, 330, 410,450,460,450,470]},
    condensate:{asset1:[150, 232, 201, 154, 190, 330, 410,450,460,450,470],
      asset2:[120, 132, 101, 134, 90, 230, 210,220,230,240,230],
      asset3:[320, 332, 301, 334, 390, 330, 320,330,380,350,370]},
    date:[2000,2005,2010,2015,2020,2025,2030,2035,2040,2045,2050],
    series:['Asset 1','Asset 2','Asset 3']
  };

  private dataBarUpstream: BarUpstreamObj ={
    cash:{asset1:[320, 302, 301, 334, 390, 330, 320, 334, 390, 330, 320],
      asset2:[120, 132, 101, 134, 90, 230, 210, 134, 90, 230, 210],
      asset3:[220, 182, 191, 234, 290, 330, 310, 234, 290, 330, 310]},
    dcf:{asset1:[220, 202, 201, 234, 290, 230, 220, 234, 290, 230, 220],
      asset2:[20, 32, 11, 34, 90, 30, 10, 34, 90, 130, 110],
      asset3:[120, 82, 91, 134, 190, 230, 210, 134, 190, 230, 210]},
    capex:{asset1:[320, 352, 301, 280, 390, 330, 290, 334, 390, 310, 320],
      asset2:[100, 120, 101, 150, 90, 220, 210, 111, 90, 230, 200],
      asset3:[80, 90, 91, 134, 190, 230, 280, 234, 290, 320, 310]},
    opex:{asset1:[150, 302, 301, 334, 280, 330, 320, 334, 290, 330, 320],
      asset2:[110, 132, 70, 134, 90, 260, 210, 134, 80, 230, 210],
      asset3:[220, 120, 191, 234, 250, 330, 380, 234, 270, 330, 300]},
    date:[2000,2005,2010,2015,2020,2025,2030,2035,2040,2045,2050],
    series:['Asset 1','Asset 2','Asset 3']
  };

  private dataWaterfall: WaterfallObj ={
    service:{total:[0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292],
      asset1:[900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-'],
      asset2:['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203],
      asset3:['-', 110, '-', '-', 88, '-', 20, '-', 210, '-', '-']},
    product:{total:[100, 110, 999, 1333, 1222, 1376, 1500, 1580, 1856, 1500, 1100],
      asset1:['-', 110, '-', '-', 88, '-', 20, '-', 210, '-', '-'],
      asset2:['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203],
      asset3:[900, 345, 393, '-', '-', 135, 178, 286, '-', '-', 200]},
    other:{total:[20, 333, 1111, 1300, 1550, 1200, 1300, 1001, 1500, 1400, 1850],
      asset1:[900, 345, 393, '-', '-', 135, 178, 286, '-', '-', 200],
      asset2:['-', 110, '-', '-', 88, '-', 20, '-', 210, '-', '-'],
      asset3:['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]},
    category: ['Revenue','Cost','Gross Margin','R&D','Sales','Marketing','Administrative','Income','Other Income','Taxes','Net Income'],
    date:[2000,2005,2010,2015,2020,2025,2030,2035,2040,2045,2050],
    series:['Total','Asset 1','Asset 2','Asset 3']
  };

  getAreaUpstreamData(): Observable<AreaUpstreamObj> {
    return observableOf(this.dataAreaUpstream);
  }

  getBarUpstreamData(): Observable<BarUpstreamObj> {
    return observableOf(this.dataBarUpstream);
  }

  getWaterfallData(): Observable<WaterfallObj> {
    return observableOf(this.dataWaterfall);
  }

}
