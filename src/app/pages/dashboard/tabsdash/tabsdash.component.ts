import { Component, Input, ViewChildren, AfterViewInit, QueryList } from '@angular/core';

@Component({
  selector: 'ngx-tabdash1',
  templateUrl: './tabdash1.component.html',
})
export class Tabdash1Component{
  ngOnInit() {
    this.areaUpstreamSelected = 'oil';
    this.barUpstreamSelected = 'cash';
  }

  areaUpstreamItems = [{value: 'oil',name: 'Oil',},{value: 'water',name: 'Water',},
    {value: 'gas',name: 'Gas',},{value: 'condensate',name: 'Condensate',}];

  barUpstreamItems = [{value: 'cash',name: 'Cash Flow',},{value: 'dcf',name: 'DCF',},
    {value: 'capex',name: 'CAPEX',},{value: 'opex',name: 'OPEX',}];

  areaUpstreamSelected = 'oil';
  barUpstreamSelected = 'cash';
}

@Component({
  selector: 'ngx-tabdash2',
  templateUrl: './tabdash2.component.html',
})
export class Tabdash2Component {
  ngOnInit() {
    this.waterfallSelected = 'service';
  }
  waterfallItems = [{value: 'service',name: 'Service',},{value: 'product',name: 'Product',},{value: 'other',name: 'Other',}];
  waterfallSelected = 'service';
}

@Component({
  selector: 'ngx-tabsdash',
  styleUrls: ['./tabsdash.component.scss'],
  templateUrl: './tabsdash.component.html',
})
export class TabsdashComponent {

  tabsdash: any[] = [
    {
      title: 'Overview',
      route: '/pages/dashboard/tabsdash/tabdash1',
    },
    {
      title: 'Map',
      route: '/pages/dashboard/tabsdash/tabdash2',
    }
  ];

}
