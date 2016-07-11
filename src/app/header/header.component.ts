import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { NavStateActions } from '../actionCreators/navState.actions';

@Component({
    selector: 'header-bar',
    template: `
        <div class="top-section">
          <div class="green-contact">
            <span>704.443.7059</span>
            <span> | </span>
            <span>P.O. Box 1540</span>
            <span> | </span>
            <span>Matthews, NC 28106</span>
          </div>
          <a [routerLink]="['/']"><img src="/images/top-logo.png" 
             (click)="selectPage('')"
             class="top-logo"></a>
          <img src="/images/Charlotte-Night-Skyline.jpg" class="top-image">
      </div>
      <div class="top-menu">
        <ul class="top-nav">
          <a [routerLink]="['/hvac-service']"
             (click)="selectPage('HVAC Service')"
             [class.selected]="selectedPage === 'HVAC Service'"
             class="menu-item"><li>HVAC Service</li></a>
          <a [routerLink]="['/building-automation']" 
             (click)="selectPage('Building Automation')"
             [class.selected]="selectedPage === 'Building Automation'"
             class="menu-item"><li>Building Automation</li></a>
          <a [routerLink]="['/design-build']"
             (click)="selectPage('Design Build')"
             [class.selected]="selectedPage === 'Design Build'"
             class="menu-item"><li>Design Build</li></a>
          <a [routerLink]="['/facilities-management']"
             (click)="selectPage('Facilities Management')"
             [class.selected]="selectedPage === 'Facilities Management'"
             class="menu-item"><li>Facilities Management</li></a>
          <a [routerLink]="['energy-efficiency']"
             (click)="selectPage('Energy Efficiency')"
             [class.selected]="selectedPage === 'Energy Efficiency'"
             class="menu-item"><li>Energy Efficiency</li></a>
        </ul>
      </div>
    `,
    styles: [`
        .top-section {
            position: relative;
        }

        .green-contact {
            position: relative;
            color: #ECEFF1;
            background-color: #0b8d45;
            text-align: center;
            width: 38vw;
            float: right;
            padding: 0.5vw;
            opacity: 0.8;
            font-size: 2vmin;
        }

        .green-contact span {
            font-family: 'Roboto', sans-serif;
            margin-right: 1vw;
        }

        .top-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            opacity: 0.65;
            z-index: -1;
        }

        .top-logo {
            width: 30vmin;
            margin-left: 3vmin;
        }

        .top-menu {
            background-color: #ECEFF1;
            color: #2D2D72;
            margin-top: 14.5vw;
            padding: 0.1vw 0;
        }

        .top-nav {
            list-style: none;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            padding: 0;
            align-items: stretch;
            margin: 0;
        }

        .menu-item {
            display: inline-block;
            padding: 1.5em;
            flex-grow: 1;
            text-align: center;
            color: #2d2d72;
        }
        a {
            text-decoration: none;
            color: inherit;
        }
        .menu-item:hover{
            background-color: #2d2d72;
            color: #eceff1;
        }
        .selected {
            background-color: #2d2d72;
            color: #eceff1;
        }
    `],
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent {
    private navState;
    private selectedPage;

    constructor(private _store: Store<any>, private _navActions: NavStateActions) {
        this._store.select('navState')
            .subscribe((navState) => {
                this.navState = navState;
                this.selectedPage = this.navState['topNav.activeSection'];
            });
    }

    private selectPage(page: string) {
        this._navActions.updateState({ 'topNav.activeSection': page });
    }
}