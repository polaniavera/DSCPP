import { Component, Input, ViewChildren, AfterViewInit, QueryList } from '@angular/core';

@Component({
  selector: 'ngx-tab1',
  templateUrl: './tabs1.component.html',
})
export class Tab1Component{
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
  selector: 'ngx-tab2',
  templateUrl: './tabs2.component.html',
})
export class Tab2Component {
  ngOnInit() {
    this.waterfallSelected = 'service';
  }
  waterfallItems = [{value: 'service',name: 'Service',},{value: 'product',name: 'Product',},{value: 'other',name: 'Other',}];
  waterfallSelected = 'service';
}

@Component({
  selector: 'ngx-tab3',
  templateUrl: './tabs3.component.html',
})
export class Tab3Component { 
  ngOnInit() {
    this.waterfallSelected = 'service';
  }
  waterfallItems = [{value: 'service',name: 'Service',},{value: 'product',name: 'Product',},{value: 'other',name: 'Other',}];
  waterfallSelected = 'service';
}

@Component({
  selector: 'ngx-tab4',
  templateUrl: './tabs4.component.html',
})
export class Tab4Component { 
  ngOnInit() {
    this.waterfallSelected = 'service';
  }
  waterfallItems = [{value: 'service',name: 'Service',},{value: 'product',name: 'Product',},{value: 'other',name: 'Other',}];
  waterfallSelected = 'service';
}

@Component({
  selector: 'ngx-tabs',
  styleUrls: ['./tabs.component.scss'],
  templateUrl: './tabs.component.html',
})
export class TabsComponent {

  tabs: any[] = [
    {
      title: 'Information',
      route: '/pages/layout/tabs/tab4',
    },
    {
      title: 'Overview',
      route: '/pages/layout/tabs/tab1',
    },
    {
      title: 'Waterfall Analysis',
      route: '/pages/layout/tabs/tab2',
    },
    {
      title: 'Project Activity',
      route: '/pages/layout/tabs/tab3',
    },
  ];

}
