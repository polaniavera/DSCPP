import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { BusinessData } from '../../../@core/data/business';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'area-upstream',
  styleUrls: ['./area-upstream.component.scss'],
  templateUrl: './area-upstream.component.html',
})
export class AreaUpstreamComponent implements AfterViewInit, OnDestroy  {
  options: any = {};
  themeSubscription: any;
  echartsInstance;
  dataSeries: any = {};
  data: any = {};
  private alive = true;

  constructor(private theme: NbThemeService, private businessService: BusinessData) {
    this.businessService.getAreaUpstreamData().pipe(takeWhile(() => this.alive)).subscribe(data => {
      this.dataSeries = data;
    });
  }

  ngAfterViewInit() {
    this.data = this.dataSeries.oil;
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

    const colors: any = config.variables;
    const echarts: any = config.variables.echarts;

      this.options = {
        title: {
          text: ''
        },
        backgroundColor: echarts.bg,
        color: ['#014c85','#01850c','#fc1803','#fc7703'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: this.dataSeries.series,
          textStyle: {
            color: echarts.textColor,
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: '#000000',
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
            axisPointer: {
              label: {
                formatter: params => {
                  return (
                    'Value  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                  );
                },
              },
            },
            data: this.dataSeries.date
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          }
        ],
        series: [
          {
            name: this.dataSeries.series[0],
            type: 'line',
            stack: 'total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: this.data.asset1
          },
          {
            name: this.dataSeries.series[1],
            type: 'line',
            stack: 'total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: this.data.asset2
          },
          {
            name: this.dataSeries.series[2],
            type: 'line',
            stack: 'total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: this.data.asset3
          },
          /* {
              name: 'Total',
              type: 'line',
              stack: 'total',
              label: {
                  show: true,
                  position: 'top'
              },
              areaStyle: {},
              emphasis: {
                  focus: 'series'
              },
              data: [820, 932, 901, 934, 1290, 1330, 1320,1450,1560,1660,1770]
          } */
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
    if(newValue == 'water'){
      this.data = this.dataSeries.water;
    }else if(newValue == 'gas'){
      this.data = this.dataSeries.gas;
    }else if(newValue == 'condensate'){
      this.data = this.dataSeries.condensate;
    }else{
      this.data = this.dataSeries.oil;
    }
    this.echartsInstance.setOption({
      series: [{data: this.data.asset1},
        {data: this.data.asset2},
        {data: this.data.asset3}],
    });
  }  
}