import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { StatsProgressBarData } from '../../../@core/data/stats-progress-bar';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'gantt-kpi',
  styleUrls: ['./gantt-kpi.component.scss'],
  templateUrl: './gantt-kpi.component.html',
})
export class GanttKpiComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  echartsInstance;
  dataSeries: any = {};
  data: any = {};
  private alive = true;

  constructor(private theme: NbThemeService, private statsProgressBarService: StatsProgressBarData) {
    this.statsProgressBarService.getChartsKpiData().pipe(takeWhile(() => this.alive)).subscribe(data => {
      this.dataSeries = data;
    });
  }

  ngAfterViewInit() {
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
            /* axisPointer: {
              type: 'cross',
            }, */
          },
          /* toolbox: {
            feature: {
              magicType: { title: {line: "",bar: "",},show: true, type: ['line', 'bar']},
              saveAsImage: {title:".",show: true}
            }
          }, */
          title: [{top: '1%',left: '5.5%',text: 'Budget',textStyle: {fontSize: 13,fontWeight: "normal"}},
            {top: '1%',left: '29.5%',text: 'Resources',textStyle: {fontSize: 13,fontWeight: "normal"}},
            {top: '1%',left: '53.5%',text: 'Risks',textStyle: {fontSize: 13,fontWeight: "normal"}},
            {top: '1%',left: '77.5%',text: 'Issues',textStyle: {fontSize: 13,fontWeight: "normal"}},],
          xAxis: [{data: this.dataSeries.category,gridIndex: 0,axisLabel: {fontSize: 9},axisPointer: {type: 'shadow'}},
            {data: this.dataSeries.category,gridIndex: 1,axisLabel: {fontSize: 9},axisPointer: {type: 'shadow'}},
            {data: this.dataSeries.category,gridIndex: 2,axisLabel: {fontSize: 9},axisPointer: {type: 'shadow'}},
            {data: this.dataSeries.category,gridIndex: 3,axisLabel: {fontSize: 9},axisPointer: {type: 'shadow'}},],
          yAxis: [{gridIndex: 0,axisLabel: {fontSize: 9}},
            {gridIndex: 1,axisLabel: {fontSize: 9},scale: true},
            {gridIndex: 2,axisLabel: {fontSize: 9},scale: true},
            {gridIndex: 3,axisLabel: {fontSize: 9},scale: true},],
          grid: [{top: '15%',bottom: '5%', left: '3%', right: '75%',containLabel: true},
            {top: '15%',bottom: '5%', left: '27%', right: '51%',containLabel: true},
            {top: '15%',bottom: '5%', left: '51%', right: '27%',containLabel: true},
            {top: '15%',bottom: '5%', left: '75%', right: '3%',containLabel: true},],
          series: [{type: 'bar',showSymbol: false,data: this.dataSeries.budget,xAxisIndex: 0,yAxisIndex: 0,},
            {type: 'bar',showSymbol: false,data: this.dataSeries.resources,xAxisIndex: 1,yAxisIndex: 1,},
            {type: 'bar',showSymbol: false,data: this.dataSeries.risks,xAxisIndex: 2,yAxisIndex: 2,},
            {type: 'bar',showSymbol: false,data: this.dataSeries.issues,xAxisIndex: 3,yAxisIndex: 3,},]
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
      series: [{data: this.data.budget},{data: this.data.resources},{data: this.data.risks},{data: this.data.issues},],
    });
  }
}
