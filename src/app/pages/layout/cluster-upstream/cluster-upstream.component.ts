import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { PortfolioData } from '../../../@core/data/portfolio';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'cluster-upstream',
  styleUrls: ['./cluster-upstream.component.scss'],
  templateUrl: './cluster-upstream.component.html',
})
export class ClusterUpstreamComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  echartsInstance;
  dataSeries: any = {};
  data: any = {};
  private alive = true;

  constructor(private theme: NbThemeService, private portfolioService: PortfolioData) {
    this.portfolioService.getClusterUpstreamData().pipe(takeWhile(() => this.alive)).subscribe(data => {
        this.dataSeries = data;
    });
  }

  ngAfterViewInit() {
    this.data = this.dataSeries.value;
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: ['#014c85','#01850c','#fc1803','#fc7703'],
        title: {
            text: '',
            //subtext: 'Data from: Heinz 2003'
        },
        grid: {
            left: '2%',
            right: '5%',
            bottom: '2%',
            containLabel: true
        },
        tooltip: {
            // trigger: 'axis',
            showDelay: 0,
            formatter: function (params) {
                if (params.value.length > 1) {
                    return params.seriesName + ' :<br/>'
                    + params.value[0] +' - '+
                    + params.value[1];
                }
                else {
                    return params.seriesName + ' :<br/>'
                    + params.name + ' : '
                    + params.value + 'usd';
                }
            },
            axisPointer: {
                show: true,
                type: 'cross',
                /* lineStyle: {
                    type: 'dashed',
                    width: 1
                } */
            }
        },
        toolbox: {
            feature: {
                dataZoom: {title: {zoom:['Zoom'],back:['X']}},
                /* brush: {
                    type: ['rect']
                } */
            }
        },
        /* brush: {
        }, */
        legend: {
            data: this.dataSeries.series,
            textStyle: {
              color: echarts.textColor,
            },
            /* left: 'center',
            bottom: 10 */
        },
        xAxis: [
          {
            type: 'value',
            scale: true,
            axisTick: {alignWithLabel: true,},
            axisLine: {onZero: false,lineStyle: {color: '#000000',},},
            axisLabel: {textStyle: {color: echarts.textColor,},},
          }
        ],
        yAxis: [
          {
            type: 'value',
            scale: true,
            axisTick: {alignWithLabel: true,},
            axisLine: {onZero: false,lineStyle: {color: '#000000',},},
            axisLabel: {textStyle: {color: echarts.textColor,},},
          }
        ],
        series: [
            {
                name: this.dataSeries.series[0],
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                data: this.data.asset1,
                markArea: {
                    silent: true,
                    itemStyle: {
                        color: 'transparent',
                        borderWidth: 0.75,
                        borderType: 'dashed'
                    },
                    data: [[{
                        name: this.dataSeries.series[0]+' Range',
                        xAxis: 'min',
                        yAxis: 'min'
                    }, {
                        xAxis: 'max',
                        yAxis: 'max'
                    }]]
                },
                markPoint: {
                    data: [
                        {type: 'max', name: 'Max'},
                        {type: 'min', name: 'Min'}
                    ]
                },
                markLine: {
                    lineStyle: {
                        type: 'solid'
                    },
                    data: [
                        {type: 'average', name: 'Average'},
                    ]
                }
            },
            {
                name: this.dataSeries.series[1],
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                data: this.data.asset2,
                markArea: {
                    silent: true,
                    itemStyle: {
                        color: 'transparent',
                        borderWidth: 0.75,
                        borderType: 'dashed'
                    },
                    data: [[{
                        name: this.dataSeries.series[1]+' Range',
                        xAxis: 'min',
                        yAxis: 'min'
                    }, {
                        xAxis: 'max',
                        yAxis: 'max'
                    }]]
                },
                markPoint: {
                    data: [
                        {type: 'max', name: 'Max'},
                        {type: 'min', name: 'Min'}
                    ]
                },
                markLine: {
                    lineStyle: {
                        type: 'solid'
                    },
                    data: [
                        {type: 'average', name: 'Average'},
                        //{ xAxis: 170 }
                    ]
                }
            },
            {
                name: this.dataSeries.series[2],
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                data: this.data.asset3,
                markArea: {
                    silent: true,
                    itemStyle: {
                        color: 'transparent',
                        borderWidth: 0.75,
                        borderType: 'dashed'
                    },
                    data: [[{
                        name: this.dataSeries.series[2]+' Range',
                        xAxis: 'min',
                        yAxis: 'min'
                    }, {
                        xAxis: 'max',
                        yAxis: 'max'
                    }]]
                },
                markPoint: {
                    data: [
                        {type: 'max', name: 'Max'},
                        {type: 'min', name: 'Min'}
                    ]
                },
                markLine: {
                    lineStyle: {
                        type: 'solid'
                    },
                    data: [
                        {type: 'average', name: 'Average'},
                        //{ xAxis: 170 }
                    ]
                }
            }
        ]
    };

    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
    this.alive = false;
  }

  onChartInit(ec) {
    this.echartsInstance = ec;
  }

  setValue(newValue: String){
    if(newValue == 'value'){
        this.data = this.dataSeries.value;
    }else{
        this.data = this.dataSeries.cost;
    }
    this.echartsInstance.setOption({
        series: [{data: this.data.asset1},{data: this.data.asset2},{data: this.data.asset3}],
    });
  }
}
