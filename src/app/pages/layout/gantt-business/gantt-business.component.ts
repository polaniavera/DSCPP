import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import * as Highcharts from "highcharts/highcharts-gantt";
import draggable from "highcharts/modules/draggable-points";
import { NbDialogService } from '@nebular/theme';
import { DialogGanttComponent } from './dialog-gantt/dialog-gantt.component';
import { getHeapSpaceStatistics } from 'v8';

if (typeof Highcharts === "object") {
  //draggable(Highcharts);
}

@Component({
  selector: 'gantt-business',
  styleUrls: ['./gantt-business.component.scss'],
  templateUrl: './gantt-business.component.html',
})

export class GanttBusinessComponent implements AfterViewInit, OnDestroy {

  constructor(private dialogService: NbDialogService) {}

  names: string[] = [];
  today = new Date();
  day = 1000 * 60 * 60 * 24;
  dateFormat = Highcharts.dateFormat;
  defined = Highcharts.defined;
  isObject = Highcharts.isObject;
  todayTime = this.today.getTime();
  Highcharts: typeof Highcharts = Highcharts;
  chart;

  ngAfterViewInit() {
    this.chart = Highcharts.ganttChart('container', {
      plotOptions: {
        series: {
          animation: false,
          dragDrop: {
            draggableX: true,
            draggableY: true,
            dragMinY: 0,
            dragMaxY: 2,
            dragPrecisionX: this.day / 3 // Snap to eight hours
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}',
            style: {
              cursor: 'default',
              pointerEvents: 'none'
            }
          },
          allowPointSelect: true,
        }
      },

      tooltip: {
        xDateFormat: '%d/%b/%y'
      },

      /* yAxis: {
        type: 'category',
        categories: ['Tech', 'Marketing', 'Sales'],
      }, */
        
      series: [{
          type: "gantt",
          name: "Asset 1",
          data: [/* {
              name: 'Asset 1',
              id: 'asset1',
              color:'#F2935C',
            }, */
            { 
              id:'project1',
              name: "Project 1",
              //parent: 'asset1',
              start: Date.UTC(2021, 4, 1),
              end: Date.UTC(2021, 5, 25),
              completed: {
                amount: 0.25,
                fill: '#D94032'
              },
              color:'#F2935C',
            },
            {
              id: 'project2',
              name: "Project 2",
              //parent: 'asset1',
              start: Date.UTC(2021, 5, 25),
              end: Date.UTC(2021, 6, 29),
              dependency:'project1',
              color:'#F2935C',
              completed: {
                amount: 0.3,
                fill: '#D94032'
              },
            },
            {
              id: 'project3',
              name: "Project 3",
              //parent: 'asset1',
              start: Date.UTC(2021, 5, 20),
              end: Date.UTC(2021, 6, 25),
              dependency:'project1',
              completed: {
                amount: 0.12,
                fill: '#D94032'
              },
              color:'#F2935C',
            },
            {
              id: 'project4',
              name: "Project 4",
              //parent: 'asset1',
              start: Date.UTC(2021, 6, 23),
              end: Date.UTC(2021, 8, 26),
              dependency:'project3',
              color:'#F2935C',
              completed: {
                amount: 0.1,
                fill: '#D94032'
              },
            },
         /* ]
        },
        {
          type: "gantt",
          name: 'Asset 2',
          data: [ {
            name: 'Asset 2',
            id: 'asset2',
            color:'#397D92',
            }, */ {
              name: 'Project 5',
              id: 'project5',
              //parent: 'asset2',
              start: this.todayTime + 100 * this.day,
              end: this.todayTime + 150 * this.day,
              completed: {
                amount: 0.6,
                fill: '#0C2C40'
              },
              color:'#397D92',
            }, {
              name: 'Project 6',
              id: 'project6',
              dependency: 'project5',
              //parent: 'asset2',
              start: this.todayTime + 150.5 * this.day,
              end: this.todayTime + 160 * this.day,
              milestone: false,
              color:'#397D92',
            }, {
              name: 'Project 7',
              id: 'project7',
              dependency: 'project6',
              //parent: 'asset2',
              start: this.todayTime + 160 * this.day,
              end: this.todayTime + 200 * this.day,
              color:'#397D92',
              completed: {
                amount: 0.15,
                fill: '#0C2C40'
              },
            }, {
              id: 'project8',
              name: 'Project 8',
              dependency: 'project7',
              //parent: 'asset2',
              start: this.todayTime + 210 * this.day,
              end: this.todayTime + 230 * this.day,
              milestone: false,
              color:'#397D92',
              completed: {
                amount: 0.25,
                fill: '#0C2C40'
              },
            },
          /*]
        },
        {
          type: "gantt",
          name: 'Asset 3',
          data: [ {
            name: 'Asset 3',
            id: 'asset3',
            color:'#00BDFC',
            }, */ {
              name: 'Project 9',
              id: 'project9',
              //parent: 'asset3',
              start: this.todayTime + 200 * this.day,
              end: this.todayTime + 240 * this.day,
              completed: {
                amount: 0.6,
                fill: '#0C2C40'
              },
              color:'#00BDFC',
            }, {
              name: 'Project 10',
              id: 'project10',
              dependency: 'project9',
              //parent: 'asset3',
              start: this.todayTime + 238 * this.day,
              end: this.todayTime + 255 * this.day,
              milestone: false,
              color:'#00BDFC',
            }, {
              name: 'Project 11',
              id: 'project11',
              dependency: 'project10',
              //parent: 'asset3',
              start: this.todayTime + 248 * this.day,
              end: this.todayTime + 350 * this.day,
              color:'#397D92',
              completed: {
                amount: 0.15,
                fill: '#00BDFC'
              },
            },
          ]
        },
      ],
    });
  }

  ngOnDestroy(): void {
    //this.themeSubscription.unsubscribe();
  }

  showDialog(){
    this.dialogService.open(
      DialogGanttComponent, {
        context: {
          assetArr: this.getAssets()
      },
    }).onClose.subscribe(val => this.addProject1(val));
      //.onClose.subscribe(name => name && this.names.push(name));
  }

  getAssets(){
    var assets: string[] = [];
    this.chart.series.forEach(element => {
      assets.push(element.name);
      console.log(element);
    });
    return assets;
  }

  addProject (){
    var series = this.chart.series;
    console.log(series[0]);
    series[0].addPoint({
      start: Date.UTC(2021, 8, 26),
      end: Date.UTC(2021, 9, 30),
      name: 'projectTest',
      parent: 'asset1',
    }, true, false);
    //draggable(Highcharts);
  }


  addProject1 (value) {
    console.log(value);
    var series = this.chart.series;
    console.log(series);
    series[0].addPoint({
      start: Date.UTC(2021, 8, 26),
      end: Date.UTC(2021, 9, 30),
      name: value[0],
      //parent: 'asset1',
    }, true, false);
    // Get values from dialog
    /* var series = chart.series[0],
      name = inputName.value,
      undef,
      dependency = chart.get(
        selectDependency.options[selectDependency.selectedIndex].value
      ),
      y = parseInt(
        selectDepartment.options[selectDepartment.selectedIndex].value,
        10
      ),
      maxEnd = reduce(series.points, function (acc, point) {
        return point.y === y && point.end ? Math.max(acc, point.end) : acc;
      }, 0),
      milestone = chkMilestone.checked || undef;
  
    // Empty category
    if (maxEnd === 0) {
      maxEnd = today;
    }
  
    // Add the point
    series.addPoint({
      start: maxEnd + (milestone ? day : 0),
      end: milestone ? undef : maxEnd + day,
      y: y,
      name: name,
      dependency: dependency ? dependency.id : undef,
      milestone: milestone
    });
  
    // Hide dialog
    addTaskDialog.className += ' hidden';
    isAddingTask = false; */
  };
  

}
