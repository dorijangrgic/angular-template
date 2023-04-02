import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import {
  Translation,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
  translocoConfig,
  TranslocoModule,
  TranslocoService,
} from '@ngneat/transloco';
import { firstValueFrom } from 'rxjs';
import { TranslocoHttpLoader } from './transloco.http-loader';

@NgModule({
  imports: [HttpClientModule],
  exports: [TranslocoModule],
  providers: [
    {
      // Provide the default Transloco configuration
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: [
          {
            id: 'en',
            label: 'English',
          },
          {
            id: 'hr',
            label: 'Hrvatski',
          },
        ],
        defaultLang: 'hr',
        fallbackLang: 'en',
        reRenderOnLangChange: true,
        // prodMode: environment.production,
      }),
    },
    {
      // Provide the default Transloco loader
      provide: TRANSLOCO_LOADER,
      useClass: TranslocoHttpLoader,
    },
    {
      // Preload the default language before the app starts to prevent empty/jumping content
      provide: APP_INITIALIZER,
      deps: [TranslocoService],
      useFactory:
        (translocoService: TranslocoService): any =>
        (): Promise<Translation> => {
          const defaultLang = translocoService.getDefaultLang();
          translocoService.setActiveLang(defaultLang);
          const translation$ = translocoService.load(defaultLang);
          return firstValueFrom(translation$);
        },
      multi: true,
    },
  ],
})
export class TranslocoCoreModule {}
