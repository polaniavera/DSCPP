import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'tree',
  styleUrls: ['./tree.component.scss'],
  templateUrl: './tree.component.html',
})
export class TreeComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      var data = {
        "name": "Corporate",
        "children": [
            {
                "name": "Asset 1",
                "children": [
                    {
                         "name": "Field 1",
                         "children": [
                            {"name": "Reservoir 1",
                              "children": [
                                {"name": "Project 1", "value": 721},
                                {"name": "Project 2", "value": 4294},
                                {"name": "Project 3", "value": 4294},
                                {"name": "Project 4", "value": 4294}
                              ]},
                          {"name": "Reservoir 2",
                            "children": [
                              {"name": "Project 5", "value": 721},
                              {"name": "Project 6", "value": 4294},
                            ]}
                         ]
                    },
                    {
                        "name": "Field 2",
                        "children": [
                          {"name": "Reservoir 3", 
                          "children": [
                            {"name": "Project 7", "value": 721},
                            {"name": "Project 8", "value": 4294},
                          ]},
                          {"name": "Reservoir 4", 
                          "children": [
                            {"name": "Project 9", "value": 721},
                            {"name": "Project 10", "value": 4294},
                          ]}
                         ]
                    }
                ]
            },
            {
                "name": "Asset 2",
                "children": [
                    {
                      "name": "Field 3",
                      "children": [
                        {"name": "Reservoir 5",
                        "children": [
                          {"name": "Project 11", "value": 721},
                          {"name": "Project 12", "value": 4294},
                        ]},
                        {"name": "Reservoir 6",
                        "children": [
                          {"name": "Project 13", "value": 721},
                          {"name": "Project 14", "value": 4294},
                        ]}
                      ]
                    },
                    {
                      "name": "Field 4", 
                      "children": [
                        {"name": "Reservoir 7",
                        "children": [
                          {"name": "Project 15", "value": 721},
                          {"name": "Project 16", "value": 4294},
                        ]},
                        {"name": "Reservoir 8",
                        "children": [
                          {"name": "Project 17", "value": 721},
                          {"name": "Project 18", "value": 4294},
                        ]}
                      ]
                  },
               ]
            },
            {
                "name": "Asset 3",
                "children": [
                    {"name": "Field 5", 
                    "children": [
                      {"name": "Reservoir 9",
                      "children": [
                        {"name": "Project 19", "value": 721},
                        {"name": "Project 20", "value": 4294},
                      ]},
                      {"name": "Reservoir 10",
                      "children": [
                        {"name": "Project 21", "value": 721},
                        {"name": "Project 22", "value": 4294},
                      ]},
                      {"name": "Reservoir 11",
                      "children": [
                        {"name": "Project 23", "value": 721},
                        {"name": "Project 24", "value": 4294},
                      ]}
                    ]
                  }
                ]
            },
            {
               "name": "Asset 4",
               "children": [
                {"name": "Field 6",
                  "children": [
                  {"name": "Reservoir 12",
                  "children": [
                    {"name": "Project 25", "value": 721},
                    {"name": "Project 26", "value": 4294},
                  ]}
                ]
              },
                {"name": "Field 7", 
                "children": [
                  {"name": "Reservoir 13",
                  "children": [
                    {"name": "Project 27", "value": 721},
                    {"name": "Project 28", "value": 4294},
                  ]},
                  {"name": "Reservoir 14",
                  "children": [
                    {"name": "Project 29", "value": 721},
                    {"name": "Project 30", "value": 4294},
                  ]}
                ]
              },
              ]
            }
        ]
    };
    
    this.options = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        legend: {
            top: '2%',
            left: '3%',
            orient: 'vertical',
            data: [{
                name: 'tree1',
                icon: 'rectangle'
            }],
            borderColor: '#c23531'
        },
        series:[
          {
            type: 'tree',
            data: [data],
            top: '5%',
            left: '7%',
            bottom: '2%',
            right: '60%',
            symbolSize: 7,

            label: {
                position: 'left',
                verticalAlign: 'middle',
                align: 'right'
            },

            leaves: {
                label: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left'
                }
            },

            emphasis: {
                focus: 'descendant'
            },

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
        }]
    };

    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
