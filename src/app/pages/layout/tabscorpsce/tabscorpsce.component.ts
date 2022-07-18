import { Component } from '@angular/core';

@Component({
  selector: 'ngx-tabcorpsce1',
  templateUrl: './tabcorpsce1.component.html',
})
export class Tabcorpsce1Component { 
  ngOnInit() {
    this.clusterSelected = 'value';
    this.barhorSelected = 'npv';
    this.productionSelected = 'oil';
    this.assetSelected = 'asset1';
  }
  clusterItems = [{value: 'value',name: 'Value',},{value: 'cost',name: 'Cost',},];
  barhorItems = [{value: 'npv',name: 'NPV',},{value: 'utc',name: 'UTC',},{value: 'dcf',name: 'DCF',},
    {value: 'rf',name: 'RF',},{value: 'irr',name: 'IRR',},];
  productionItems = [{value: 'oil',name: 'Oil',},{value: 'water',name: 'Water'},
    {value: 'gas',name: 'Gas'},{value: 'condensate',name: 'Condensate'}];
  assetItems = [{value: 'asset1',name: 'Asset 1',},{value: 'asset2',name: 'Asset 2'},{value: 'asset3',name: 'Asset 3'}];
  clusterSelected = 'value';
  barhorSelected = 'npv';
  productionSelected = 'oil';
  assetSelected = 'asset1';
}

@Component({
  selector: 'ngx-tabcorpsce2',
  templateUrl: './tabcorpsce2.component.html',
})
export class Tabcorpsce2Component { 
  ngOnInit() {
    this.clusterSelected = 'raw';
    this.scenarioSelected = 'raw';
  }
  clusterItems = [{value: 'raw',name: 'Raw',},{value: 'optimized',name: 'Optimized',},];
  clusterSelected = 'raw';
  scenarioSelected = 'raw';
}

@Component({
  selector: 'ngx-tabscorpsce',
  styleUrls: ['./tabscorpsce.component.scss'],
  templateUrl: './tabscorpsce.component.html',
})
export class TabscorpsceComponent {

  tabscorpsce: any[] = [
    {
      title: 'Production & Cost',
      route: '/pages/layout/tabscorpsce/tabcorpsce1',
    },
    {
      title: 'Project Activities',
      route: '/pages/layout/tabscorpsce/tabcorpsce2',
    },
  ];

}
