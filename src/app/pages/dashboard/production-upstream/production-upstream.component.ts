import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'production-upstream',
  styleUrls: ['./production-upstream.component.scss'],
  templateUrl: './production-upstream.component.html',
})
export class ProductionUpstreamComponent implements AfterViewInit, OnDestroy {
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
          text: 'Production'
        },
        backgroundColor: echarts.bg,
        color: ['#01850c', '#fc7703','#014c85','#fc1803'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          },
        },
        legend: {
          data: ['Oil', 'Condensate','Water','Gas'],
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
          /* {
            type: 'category',
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors.success,
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
                    'Precipitation  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                  );
                },
              },
            },
            data: [
              '2015-1',
              '2015-2',
              '2015-3',
              '2015-4',
              '2015-5',
              '2015-6',
              '2015-7',
              '2015-8',
              '2015-9',
              '2015-10',
              '2015-11',
              '2015-12',
            ],
          }, */
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
            name: 'Oil',
            type: 'line',
            smooth: true,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,1.2],
          },
          {
            name: 'Condensate',
            type: 'line',
            smooth: true,
            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7,
              3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7,0.85],
          },
          {
            name: 'Water',
            type: 'line',
            smooth: true,
            data: [2.0, 5.0, 9.6, 25.4, 26.7, 72.7, 145.6, 132.2, 40.7, 25.8, 16.0, 12.3,
              8.6, 15.9, 29.0, 26.4, 23.7, 60.7, 75.6, 112.2, 88.7, 98.8, 60.0, 20.3,15.2],
          },
          {
            name: 'Gas',
            type: 'line',
            smooth: true,
            data: [13.9, 15.9, 21.1, 28.7, 58.3, 79.2, 241.6, 56.6, 65.4, 28.4, 20.3, 10.7,
              31.9, 51.9, 81.1, 38.7, 48.3, 89.2, 131.6, 146.6, 155.4, 118.4, 100.3, 10.7,10.85],
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
