import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { ScenarioData } from '../../../@core/data/scenario';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'injection-upstream',
  styleUrls: ['./injection-upstream.component.scss'],
  templateUrl: './injection-upstream.component.html',
})
export class InjectionUpstreamComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  echartsInstance;
  dataSeries: any = {};
  data: any = {};
  private alive = true;

  constructor(private theme: NbThemeService, private scenarioService: ScenarioData) {
    this.scenarioService.getInjectionUpstreamData().pipe(takeWhile(() => this.alive)).subscribe(data => {
      this.dataSeries = data;
    });
  }

  ngAfterViewInit() {
    this.data = this.dataSeries.asset1;
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        title: {
          text: ''
        },
        backgroundColor: echarts.bg,
        color: ['blue', 'green'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          },
        },
        toolbox: {
          feature: {
            magicType: { title: {line: "Line",bar: "Bar",},show: true, type: ['line', 'bar']},
            saveAsImage: {title:"Save",show: true}
          }
        },
        legend: {
          data: this.dataSeries.series,
          textStyle: {
            color: echarts.textColor,
          },
        },
        grid: {
          left: '2%',
          right: '3%',
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
          },
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
          },
        ],
        series: [
          {
            name: this.dataSeries.series[0],
            type: 'line',
            smooth: false,
            data: this.data.optimized
          },
          {
            name: this.dataSeries.series[1],
            type: 'line',
            smooth: false,
            data: this.data.raw
          },
        ],
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
    if(newValue == 'asset1'){
      this.data = this.dataSeries.asset1;
    }else if(newValue == 'asset2'){
      this.data = this.dataSeries.asset2;
    }else{
      this.data = this.dataSeries.asset3;
    }
    this.echartsInstance.setOption({
      series: [{data: this.data.optimized},{data: this.data.raw}],
    });
  }
}
