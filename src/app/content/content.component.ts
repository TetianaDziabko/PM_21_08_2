import { Component } from '@angular/core';
import { BlocksComponent } from '../blocks/blocks.component';
import { EarningGraphComponent } from '../earning-graph/earning-graph.component';
import { MapComponent } from '../map/map.component';
import { TraficSourcesComponent } from '../trafic-sources/trafic-sources.component';
import { RecentOrderComponent } from '../recent-order/recent-order.component';
import { SiteVisitsComponent } from '../site-visits/site-visits.component';
import { MarcetingCampingComponent } from '../marceting-camping/marceting-camping.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [BlocksComponent, EarningGraphComponent, MapComponent, TraficSourcesComponent, RecentOrderComponent, SiteVisitsComponent, MarcetingCampingComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
