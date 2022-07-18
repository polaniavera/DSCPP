import { Component, OnInit, ViewChild } from '@angular/core';
import { GanttEditorComponent, GanttEditorOptions } from "ng-gantt";
import {JSGantt} from 'jsgantt-improved';

@Component({
  selector: 'jsgantt',
  styleUrls: ['./jsgantt.component.scss'],
  templateUrl: './jsgantt.component.html',
})

export class JsGanttComponent implements OnInit {

  @ViewChild("editor") editor: GanttEditorComponent;
  public editorOptions: GanttEditorOptions;
  public data: any;

  constructor() {}

  ngOnInit() {
    this.data = this.initialData();
    this.editorOptions = {
      vFormat: "day",
      vShowRes: false,
      vEditable: false,
      vEventsChange: {
        taskname: () => {console.log("taskname");},
      }
    };
  }

  changeData() {
    //this.data = [... this.data, { pID: Math.random() * 100, pName: "new item", }];

    /* this.editorOptions = {
      vEditable: false,
    }; */
  }

  initialData() {
    return [
      {
        pID: 1,
        pName: "Asset 1",
        pStart: "",
        pEnd: "",
        pClass: "ggroupblack",
        pLink: "",
        pMile: 0,
        pRes: "Brian",
        pComp: 20,
        pGroup: 1,
        pParent: 0,
        pOpen: 1,
        pDepend: "",
        pCaption: "",
        pNotes: "Some Notes text"
      },
      {
        pID: 11,
        pName: "Project 1",
        pStart: "2021-02-20",
        pEnd: "2021-03-26",
        pClass: "gtaskgreen",
        pLink: "",
        pMile: 0,
        pRes: "Shlomy",
        pComp: 20,
        pGroup: 0,
        pParent: 1,
        pOpen: 1,
        pDepend: "",
        pCaption: "",
        pNotes: ""
      },
      {
        pID: 12,
        pName: "Project 2",
        pStart: "2021-03-01",
        pEnd: "2021-03-29",
        pClass: "gtaskgreen",
        pLink: "",
        pMile: 0,
        pRes: "Shlomy",
        pComp: 20,
        pGroup: 0,
        pParent: 1,
        pOpen: 1,
        pDepend: "",
        pCaption: "",
        pNotes: ""
      },
      {
        pID: 13,
        pName: "Project 3",
        pStart: "2021-03-01",
        pEnd: "2021-03-29",
        pClass: "gtaskgreen",
        pLink: "",
        pMile: 0,
        pRes: "Shlomy",
        pComp: 20,
        pGroup: 0,
        pParent: 1,
        pOpen: 1,
        pDepend: "",
        pCaption: "",
        pNotes: ""
      },
      {
        pID: 2,
        pName: "Asset 3",
        pStart: "",
        pEnd: "",
        pClass: "ggroupblack",
        pLink: "",
        pMile: 0,
        pRes: "Brian",
        pComp: 0,
        pGroup: 1,
        pParent: 0,
        pOpen: 1,
        pDepend: "",
        pCaption: "",
        pNotes: ""
      },
      {
        pID: 21,
        pName: "Project 7",
        pStart: "2021-02-25",
        pEnd: "2021-03-17",
        pClass: "gtaskpurple",
        pLink: "",
        pMile: 0,
        pRes: "Brian",
        pComp: 30,
        pGroup: 0,
        pParent: 2,
        pOpen: 1,
        pDepend: "",
        pCaption: "",
        pNotes: ""
      },
      {
        pID: 22,
        pName: "Project 8",
        pStart: "2021-03-15",
        pEnd: "2021-03-24",
        pClass: "gtaskpurple",
        pLink: "",
        pMile: 0,
        pRes: "Shlomy",
        pComp: 40,
        pGroup: 0,
        pParent: 2,
        pOpen: 1,
        pDepend: 21,
        pCaption: "",
        pNotes: ""
      },
      {
        pID: 23,
        pName: "Project 9",
        pStart: "2021-03-15",
        pEnd: "2021-03-24",
        pClass: "gtaskpurple",
        pLink: "",
        pMile: 0,
        pRes: "Shlomy",
        pComp: 40,
        pGroup: 0,
        pParent: 2,
        pOpen: 1,
        pDepend: 21,
        pCaption: "",
        pNotes: ""
      },
      {
        pID: 3,
        pName: "Asset 2",
        pStart: "",
        pEnd: "",
        pClass: "ggroupblack",
        pLink: "",
        pMile: 0,
        pRes: "Someone",
        pComp: 50,
        pGroup: 1,
        pParent: 0,
        pOpen: 1,
        pDepend: "",
        pCaption: "",
        pNotes: ""
      },
      {
        pID: 31,
        pName: "Project 4",
        pStart: "2021-02-25",
        pEnd: "2021-03-17",
        pClass: "gtaskyellow",
        pLink: "",
        pMile: 0,
        pRes: "Brian",
        pComp: 30,
        pGroup: 0,
        pParent: 3,
        pOpen: 1,
        pDepend: "",
        pCaption: "",
        pNotes: ""
      },
      {
        pID: 32,
        pName: "Project 5",
        pStart: "2021-02-25",
        pEnd: "2021-03-17",
        pClass: "gtaskyellow",
        pLink: "",
        pMile: 0,
        pRes: "Brian",
        pComp: 50,
        pGroup: 0,
        pParent: 3,
        pOpen: 1,
        pDepend: "",
        pCaption: "",
        pNotes: ""
      },
      {
        pID: 33,
        pName: "Project 6",
        pStart: "2021-02-25",
        pEnd: "2021-03-17",
        pClass: "gtaskyellow",
        pLink: "",
        pMile: 0,
        pRes: "Brian",
        pComp: 50,
        pGroup: 0,
        pParent: 3,
        pOpen: 1,
        pDepend: "",
        pCaption: "",
        pNotes: ""
      },
      
    ];
  }

}
