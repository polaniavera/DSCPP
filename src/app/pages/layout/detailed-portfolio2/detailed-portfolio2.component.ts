import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'detailed-portfolio2',
  styleUrls: ['./detailed-portfolio2.component.scss'],
  templateUrl: './detailed-portfolio2.component.html',
})
export class DetailedPortfolio2Component implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  echartsInstance;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;


    var labelTop = {
        normal : {
            label : {
                show : true,
                position : 'center',
                formatter : '{b}',
                textStyle: {
                    baseline : 'bottom'
                }
            },
            labelLine : {
                show : false
            }
        }
    };
    var labelFromatter = {
        normal : {
            label : {
                formatter : function (a,b,c){return 100 - c + '%'},
                textStyle: {
                    baseline : 'top'
                }
            }
        },
    }
    var labelBottom = {
        normal : {
            color: '#ccc',
            label : {
                show : true,
                position : 'center'
            },
            labelLine : {
                show : false
            }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    };
    var radius = [40, 55];
    this.options = {
        legend: {
            x : 'center',
            y : 'bottom',
            data:['A','B','C','D']
        },
        /* title : {
            text: 'The App World',
            subtext: 'from global web index',
            x: 'center'
        }, */
        toolbox: {
            show : true,
            feature : {
                saveAsImage : {show: true}
            }
        },
        series : [
            {
                type : 'pie',
                center : ['30%', '30%'],
                radius : radius,
                //itemStyle : labelFromatter,
                data : [
                    {name:'other', value:46, /* itemStyle : labelBottom */},
                    {name:'A', value:54,/* itemStyle : labelTop */}
                ]
            },
            {
                type : 'pie',
                center : ['70%', '30%'],
                radius : radius,
                //itemStyle : labelFromatter,
                data : [
                    {name:'other', value:56, /* itemStyle : labelBottom */},
                    {name:'B', value:44,/* itemStyle : labelTop */}
                ]
            },
            {
                type : 'pie',
                center : ['30%', '60%'],
                radius : radius,
                //itemStyle : labelFromatter,
                data : [
                    {name:'other', value:65, /* itemStyle : labelBottom */},
                    {name:'C', value:35,/* itemStyle : labelTop */}
                ]
            },
            {
                type : 'pie',
                center : ['70%', '60%'],
                radius : radius,
                //itemStyle : labelFromatter,
                data : [
                    {name:'other', value:70, /* itemStyle : labelBottom */},
                    {name:'D', value:30,/* itemStyle : labelTop */}
                ]
            },
            /* {
                type : 'pie',
                center : ['90%', '30%'],
                radius : radius,
                x:'80%', // for funnel
                itemStyle : labelFromatter,
                data : [
                    {name:'other', value:73, itemStyle : labelBottom},
                    {name:'Weixin', value:27,itemStyle : labelTop}
                ]
            },
            {
                type : 'pie',
                center : ['10%', '70%'],
                radius : radius,
                y: '55%',   // for funnel
                x: '0%',    // for funnel
                itemStyle : labelFromatter,
                data : [
                    {name:'other', value:78, itemStyle : labelBottom},
                    {name:'Twitter', value:22,itemStyle : labelTop}
                ]
            },
            {
                type : 'pie',
                center : ['30%', '70%'],
                radius : radius,
                y: '55%',   // for funnel
                x:'20%',    // for funnel
                itemStyle : labelFromatter,
                data : [
                    {name:'other', value:78, itemStyle : labelBottom},
                    {name:'Skype', value:22,itemStyle : labelTop}
                ]
            },
            {
                type : 'pie',
                center : ['50%', '70%'],
                radius : radius,
                y: '55%',   // for funnel
                x:'40%', // for funnel
                itemStyle : labelFromatter,
                data : [
                    {name:'other', value:78, itemStyle : labelBottom},
                    {name:'Messenger', value:22,itemStyle : labelTop}
                ]
            }, */
        ]
    };
                        


    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  onChartInit(ec) {
    this.echartsInstance = ec;
  }

  setValue(newValue: String){
    if(newValue == 'asset1'){
      this.data = this.data1;
    }else if(newValue == 'asset2'){
      this.data = this.data2;
    }else{
      this.data = this.data3;
    }
    this.echartsInstance.setOption({
      series: [{data: this.data[0]},{data: this.data[1]}],
    });
  }

  data1 = [
    [60.0, 62.3,61.2,73,65,82,96,101,110,112,123],
    [51.0, 55.3, 56.2,63,58,78,89,99,105,107,120]
  ];
  data2 = [
    [2.6, 5.9, 9.0, 10.1, 13.7, 20.7, 21.6, 22.2, 23.7, 25.8, 29.0],
    [4.6, 6.9, 8.7, 9.1, 11.7, 10.7, 11.6, 9.2, 13.7, 18.8, 28.0,]
  ];
  data3 = [
    [32.3,32.6, 35.9, 39.0, 38.4, 38.7, 39.1, 39.9, 42.2, 48.7, 58.8,],
    [29.3,28.6, 29.9, 31.0, 26.6, 27.7, 29.7, 30.6, 32.2, 38.7, 42.8,]
  ];
  data = this.data1;
}
