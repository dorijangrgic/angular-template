import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HorizontalNavbarComponent } from './components/horizontal-navbar/horizontal-navbar.component';
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { NavigationItemComponent } from './components/nav-item/nav-item.component';
import { NavigationUtilityItemComponent } from './components/nav-utility-item/nav-utility-item.component';
import { TranslocoCoreModule } from '../core/tools/transloco/transloco.module';

@NgModule({
  declarations: [
    HorizontalNavbarComponent,
    NavigationItemComponent,
    NavigationUtilityItemComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatMenuModule,
    TranslocoCoreModule
  ],
  exports: [
    HorizontalNavbarComponent,
    NavigationItemComponent,
    NavigationUtilityItemComponent
  ],
  providers: [],
})
export class SharedModule {}
