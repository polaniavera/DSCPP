import { Component } from '@angular/core';

@Component({
  selector: 'ngx-tabfield1',
  templateUrl: './tabsfield1.component.html',
})
export class Tabfield1Component { }

@Component({
  selector: 'ngx-tabfield2',
  templateUrl: './tabsfield2.component.html',
})
export class Tabfield2Component { }

@Component({
  selector: 'ngx-tabsfield',
  styleUrls: ['./tabsfield.component.scss'],
  templateUrl: './tabsfield.component.html',
})
export class TabsfieldComponent {

  tabsfield: any[] = [
    {
      title: 'Overview',
      route: '/pages/layout/tabsfield/tabfield1',
    },
    {
      title: 'Waterfall Analysis',
      route: '/pages/layout/tabsfield/tabfield2',
    },
  ];

}
