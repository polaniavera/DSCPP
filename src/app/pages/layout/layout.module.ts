import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, 
  NbUserModule,
  NbProgressBarModule,
  NbIconModule,
  NbCheckboxModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
} from '@nebular/theme';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxEchartsModule } from 'ngx-echarts';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgGanttEditorModule } from 'ng-gantt'

import { ThemeModule } from '../../@theme/theme.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { Tab1Component, Tab2Component, Tab3Component, Tab4Component, TabsComponent } from './tabs/tabs.component';
import { Tabport1Component, Tabport2Component, TabsportComponent } from './tabsport/tabsport.component';
import { Tabasset1Component, Tabasset2Component, TabsassetComponent } from './tabsasset/tabsasset.component';
import { Tabfield1Component, Tabfield2Component, TabsfieldComponent } from './tabsfield/tabsfield.component';
import { Tabcorpsce1Component, Tabcorpsce2Component, TabscorpsceComponent } from './tabscorpsce/tabscorpsce.component';
import { StepperComponent } from './stepper/stepper.component';
import { ListComponent } from './list/list.component';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
import { NewsPostComponent } from './infinite-list/news-post/news-post.component';
import { NewsPostPlaceholderComponent } from './infinite-list/news-post-placeholder/news-post-placeholder.component';
import { NewsService } from './news.service';
import { ProductionUpstreamComponent } from './production-upstream/production-upstream.component';
import { InjectionUpstreamComponent } from './injection-upstream/injection-upstream.component';
import { PieUpstreamComponent } from './pie-upstream/pie-upstream.component';
import { ProgressUpstreamComponent } from './progress-upstream/progress-upstream.component';
import { ProgressScenarioComponent } from './progress-scenario/progress-scenario.component';
import { RadarUpstreamComponent } from './radar-upstream/radar-upstream.component';
import { AreaUpstreamComponent } from './area-upstream/area-upstream.component';
import { BarUpstreamComponent } from './bar-upstream/bar-upstream.component';
import { ClusterUpstreamComponent } from './cluster-upstream/cluster-upstream.component';
import { BarStackedComponent } from './bar-stacked/bar-stacked.component';
import { BarHorizontalComponent } from './bar-horizontal/bar-horizontal.component';
import { BarLineComponent } from './bar-line/bar-line.component';
import { ScatSingleComponent } from './scat-single/scat-single.component';
import { ScatGroupComponent } from './scat-group/scat-group.component';
import { WaterfallUpstreamComponent } from './waterfall-upstream/waterfall-upstream.component';
import { TopProjectsComponent } from './top-projects/top-projects.component';
import { TopBarComponent } from './top-projects/front-side/top-bar/top-bar.component';
import { TopProjectsFrontComponent } from './top-projects/front-side/top-projects-front.component';
import { TopProjectsHeaderComponent } from './top-projects/top-projects-header/top-projects-header.component';
import { TopProjectsBackComponent } from './top-projects/back-side/top-projects-back.component';
import { TopProjectsChartComponent } from './top-projects/back-side/top-projects-chart.component';
import { TopScenarioComponent } from './top-scenario/top-scenario.component';
import { LineScenarioComponent } from './line-scenario/line-scenario.component';
import { DetailedPortfolio1Component } from './detailed-portfolio1/detailed-portfolio1.component';
import { DetailedPortfolio2Component } from './detailed-portfolio2/detailed-portfolio2.component';
import { DetailedTableComponent } from './detailed-table/detailed-table.component';
import { DetailedPanelComponent } from './detailed-panel/detailed-panel.component';
import { DetailedPanelSummaryComponent } from './detailed-panel/detailed-panel-summary/detailed-panel-summary.component';
import { ScenarioInfoComponent } from './detailed-panel/info/scenario-info.component';
import { EconomicInfoComponent } from './detailed-panel/info/economic-info.component';
import { GanttBusinessComponent } from './gantt-business/gantt-business.component';
import { JsGanttComponent } from './jsgantt/jsgantt.component';
import { DialogGanttComponent } from './gantt-business/dialog-gantt/dialog-gantt.component';
import { ActivityGanttComponent } from './activity-gantt/activity-gantt.component';
import { GanttKpiComponent } from './gantt-kpi/gantt-kpi.component';
import { InfoSchemaComponent } from './info-schema/info-schema.component';
import { InfoDataComponent } from './info-data/info-data.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbUserModule,
    LayoutRoutingModule,
    NgxEchartsModule,
    NbProgressBarModule,
    NbSelectModule,
    NbIconModule,
    Ng2SmartTableModule,
    HighchartsChartModule,
    NgGanttEditorModule,
    NbCheckboxModule,
    NbInputModule,
    NbRadioModule,
  ],
  declarations: [
    LayoutComponent,
    TabsComponent, Tab1Component, Tab2Component, Tab3Component, Tab4Component,
    Tabport1Component, Tabport2Component, TabsportComponent,
    Tabasset1Component, Tabasset2Component, TabsassetComponent,
    Tabfield1Component, Tabfield2Component, TabsfieldComponent,
    Tabcorpsce1Component, Tabcorpsce2Component, TabscorpsceComponent,
    StepperComponent,
    ListComponent,
    NewsPostPlaceholderComponent,
    InfiniteListComponent,
    NewsPostComponent,
    ProductionUpstreamComponent,
    InjectionUpstreamComponent,
    PieUpstreamComponent,
    ProgressUpstreamComponent,
    ProgressScenarioComponent,
    RadarUpstreamComponent,
    AreaUpstreamComponent,
    BarUpstreamComponent,
    WaterfallUpstreamComponent,
    TopProjectsComponent,
    TopBarComponent,
    TopProjectsFrontComponent,
    TopProjectsHeaderComponent,
    TopProjectsBackComponent,
    TopProjectsChartComponent,
    BarStackedComponent,
    ClusterUpstreamComponent,
    ScatSingleComponent,
    ScatGroupComponent,
    BarHorizontalComponent,
    BarLineComponent,
    TopScenarioComponent,
    LineScenarioComponent,
    DetailedPortfolio1Component, DetailedPortfolio2Component,
    DetailedTableComponent,
    DetailedPanelComponent,DetailedPanelSummaryComponent,ScenarioInfoComponent,EconomicInfoComponent,
    GanttBusinessComponent,
    DialogGanttComponent,
    JsGanttComponent,
    ActivityGanttComponent,
    GanttKpiComponent,
    InfoSchemaComponent, InfoDataComponent
  ],
  providers: [
    NewsService,
  ],
  entryComponents: [
    DialogGanttComponent
  ],
})
export class LayoutModule { }
