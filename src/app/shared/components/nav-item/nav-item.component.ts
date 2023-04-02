import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationItem } from '../../models/navigation-item';

@Component({
  selector: 'nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavigationItemComponent implements OnInit {
  @Input() item: NavigationItem = {
    id: 'map',
    title: 'Map',
    icon: 'map',
    type: 'basic', // MatMenu
    link: 'registration',
  };

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  isItemCollapsable(): boolean {
    return this.item.type === 'collapsable';
  }

  navigateTo(link: string): void {
    this._router.navigate([link]);
  }

  getNavigationId(id: string): string {
    return id;
  }
}
