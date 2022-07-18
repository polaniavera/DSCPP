import { Component } from '@angular/core';

@Component({
  selector: 'ngx-tabport1',
  templateUrl: './tabsport1.component.html',
})
export class Tabport1Component { 
  ngOnInit() {
    this.clusterSelected = 'value';
    this.barhorSelected = 'npv';
  }
  clusterItems = [{value: 'value',name: 'Value',},{value: 'cost',name: 'Cost',},];
  barhorItems = [{value: 'npv',name: 'NPV',},{value: 'utc',name: 'UTC',},{value: 'dcf',name: 'DCF',},
    {value: 'rf',name: 'RF',},{value: 'irr',name: 'IRR',},];
  clusterSelected = 'value';
  barhorSelected = 'npv';
}

@Component({
  selector: 'ngx-tabport2',
  templateUrl: './tabsport2.component.html',
})
export class Tabport2Component { 
  ngOnInit() {
    this.scenarioSelected = '1';
  }
  scenarioItems = [{value: '1',name: '1',},{value: '2',name: '2',},{value: '3',name: '3',}];
  scenarioSelected = '1';
}

@Component({
  selector: 'ngx-tabsport',
  styleUrls: ['./tabsport.component.scss'],
  templateUrl: './tabsport.component.html',
})
export class TabsportComponent {

  tabsport: any[] = [
    {
      title: 'Analysis',
      route: '/pages/layout/tabsport/tabport1',
    },
    {
      title: 'Detailed',
      route: '/pages/layout/tabsport/tabport2',
    },
  ];

}
