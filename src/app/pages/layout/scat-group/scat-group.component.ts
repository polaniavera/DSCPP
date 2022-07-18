import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'scat-group',
  styleUrls: ['./scat-group.component.scss'],
  templateUrl: './scat-group.component.html',
})
export class ScatGroupComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      var data = [
        [[28604,77,17096869,'NPV',1990],
        [31163,77.4,27662440,'UTC',1990],
        [1516,68,1154605773,'DCF',1990],
        [13670,74.7,10582082,'RF',1990],
        [28599,75,4986705,'UTC',1990],
        [29476,77.1,56943299,'IRR',1990],
        [31476,75.4,78958237,'NPV',1990],
        [28666,78.1,254830,'UTC',1990],
        [1777,57.7,870601776,'DCF',1990],
        [29550,79.1,122249285,'RF',1990],
        [2076,67.9,20194354,'UTC',1990],
        [12087,72,42972254,'IRR',1990],
        [24021,75.4,3397534,'NPV',1990],
        [43296,76.8,4240375,'UTC',1990],
        [10088,70.8,38195258,'DCF',1990],
        [19349,69.6,147568552,'RF',1990],
        [10670,67.3,53994605,'UTC',1990],
        [26424,75.7,57110117,'DCF',1990],
        [37062,75.4,252847810,'RF',1990]],
        
        [[44056,81.8,23968973,'NPV',2015],
        [43294,81.7,35939927,'UTC',2015],
        [13334,76.9,1376048943,'DCF',2015],
        [21291,78.5,11389562,'RF',2015],
        [38923,80.8,5503457,'IRR',2015],
        [37599,81.9,64395345,'NPV',2015],
        [44053,81.1,80688545,'UTC',2015],
        [42182,82.8,329425,'DCF',2015],
        [5903,66.8,1311050527,'RF',2015],
        [36162,83.5,126573481,'IRR',2015],
        [1390,71.4,25155317,'NPV',2015],
        [34644,80.7,50293439,'UTC',2015],
        [34186,80.6,4528526,'DCF',2015],
        [64304,81.6,5210967,'RF',2015],
        [24787,77.3,38611794,'IRR',2015],
        [23038,73.13,143456918,'NPV',2015],
        [19360,76.5,78665830,'UTC',2015],
        [38225,81.4,64715810,'DCF',2015],
        [53354,79.1,321773631,'RF',2015]]
        ];
    
        var data = [
            [[28604,77,17096869,'RF',1990],
            [31163,77.4,27662440,'DCF',1990],
            [1516,68,1154605773,'UTC',1990],
            [13670,74.7,10582082,'NPV',1990],
            [28599,75,4986705,'IRR',1990],
            [29476,77.1,56943299,'RF',1990],
            [31476,75.4,78958237,'DCF',1990],
            [28666,78.1,254830,'UTC',1990],
            [1777,57.7,870601776,'NPV',1990],
            [29550,79.1,122249285,'IRR',1990],
            [2076,67.9,20194354,'RF',1990],
            [12087,72,42972254,'DCF',1990],
            [24021,75.4,3397534,'UTC',1990],
            [43296,76.8,4240375,'NPV',1990],
            [10088,70.8,38195258,'IRR',1990],
            [19349,69.6,147568552,'RF',1990],
            [10670,67.3,53994605,'DCF',1990],
            [26424,75.7,57110117,'UTC',1990],
            [37062,75.4,252847810,'NPV',1990]],

            [[44056,81.8,23968973,'NPV',2015],
            [43294,81.7,35939927,'UTC',2015],
            [13334,76.9,1376048943,'DCF',2015],
            [21291,78.5,11389562,'RF',2015],
            [38923,80.8,5503457,'IRR',2015],
            [37599,81.9,64395345,'NPV',2015],
            [44053,81.1,80688545,'UTC',2015],
            [42182,82.8,329425,'DCF',2015],
            [5903,66.8,1311050527,'RF',2015],
            [36162,83.5,126573481,'IRR',2015],
            [1390,71.4,25155317,'NPV',2015],
            [34644,80.7,50293439,'UTC',2015],
            [34186,80.6,4528526,'NPV',2015],
            [64304,81.6,5210967,'UTC',2015],
            [24787,77.3,38611794,'DCF',2015],
            [23038,73.13,143456918,'RF',2015],
            [19360,76.5,78665830,'IRR',2015],
            [38225,81.4,64715810,'NPV',2015],
            [53354,79.1,321773631,'UTC',2015]]
        ];
        
        this.options = {
            backgroundColor: echarts.bg,
            title: {
                text: ''
            },
            grid: {
                left: '2%',
                right: '5%',
                bottom: '2%',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                showDelay: 0,
                axisPointer: {
                    show: true,
                    type: 'cross',
                }
            },
            legend: {
                data: ['Value', 'Cost'],
                textStyle: {
                    color: echarts.textColor,
                  },
            },
            xAxis: {  
                axisTick: {alignWithLabel: true,},
                axisLine: {onZero: false,lineStyle: {color: '#000000',},},
                axisLabel: {textStyle: {color: echarts.textColor,},},
            },
            yAxis: {
                axisTick: {alignWithLabel: true,},
                axisLine: {onZero: false,lineStyle: {color: '#000000',},},
                axisLabel: {textStyle: {color: echarts.textColor,},},
                scale: true
            },
            series: [{
                name: 'Value',
                data: data[0],
                type: 'scatter',
                symbolSize: function (data) {
                    return Math.sqrt(data[2]) / 5e2;
                },
                emphasis: {
                    label: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        position: 'top'
                    }
                },
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(120, 36, 50, 0.5)',
                    shadowOffsetY: 5,
                    //color: 'red'
                }
            }, {
                name: 'Cost',
                data: data[1],
                type: 'scatter',
                symbolSize: function (data) {
                    return Math.sqrt(data[2]) / 5e2;
                },
                emphasis: {
                    label: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        position: 'top'
                    }
                },
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(25, 100, 150, 0.5)',
                    shadowOffsetY: 5,
                    //color: 'blue'
                }
            }]
        };

    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
