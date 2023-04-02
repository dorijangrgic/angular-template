import { Component } from '@angular/core';
import { NavigationItem } from '../../models/navigation-item';
import { navigationConfig } from 'src/app/navigation.config';

@Component({
  selector: 'horizontal-navbar',
  templateUrl: './horizontal-navbar.component.html',
  styleUrls: ['./horizontal-navbar.component.scss'],
})
export class HorizontalNavbarComponent {
  navigationConfig: NavigationItem[] = navigationConfig;
}
