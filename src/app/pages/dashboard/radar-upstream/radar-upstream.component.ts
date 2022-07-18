import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'radar-upstream',
  styleUrls: ['./radar-upstream.component.scss'],
  templateUrl: './radar-upstream.component.html',
})
export class RadarUpstreamComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: ['red', colors.warning],
        tooltip: {},
        legend: {
          left: 5,
          data: ['CAPEX', 'OPEX'],
          textStyle: {
            color: echarts.textColor,
          },
        },

        radar: {
          name: {
            textStyle: {
              color: echarts.textColor,
            },
          },
          indicator: [
            { name: 'Operations', max: 6500 },
            { name: 'Administration', max: 16000 },
            { name: 'IT', max: 30000 },
            { name: 'Customer Support', max: 38000 },
            { name: 'Development', max: 52000 },
            { name: 'Marketing', max: 25000 },
          ],
          splitArea: {
            areaStyle: {
              color: 'transparent',
            },
          },
        },
        series: [
          {
            name: 'Budget vs Spending',
            type: 'radar',
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: 'CAPEX',
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: 'OPEX',
              },
            ],
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
