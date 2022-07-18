import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-project',
  styleUrls: ['./project.component.scss'],
  templateUrl: './project.component.html',
})
export class ProjectComponent implements OnDestroy {

  private alive = true;

  constructor(private themeService: NbThemeService) { }

  ngOnDestroy() {
    this.alive = false;
  }
}
