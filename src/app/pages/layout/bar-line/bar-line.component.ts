import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { ScenarioData } from '../../../@core/data/scenario';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'bar-line',
  styleUrls: ['./bar-line.component.scss'],
  templateUrl: './bar-line.component.html',
})
export class BarLineComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  echartsInstance;
  dataSeries: any = {};
  data: any = {};
  private alive = true;

  constructor(private theme: NbThemeService, private scenarioService: ScenarioData) {
    this.scenarioService.getBarLineData().pipe(takeWhile(() => this.alive)).subscribe(data => {
      this.dataSeries = data;
    });
  }

  ngAfterViewInit() {
    this.data = this.dataSeries.value;
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

    this.options = {
      color: ['#01850c', '#fc7703','#014c85','#fc1803'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        }
      },
      toolbox: {
        feature: {
          //dataView: {title:'Data',show: true, readOnly: false,},
          magicType: { title: {line: "Line",bar: "Bar",},show: true, type: ['line', 'bar']},
          restore: {title:'Reset',show: true},
          saveAsImage: {title:"Save",show: true}
        }
      },
      legend: {
        data: this.dataSeries.series,
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
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
            type: 'shadow',
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
          name: 'Asset',
          /* min: 0,
          max: 250,
          interval: 50, */
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
            //formatter: '{value} ml'
            textStyle: {
              color: echarts.textColor,
            },
          },
        },
        {
          type: 'value',
          name: this.dataSeries.series[0],
          /* min: 0,
          max: 25,
          interval: 5, */
          axisLabel: {
            formatter: '{value}'
          }
        }
      ],
      series: [
        {
          name: this.dataSeries.series[1],
          type: 'bar',
          data: this.data.asset1
        },
        {
          name: this.dataSeries.series[2],
          type: 'bar',
          data: this.data.asset2
        },
        {
          name: this.dataSeries.series[3],
          type: 'bar',
          data: this.data.asset3
        },
        {
          name: this.dataSeries.series[0],
          type: 'line',
          yAxisIndex: 1,
          data: this.data.production
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
      series: [{data: this.data.asset1},{data: this.data.asset2},{data: this.data.asset3},{data: this.data.production}],
    });
  }
}
