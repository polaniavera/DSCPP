import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { PortfolioData } from '../../../@core/data/portfolio';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'bar-horizontal',
  styleUrls: ['./bar-horizontal.component.scss'],
  templateUrl: './bar-horizontal.component.html',
})
export class BarHorizontalComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  echartsInstance;
  dataSeries: any = {};
  data: any = {};
  private alive = true;

  constructor(private theme: NbThemeService, private portfolioService: PortfolioData) {
    this.portfolioService.getBarHorizontalData().pipe(takeWhile(() => this.alive)).subscribe(data => {
      this.dataSeries = data;
    });
  }

  ngAfterViewInit() {
    this.data = this.dataSeries.npv;
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: ['#014c85','#01850c','#fc1803','#fc7703'],
        grid: {
          left: '2%',
          right: '5%',
          bottom: '2%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: this.dataSeries.series,
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: {
          type: 'value',
        },
        yAxis: {
          type: 'category',
          data: ['Value', 'Cost'],
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
                data: this.data.asset1,
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
                data: this.data.asset2,
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
    if(newValue == 'npv'){
      this.data = this.dataSeries.npv;
    }else if(newValue == 'utc'){
      this.data = this.dataSeries.utc;
    }else if(newValue == 'dcf'){
      this.data = this.dataSeries.dcf;
    }else if(newValue == 'rf'){
      this.data = this.dataSeries.rf;
    }else{
      this.data = this.dataSeries.irr;
    }
    this.echartsInstance.setOption({
      series: [{data: this.data.asset1},{data: this.data.asset2},{data: this.data.asset3}]
    });
  }

}
