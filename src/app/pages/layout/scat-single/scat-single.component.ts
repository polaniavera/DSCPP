import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { PortfolioData } from '../../../@core/data/portfolio';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'scat-single',
  styleUrls: ['./scat-single.component.scss'],
  templateUrl: './scat-single.component.html',
})
export class ScatSingleComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  echartsInstance;
  dataSeries: any = {};
  data: any = {};
  private alive = true;

  constructor(private theme: NbThemeService, private portfolioService: PortfolioData) {
    this.portfolioService.getScatSingleData().pipe(takeWhile(() => this.alive)).subscribe(data => {
        this.dataSeries = data;
    });
  }

  ngAfterViewInit() {
    this.data = this.dataSeries.value;
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

    const colors: any = config.variables;
    const echarts: any = config.variables.echarts;
        
    this.options = {
        color: ['#014c85','#01850c','#fc1803','#fc7703'],
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
            data: this.dataSeries.series,
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
            name: this.dataSeries.series[0],
            data: this.data.asset1,
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
            name: this.dataSeries.series[1],
            data: this.data.asset2,
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
        }, {
            name: this.dataSeries.series[2],
            data: this.data.asset3,
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
