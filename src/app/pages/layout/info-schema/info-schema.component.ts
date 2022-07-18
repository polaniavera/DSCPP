import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { PortfolioData } from '../../../@core/data/portfolio';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'info-schema',
  styleUrls: ['./info-schema.component.scss'],
  templateUrl: './info-schema.component.html',
})
export class InfoSchemaComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  echartsInstance;
  dataSeries: any = {};
  //data: any = {};
  private alive = true;

  constructor(private theme: NbThemeService, private portfolioService: PortfolioData) {
    /* this.portfolioService.getDetailedPortfolioData().pipe(takeWhile(() => this.alive)).subscribe(data => {
      this.dataSeries = data;
    }); */
  }

  ngAfterViewInit() {
    //this.data = this.dataSeries.scenario1;

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;
      
      this.options = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
      },
      series:[
        {
          type: 'tree',
          name: 'tree1',
          data: [this.data],
          top: '5%',
          left: '15%',
          bottom: '2%',
          right: '25%',
          symbolSize: 7,
          label: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right'
          },
          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left'
            }
          },
          emphasis: {
            focus: 'descendant'
          },
          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750
        }]
      }
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
    this.alive = false;
  }

  onChartInit(ec) {
    this.echartsInstance = ec;
    //this.echartsInstance.on('click', 'series.tree', e => console.log(e));
    this.echartsInstance.on('click', function (params) {
      console.log(params.name);
   });
  }

  data = {
    "name": "Corporate",
    "children": [
      {
      "name": "Asset 1",
      "children": [
        {
        "name": "Field 1",
        "collapsed" : false,
        "children": [
          {"name": "Project 1", "value": 721, "expandAndCollapse": true},
          {"name": "Project 2", "value": 4294}
        ]
        },
        {
          "name": "Field 2",
          "collapsed" : false,
          "children": [
            {"name": "Project 3", "value": 721},
            {"name": "Project 4", "value": 4294}
          ]
          },
        ]
      },
      {
      "name": "Asset 2",
      "children": [
        {
          "name": "Field 3",
          "collapsed" : false,
          "children": [
            {"name": "Project 5", "value": 721},
            {"name": "Project 6", "value": 4294}
          ]
        },
        {
          "name": "Field 4",
          "collapsed" : false,
          "children": [
            {"name": "Project 7", "value": 721},
            {"name": "Project 8", "value": 4294}
          ]
          },
        ]
      },
      {
        "name": "Asset 3",
        "children": [
          {
            "name": "Field 5",
            "collapsed" : false,
            "children": [
              {"name": "Project 9", "value": 721},
              {"name": "Project 10", "value": 4294}
            ]
          },
          {
            "name": "Field 6",
            "collapsed" : false,
            "children": [
              {"name": "Project 11", "value": 721},
              {"name": "Project 12", "value": 4294}
            ]
          },
        ]
      },
    ]
};
}
