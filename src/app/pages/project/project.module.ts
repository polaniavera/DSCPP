import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbProgressBarModule
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartsModule } from '../charts/charts.module';

import { ThemeModule } from '../../@theme/theme.module';
import { ProjectComponent } from './project.component';
import { FormsModule } from '@angular/forms';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    ChartsModule,
    NbProgressBarModule
  ],
  declarations: [
    ProjectComponent,
    TreeComponent,
  ],
})
export class ProjectModule { }
