import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-utility-item',
  templateUrl: './nav-utility-item.component.html',
  styleUrls: ['./nav-utility-item.component.scss'],
})
export class NavigationUtilityItemComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  setActiveLang(languageCode: string): void {
    // this._userService.language = languageCode;
  }

  logout(): void {
    // this._authService.signOut();
    this._router.navigate(['login']);
  }
}
