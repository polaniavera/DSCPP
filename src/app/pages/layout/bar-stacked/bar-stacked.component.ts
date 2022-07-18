import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { ScenarioData } from '../../../@core/data/scenario';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'bar-stacked',
  styleUrls: ['./bar-stacked.component.scss'],
  templateUrl: './bar-stacked.component.html',
})
export class BarStackedComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  echartsInstance;
  dataSeries: any = {};
  data: any = {};
  private alive = true;

  constructor(private theme: NbThemeService, private scenarioService: ScenarioData) {
    this.scenarioService.getBarStackedData().pipe(takeWhile(() => this.alive)).subscribe(data => {
        this.dataSeries = data;
    });
  }

  ngAfterViewInit() {
    this.data = this.dataSeries.raw;
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

    const colors: any = config.variables;
    const echarts: any = config.variables.echarts;

    this.options = {
        backgroundColor: echarts.bg,
        color: ['#01850c','#014c85','#fc1803'],
        tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
        },
        },
        toolbox: {
            feature: {
                mark: { show: true },
                magicType: { show: true, type: ["stack", "tiled"], title: {stack: "Stack", tiled: "Tiled",}},
                saveAsImage: { show: true, title: "Save" },
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
        xAxis: {
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
        series: [{
            name: this.dataSeries.series[0],
            type: 'bar',
            data: this.data.asset1,
            emphasis: {
                focus: 'series'
            },
            animationDelay: function (idx) {
                return idx * 10;
            }
        }, {
            name: this.dataSeries.series[1],
            type: 'bar',
            data: this.data.asset2,
            emphasis: {
                focus: 'series'
            },
            animationDelay: function (idx) {
                return idx * 10 + 100;
            }
        }, {
            name: this.dataSeries.series[2],
            type: 'bar',
            data: this.data.asset3,
            emphasis: {
                focus: 'series'
            },
            animationDelay: function (idx) {
                return idx * 10 + 200;
            }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
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
    if(newValue == 'raw'){
      this.data = this.dataSeries.raw;
    }else{
      this.data = this.dataSeries.optimized;
    }
    this.echartsInstance.setOption({
      series: [{data: this.data.asset1},{data: this.data.asset2},{data: this.data.asset3}],
    });
  } 
}
