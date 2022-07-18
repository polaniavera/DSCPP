import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { BusinessData } from '../../../@core/data/business';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'bar-upstream',
  styleUrls: ['./bar-upstream.component.scss'],
  templateUrl: './bar-upstream.component.html',
})
export class BarUpstreamComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  echartsInstance;
  dataSeries: any = {};
  data: any = {};
  private alive = true;

  constructor(private theme: NbThemeService, private businessService: BusinessData) {
    this.businessService.getBarUpstreamData().pipe(takeWhile(() => this.alive)).subscribe(data => {
      this.dataSeries = data;
    });
  }

  ngAfterViewInit() {
    this.data = this.dataSeries.cash;
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: ['#014c85','#01850c','#fc1803','#fc7703'],
        toolbox: {
          show: true,
          feature: {
              mark: { show: true },
              magicType: { show: true, type: ["stack", "tiled"], title: {
                stack: "Stack",
                tiled: "Tiled",
              }
            },
            saveAsImage: { show: true, title: "Save" },
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          },
          label: {
            backgroundColor: '#6a7985'
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
        xAxis: {
            type: 'category',
            data: this.dataSeries.date
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: this.dataSeries.series[0],
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: this.data.asset1
            },
            {
                name: this.dataSeries.series[1],
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: this.data.asset2
            },
            {
                name: this.dataSeries.series[2],
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: this.data.asset3
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
    if(newValue == 'dcf'){
      this.data = this.dataSeries.dcf;
    }else if(newValue == 'capex'){
      this.data = this.dataSeries.capex;
    }else if(newValue == 'opex'){
      this.data = this.dataSeries.opex;
    }else{
      this.data = this.dataSeries.cash;
    }
    this.echartsInstance.setOption({
      series: [{data: this.data.asset1},{data: this.data.asset2},{data: this.data.asset3}],
    });
  }
}