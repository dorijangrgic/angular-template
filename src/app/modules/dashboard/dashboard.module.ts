import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    DashboardComponent
  ],
  providers: [],
})
export class DashboardModule {}
