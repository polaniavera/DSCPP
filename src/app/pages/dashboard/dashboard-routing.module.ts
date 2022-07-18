import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { Tabdash1Component, Tabdash2Component, TabsdashComponent } from './tabsdash/tabsdash.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {
      path: 'tabsdash',
      component: TabsdashComponent,
      children: [
        {
          path: '',
          redirectTo: 'tabdash1',
          pathMatch: 'full',
        },
        {
          path: 'tabdash1',
          component: Tabdash1Component,
        },
        {
          path: 'tabdash2',
          component: Tabdash2Component,
        },
      ],
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
}
