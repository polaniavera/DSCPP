import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'injection-upstream',
  styleUrls: ['./injection-upstream.component.scss'],
  templateUrl: './injection-upstream.component.html',
})
export class InjectionUpstreamComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        title: {
          text: 'Comparison'
        },
        backgroundColor: echarts.bg,
        color: ['blue', 'green'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          },
        },
        legend: {
          data: ['Optimized', 'Raw'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        grid: {
          top: 70,
          bottom: 50,
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
              label: {
                formatter: params => {
                  return (
                    'Value  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                  );
                },
              },
            },
            data: [
              '2017-1','2017-2','2017-3','2017-4','2017-5','2017-6','2017-7','2017-8',
              '2017-9','2017-10','2017-11','2017-12','2018','2019','2020','2021','2022',
              '2023','2024','2025','2026','2027','2028','2029','2030',
            ],
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
            name: 'Optimized',
            type: 'line',
            smooth: false,
            data: [2.6, 5.9, 9.0, 10.1, 13.7, 20.7, 21.6, 22.2, 23.7, 25.8, 29.0, 32.3,
              32.6, 35.9, 39.0, 38.4, 38.7, 39.1, 39.9, 42.2, 48.7, 58.8, 60.0, 62.3,61.2],
          },
          {
            name: 'Raw',
            type: 'line',
            smooth: false,
            data: [4.6, 6.9, 8.7, 9.1, 11.7, 10.7, 11.6, 9.2, 13.7, 18.8, 28.0, 29.3,
              28.6, 29.9, 31.0, 26.6, 27.7, 29.7, 30.6, 32.2, 38.7, 42.8, 51.0, 55.3, 56.2],
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
