import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { TranslocoModule } from '@ngneat/transloco';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { FeaturesModule } from './modules/features.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),

    CoreModule,
    SharedModule,
    TranslocoModule,

    FeaturesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
