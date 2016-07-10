import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

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
          <a [routerLink]="['/']"><img src="/images/top-logo.png" class="top-logo"></a>
          <img src="/images/Charlotte-Night-Skyline.jpg" class="top-image">
      </div>
      <div class="top-menu">
        <ul class="top-nav">
          <li class="menu-item"><a [routerLink]="['/hvac-service']">HVAC Service</a></li>
          <li class="menu-item"><a [routerLink]="['/building-automation']">Building Automation</a></li>
          <li class="menu-item"><a [routerLink]="['/design-build']">Design Build</a></li>
          <li class="menu-item"><a [routerLink]="['/facilities-management']">Facilities Management</a></li>
          <li class="menu-item"><a [routerLink]="['energy-efficiency']">Energy Efficiency</a></li>
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
            justify-content: center;
        }

        .menu-item {
            display: inline-block;
            padding: 1vmin 2vmin;
            flex-grow: 1;
            text-align: center;
        }
        a {
            text-decoration: none;
            color: #2d2d72;
        }
    `],
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent {}