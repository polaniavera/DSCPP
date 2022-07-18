import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { BusinessData } from '../../../@core/data/business';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'waterfall-upstream',
  styleUrls: ['./waterfall-upstream.component.scss'],
  templateUrl: './waterfall-upstream.component.html',
})
export class WaterfallUpstreamComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  echartsInstance;
  dataSeries: any = {};
  data: any = {};
  private alive = true;

  constructor(private theme: NbThemeService, private businessService: BusinessData) {
    this.businessService.getWaterfallData().pipe(takeWhile(() => this.alive)).subscribe(data => {
      this.dataSeries = data;
    });
  }

  ngAfterViewInit() {
    this.data = this.dataSeries.service;
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: ['#014c85','#01850c','#fc1803','#fc7703'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            label: {
                backgroundColor: '#6a7985'
            },
            formatter: function (params) {
                var tar;
                if (params[1].value !== '-') {
                    tar = params[1];
                }
                else {
                    tar = params[0];
                }
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
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
            splitLine: {show: false},
            data: this.dataSeries.category,
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: this.dataSeries.series[0],
                type: 'bar',
                stack: 'total',
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    itemStyle: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: this.data.total
            },
            {
                name: this.dataSeries.series[1],
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    position: 'top'
                },
                data: this.data.asset1
            },
            {
                name: this.dataSeries.series[2],
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    position: 'bottom'
                },
                data: this.data.asset2
            },
            {
                name: this.dataSeries.series[3],
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    position: 'bottom'
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
    if(newValue == 'product'){
      this.data = this.dataSeries.product;
    }else if(newValue == 'other'){
      this.data = this.dataSeries.other;
    }else{
      this.data = this.dataSeries.service;
    }
    this.echartsInstance.setOption({
      series: [{data: this.data.total},{data: this.data.asset1},{data: this.data.asset2},{data: this.data.asset3}],
    });
  }

}
