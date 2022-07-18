import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-agm-example',
  template: `
    <agm-map
      [latitude]="lat"
      [longitude]="lng"
      [mapTypeId]="mapType"
    >
    </agm-map>
  `,
  styles: [
    'agm-map { height: 40rem; }'
  ]
})
export class DashMapComponent implements OnInit {
  lat = 21.3069;
  lng = -157.8583;
  mapType = 'satellite';

  constructor() { }

  ngOnInit(): void { }
}