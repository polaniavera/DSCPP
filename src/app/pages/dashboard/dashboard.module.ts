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
  NbProgressBarModule,
  NbRouteTabsetModule,
  NbStepperModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartsModule } from '../charts/charts.module';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { StatusCardComponent } from './status-card/status-card.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomSelectorComponent } from './rooms/room-selector/room-selector.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';
import { KittenComponent } from './kitten/kitten.component';
import { SecurityCamerasComponent } from './security-cameras/security-cameras.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { ElectricityChartComponent } from './electricity/electricity-chart/electricity-chart.component';
import { WeatherComponent } from './weather/weather.component';
import { SolarComponent } from './solar/solar.component';
import { PlayerComponent } from './rooms/player/player.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TrafficChartComponent } from './traffic/traffic-chart.component';
import { FormsModule } from '@angular/forms';
import { ProductionUpstreamComponent } from './production-upstream/production-upstream.component';
import { InjectionUpstreamComponent } from './injection-upstream/injection-upstream.component';
import { PieUpstreamComponent } from './pie-upstream/pie-upstream.component';
import { ProgressUpstreamComponent } from './progress-upstream/progress-upstream.component';
import { RadarUpstreamComponent } from './radar-upstream/radar-upstream.component';
import { Tabdash1Component, Tabdash2Component, TabsdashComponent } from './tabsdash/tabsdash.component';
import { TrafficRevealCardComponent } from './traffic-reveal-card/traffic-reveal-card.component';
import { TrafficBarComponent } from './traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
import { TrafficFrontCardComponent } from './traffic-reveal-card/front-side/traffic-front-card.component';
import { TrafficCardsHeaderComponent } from './traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';
import { TrafficBackCardComponent } from './traffic-reveal-card/back-side/traffic-back-card.component';
import { TrafficBarChartComponent } from './traffic-reveal-card/back-side/traffic-bar-chart.component';
import { ECommerceChartsPanelComponent } from './charts-panel/charts-panel.component';
import { OrdersChartComponent } from './charts-panel/charts/orders-chart.component';
import { ProfitChartComponent } from './charts-panel/charts/profit-chart.component';
import { ChartPanelHeaderComponent } from './charts-panel/chart-panel-header/chart-panel-header.component';
import { ChartPanelSummaryComponent } from './charts-panel/chart-panel-summary/chart-panel-summary.component';
import { ECommerceLegendChartComponent } from './legend-chart/legend-chart.component';
import { DashMapComponent } from './dash-map/dash-map.component';
import { AgmCoreModule } from '@agm/core';

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
    NbProgressBarModule,
    NbRouteTabsetModule,
    NbStepperModule,
    DashboardRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAPm2oiBMx6LhmUHIKgh4z06DpAc1Ipwfo'
    })
  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    TemperatureDraggerComponent,
    ContactsComponent,
    RoomSelectorComponent,
    TemperatureComponent,
    RoomsComponent,
    KittenComponent,
    SecurityCamerasComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    WeatherComponent,
    PlayerComponent,
    SolarComponent,
    TrafficComponent,
    TrafficChartComponent,
    ProductionUpstreamComponent,
    InjectionUpstreamComponent,
    PieUpstreamComponent,
    ProgressUpstreamComponent,
    RadarUpstreamComponent,
    ECommerceLegendChartComponent,
    DashMapComponent,
    Tabdash1Component, Tabdash2Component, TabsdashComponent,
    TrafficRevealCardComponent, TrafficBarComponent, TrafficFrontCardComponent, TrafficCardsHeaderComponent, TrafficBackCardComponent, TrafficBarChartComponent,
    ECommerceChartsPanelComponent, OrdersChartComponent, ProfitChartComponent, ChartPanelHeaderComponent, ChartPanelSummaryComponent
  ],
})
export class DashboardModule { }
