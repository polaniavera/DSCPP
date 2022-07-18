import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { PortfolioData } from '../../../@core/data/portfolio';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'detailed-portfolio1',
  styleUrls: ['./detailed-portfolio1.component.scss'],
  templateUrl: './detailed-portfolio1.component.html',
})
export class DetailedPortfolio1Component implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  echartsInstance;
  dataSeries: any = {};
  data: any = {};
  private alive = true;

  constructor(private theme: NbThemeService, private portfolioService: PortfolioData) {
    this.portfolioService.getDetailedPortfolioData().pipe(takeWhile(() => this.alive)).subscribe(data => {
      this.dataSeries = data;
    });
  }

  ngAfterViewInit() {
    this.data = this.dataSeries.scenario1;
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      /* var dateList = data.map(function (item) {
          return item[0];
      });
      var valueList = data.map(function (item) {
          return item[1];
      }); */
      
      this.options = {
      
          // Make gradient line here
         /*  visualMap: [{
              show: false,
              type: 'continuous',
              seriesIndex: 0,
              min: 0,
              max: 400
          }, {
              show: false,
              type: 'continuous',
              seriesIndex: 1,
              dimension: 0,
              min: 0,
              max: dateList.length - 1
          }], */
          backgroundColor: echarts.bg,
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
            },
          },
          toolbox: {
            feature: {
              magicType: { title: {line: "",bar: "",},show: true, type: ['line', 'bar']},
              saveAsImage: {title:".",show: true}
            }
          },
          title: [{top: '1%',left: '5.5%',text: 'Oil Rate',textStyle: {fontSize: 13,fontWeight: "normal"}},
            {top: '1%',left: '37.5%',text: 'Water Rate',textStyle: {fontSize: 13,fontWeight: "normal"}},
            {top: '1%',left: '69.5%',text: 'Gas Rate',textStyle: {fontSize: 13,fontWeight: "normal"}},
            {top: '34%',left: '5.5%',text: 'Total Cost',textStyle: {fontSize: 13,fontWeight: "normal"}},
            {top: '34%',left: '37.5%',text: 'Total Revenue',textStyle: {fontSize: 13,fontWeight: "normal"}},
            {top: '34%',left: '69.5%',text: 'Discount NCF',textStyle: {fontSize: 13,fontWeight: "normal"}},
            {top: '67%',left: '5.5%',text: 'NCF',textStyle: {fontSize: 13,fontWeight: "normal"}},
            {top: '67%',left: '37.5%',text: 'NPV',textStyle: {fontSize: 13,fontWeight: "normal"}},
            {top: '67%',left: '69.5%',text: 'CAPEX',textStyle: {fontSize: 13,fontWeight: "normal"}}],
          xAxis: [{data: this.dataSeries.category,gridIndex: 0,axisLabel: {fontSize: 9},axisPointer: {type: 'shadow'}},
            {data: this.dataSeries.category,gridIndex: 1,axisLabel: {fontSize: 9},axisPointer: {type: 'shadow'}},
            {data: this.dataSeries.category,gridIndex: 2,axisLabel: {fontSize: 9},axisPointer: {type: 'shadow'}},
            {data: this.dataSeries.category,gridIndex: 3,axisLabel: {fontSize: 9},axisPointer: {type: 'shadow'}},
            {data: this.dataSeries.category,gridIndex: 4,axisLabel: {fontSize: 9},axisPointer: {type: 'shadow'}},
            {data: this.dataSeries.category,gridIndex: 5,axisLabel: {fontSize: 9},axisPointer: {type: 'shadow'}},
            {data: this.dataSeries.category,gridIndex: 6,axisLabel: {fontSize: 9},axisPointer: {type: 'shadow'}},
            {data: this.dataSeries.category,gridIndex: 7,axisLabel: {fontSize: 9},axisPointer: {type: 'shadow'}},
            {data: this.dataSeries.category,gridIndex: 8,axisLabel: {fontSize: 9},axisPointer: {type: 'shadow'}}],
          yAxis: [{gridIndex: 0,axisLabel: {fontSize: 9}},
            {gridIndex: 1,axisLabel: {fontSize: 9},scale: true},
            {gridIndex: 2,axisLabel: {fontSize: 9},scale: true},
            {gridIndex: 3,axisLabel: {fontSize: 9},scale: true},
            {gridIndex: 4,axisLabel: {fontSize: 9},scale: true},
            {gridIndex: 5,axisLabel: {fontSize: 9},scale: true},
            {gridIndex: 6,axisLabel: {fontSize: 9},scale: true},
            {gridIndex: 7,axisLabel: {fontSize: 9},scale: true},
            {gridIndex: 8,axisLabel: {fontSize: 9},scale: true}],
          grid: [{top: '5%',bottom: '68%', left: '3%', right: '67%',containLabel: true},
            {top: '5%',bottom: '68%', left: '35%', right: '35%',containLabel: true},
            {top: '5%',bottom: '68%', left: '67%', right: '3%',containLabel: true},
            {top: '38%',bottom: '35%', left: '3%', right: '67%',containLabel: true},
            {top: '38%',bottom: '35%', left: '35%', right: '35%',containLabel: true},
            {top: '38%',bottom: '35%', left: '67%', right: '3%',containLabel: true},
            {top: '71%',bottom: '2%', left: '3%', right: '67%',containLabel: true},
            {top: '71%',bottom: '2%', left: '35%', right: '35%',containLabel: true},
            {top: '71%',bottom: '2%', left: '67%', right: '3%',containLabel: true}],
          series: [{type: 'line',showSymbol: false,data: this.data.oil,xAxisIndex: 0,yAxisIndex: 0,smooth: true,},
            {type: 'line',showSymbol: false,data: this.data.water,xAxisIndex: 1,yAxisIndex: 1,smooth: true,},
            {type: 'line',showSymbol: false,data: this.data.gas,xAxisIndex: 2,yAxisIndex: 2,smooth: true,},
            {type: 'line',showSymbol: false,data: this.data.cost,xAxisIndex: 3,yAxisIndex: 3,smooth: true,},
            {type: 'line',showSymbol: false,data: this.data.revenue,xAxisIndex: 4,yAxisIndex: 4,smooth: true,},
            {type: 'line',showSymbol: false,data: this.data.discount,xAxisIndex: 5,yAxisIndex: 5,smooth: true,},
            {type: 'line',showSymbol: false,data: this.data.ncf,xAxisIndex: 6,yAxisIndex: 6,smooth: true,},
            {type: 'line',showSymbol: false,data: this.data.npv,xAxisIndex: 7,yAxisIndex: 7,smooth: true,},
            {type: 'line',showSymbol: false,data: this.data.capex,xAxisIndex: 8,yAxisIndex: 8,smooth: true,}]
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
    if(newValue == '1'){
      this.data = this.dataSeries.scenario1;
    }else if(newValue == '2'){
      this.data = this.dataSeries.scenario2;
    }else{
      this.data = this.dataSeries.scenario3;
    }
    this.echartsInstance.setOption({
      series: [{data: this.data.oil},{data: this.data.water},{data: this.data.gas},{data: this.data.cost},{data: this.data.revenue}
        ,{data: this.data.discount},{data: this.data.ncf},{data: this.data.npv},{data: this.data.capex}],
    });
  }
}
