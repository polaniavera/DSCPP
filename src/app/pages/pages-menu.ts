import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'bulb-outline',
    pathMatch: 'prefix',
    link: '/pages/dashboard/tabsdash',
    home: true,
    /* children: [
      {
        title: 'Business',
        pathMatch: 'prefix',
        link: '/pages/dashboard/tabsdash',
      },
    ] */
  },

  /* {
    title: 'Project',
    icon: 'trending-up-outline',
    link: '/pages/project',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Input Forms',
    icon: 'browser-outline',
    children: [
      {
        title: 'Input',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/pages/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
  },
/*   {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  }, */
  {
    title: 'Corporate',
    icon: 'globe-outline',
    children: [
      {
        title: 'Business',
        //icon: 'bulb-outline',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
      {
        title: 'Scenario',
        //icon: 'briefcase-outline',
        pathMatch: 'prefix',
        link: '/pages/layout/tabscorpsce',
      },
      {
        title: 'Portfolio',
        //icon: 'briefcase-outline',
        pathMatch: 'prefix',
        link: '/pages/layout/tabsport',
      },
      {
        title: 'Assets',
        icon: 'layers-outline',
        children: [
          {
            title: 'Business',
            //icon: 'bulb-outline',
            pathMatch: 'prefix',
            link: '/pages/layout/tabs',
          },
          {
            title: 'Scenario',
            //icon: 'briefcase-outline',
            pathMatch: 'prefix',
            link: '/pages/layout/tabscorpsce',
          },
          {
            title: 'Portfolio',
            //icon: 'briefcase-outline',
            pathMatch: 'prefix',
            link: '/pages/layout/tabsport',
          },
          {
            title: 'Fields',
            icon: 'map-outline',
            children: [
              {
                title: 'Business',
                //icon: 'bulb-outline',
                pathMatch: 'prefix',
                link: '/pages/layout/tabs',
              },
              {
                title: 'Scenario',
                //icon: 'briefcase-outline',
                pathMatch: 'prefix',
                link: '/pages/layout/tabscorpsce',
              },
              {
                title: 'Portfolio',
                //icon: 'briefcase-outline',
                pathMatch: 'prefix',
                link: '/pages/layout/tabsport',
              },
              {
                title: 'Projects',
                icon: 'stop-circle-outline',
                children: [
                  {
                    title: 'Business',
                    //icon: 'bulb-outline',
                    pathMatch: 'prefix',
                    link: '/pages/layout/tabs',
                  },
                  {
                    title: 'Scenario',
                    //icon: 'briefcase-outline',
                    pathMatch: 'prefix',
                    link: '/pages/layout/tabscorpsce',
                  },
                  {
                    title: 'Portfolio',
                    //icon: 'briefcase-outline',
                    pathMatch: 'prefix',
                    link: '/pages/layout/tabsport',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  /* {
    title: 'Input Forms',
    icon: 'browser-outline',
    children: [
      {
        title: 'Management',
        link: '/pages/forms/inputs',
      }
    ],
  } */
];
