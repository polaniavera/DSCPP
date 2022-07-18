import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'pie-upstream',
  styleUrls: ['./pie-upstream.component.scss'],
  templateUrl: './pie-upstream.component.html',
})
export class PieUpstreamComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: ['#01850c', '#fc7703','#014c85','#fc1803'],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Oil', 'Condensate','Water','Gas'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Production',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: 'Oil' },
              { value: 310, name: 'Condensate' },
              { value: 234, name: 'Water' },
              { value: 135, name: 'Gas' },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
