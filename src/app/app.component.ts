import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-template';

  constructor(
    private _router: Router,
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
    ) {
      this._matIconRegistry.addSvgIcon('en_flag', this._domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/EN.svg'));
      this._matIconRegistry.addSvgIcon('hr_flag', this._domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/HR.svg'));
    }

  ngOnInit() {}
}
