import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { NavStateActions } from './actionCreators/navState.actions';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent],
  template: `
      <header-bar></header-bar>
      <router-outlet></router-outlet>
      <footer-bar></footer-bar>
  `,
  styles: [``],
  providers: [NavStateActions]
})
export class AppComponent {

  constructor(private _navActions: NavStateActions) {
  }
}
