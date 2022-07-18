import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { Tab1Component, Tab2Component, Tab3Component, Tab4Component, TabsComponent } from './tabs/tabs.component';
import { Tabport1Component, Tabport2Component, TabsportComponent } from './tabsport/tabsport.component';
import { Tabasset1Component, Tabasset2Component, TabsassetComponent } from './tabsasset/tabsasset.component';
import { Tabfield1Component, Tabfield2Component, TabsfieldComponent } from './tabsfield/tabsfield.component';
import { Tabcorpsce1Component, Tabcorpsce2Component, TabscorpsceComponent } from './tabscorpsce/tabscorpsce.component';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
import { ListComponent } from './list/list.component';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'stepper',
      component: StepperComponent,
    },
    {
      path: 'list',
      component: ListComponent,
    },
    {
      path: 'infinite-list',
      component: InfiniteListComponent,
    },
    {
      path: 'tabs',
      component: TabsComponent,
      children: [
        {
          path: '',
          redirectTo: 'tab4',
          pathMatch: 'full',
        },
        {
          path: 'tab1',
          component: Tab1Component,
        },
        {
          path: 'tab2',
          component: Tab2Component,
        },
        {
          path: 'tab3',
          component: Tab3Component,
        },
        {
          path: 'tab4',
          component: Tab4Component,
        },
      ],
    },
    {
      path: 'tabsport',
      component: TabsportComponent,
      children: [
        {
          path: '',
          redirectTo: 'tabport1',
          pathMatch: 'full',
        },
        {
          path: 'tabport1',
          component: Tabport1Component,
        },
        {
          path: 'tabport2',
          component: Tabport2Component,
        }
      ],
    },
    {
      path: 'tabsasset',
      component: TabsassetComponent,
      children: [
        {
          path: '',
          redirectTo: 'tabasset1',
          pathMatch: 'full',
        },
        {
          path: 'tabasset1',
          component: Tabasset1Component,
        },
        {
          path: 'tabasset2',
          component: Tabasset2Component,
        }
      ],
    },
    {
      path: 'tabsfield',
      component: TabsfieldComponent,
      children: [
        {
          path: '',
          redirectTo: 'tabfield1',
          pathMatch: 'full',
        },
        {
          path: 'tabfield1',
          component: Tabfield1Component,
        },
        {
          path: 'tabfield2',
          component: Tabfield2Component,
        }
      ],
    },
    {
      path: 'tabscorpsce',
      component: TabscorpsceComponent,
      children: [
        {
          path: '',
          redirectTo: 'tabcorpsce1',
          pathMatch: 'full',
        },
        {
          path: 'tabcorpsce1',
          component: Tabcorpsce1Component,
        },
        {
          path: 'tabcorpsce2',
          component: Tabcorpsce2Component,
        }
      ],
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {
}
