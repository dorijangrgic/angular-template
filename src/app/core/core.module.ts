import { NgModule, Optional, SkipSelf } from '@angular/core';
import { IconsModule } from './tools//icons/icons.module';
import { TranslocoCoreModule } from './tools/transloco/transloco.module';

@NgModule({
  imports: [IconsModule, TranslocoCoreModule],
})
export class CoreModule {
  /**
   * Constructor
   */
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    // Do not allow multiple injections
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. Import this module in the AppModule only.'
      );
    }
  }
}
