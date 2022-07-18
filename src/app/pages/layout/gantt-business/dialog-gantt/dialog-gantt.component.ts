import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-dialog-gantt',
  templateUrl: 'dialog-gantt.component.html',
  styleUrls: ['dialog-gantt.component.scss'],
})
export class DialogGanttComponent {

  @Input() assetArr: string[];
  projectSelected = '';

  constructor(protected ref: NbDialogRef<DialogGanttComponent>) {}

  ngOnInit() {
    this.projectSelected = this.assetArr[0];
  }

  cancel() {
    this.ref.close();
  }

  submit(name, project) {
    var values: any[] = [];
    values.push(name);
    values.push(project);
    this.ref.close(values);
  }

  setValue(e){
    console.log(e);
  }
}
