import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { ScenarioData } from '../../../@core/data/scenario';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'production-upstream',
  styleUrls: ['./production-upstream.component.scss'],
  templateUrl: './production-upstream.component.html',
})
export class ProductionUpstreamComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  echartsInstance;
  dataSeries: any = {};
  data: any = {};
  private alive = true;

  constructor(private theme: NbThemeService, private scenarioService: ScenarioData) {
    this.scenarioService.getProductionUpstreamData().pipe(takeWhile(() => this.alive)).subscribe(data => {
      this.dataSeries = data;
    });
  }

  ngAfterViewInit() {
    this.data = this.dataSeries.oil;
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: ['#01850c', '#fc7703','#014c85','#fc1803'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          },
        },
        toolbox: {
          feature: {
            magicType: { title: {line: "Line",bar: "Bar",},show: true, type: ['line', 'bar']},
            //restore: {title:'Reset',show: true},
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
            smooth: true,
            data: this.data.asset1
          },
          {
            name: this.dataSeries.series[1],
            type: 'line',
            smooth: true,
            data: this.data.asset2
          },
          {
            name: this.dataSeries.series[2],
            type: 'line',
            smooth: true,
            data: this.data.asset3
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
      series: [{data: this.data.asset1},{data: this.data.asset2},{data: this.data.asset3}],
    });
  }
}
