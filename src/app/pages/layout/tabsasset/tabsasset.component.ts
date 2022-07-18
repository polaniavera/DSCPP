import { Component } from '@angular/core';

@Component({
  selector: 'ngx-tabasset1',
  templateUrl: './tabsasset1.component.html',
})
export class Tabasset1Component { }

@Component({
  selector: 'ngx-tabasset2',
  templateUrl: './tabsasset2.component.html',
})
export class Tabasset2Component { }

@Component({
  selector: 'ngx-tabsasset',
  styleUrls: ['./tabsasset.component.scss'],
  templateUrl: './tabsasset.component.html',
})
export class TabsassetComponent {

  tabsasset: any[] = [
    {
      title: 'Overview',
      route: '/pages/layout/tabsasset/tabasset1',
    },
    {
      title: 'Waterfall Analysis',
      route: '/pages/layout/tabsasset/tabasset2',
    },
  ];

}
