import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'footer-bar',
    template: `
        <div class="bottom-menu">
            <div class="left-bottom">
                <h3>MEET THE TEAM</h3>
                <ul>
                    <li><a [routerLink]="['/about']">About Us</a></li>
                </ul>
                <h3>CAREERS</h3>
                <ul>
                    <li><a [routerLink]="['/service-careers']">Service/Controls</a></li>
                    <li><a [routerLink]="['/office-careers']">Office</a></li>
                </ul>
            </div>
            <div class="center-bottom">
                <h3>NEWS</h3>
                <ul>
                    <li><a [routerLink]="['/blog']">Blog</a></li>
                    <li><a [routerLink]="['/events']">Events</a></li>
                </ul>
                <h3>RECENT PROJECTS</h3>
                <ul>
                    <li>Project</li>
                </ul>
            </div>
            <div class="right-bottom">
                <h3><a [routerLink]="['/contact-us']">CONTACT US</a></h3>
                <p>
                704.443.7059
                <br/>
                info@facilitysystemsservices.com
                </p>
            </div>
        </div>
        <div class="footer">
            <div class="footer-left">
              Facility Systems Services, Inc.
              <br/>
              <span class="footer-slogan">
                Comprehensive Building Solutions
              </span>
              <br/>
              P.O. Box 1540 | Matthews, NC 28106
            </div>
            <div class="footer-right">
              <i class="fa fa-twitter-square"></i>
              <i class="fa fa-facebook-square"></i>
              <i class="fa fa-linkedin-square"></i>
              <br/>
                &copy; 2016
            </div>
      </div>
    `,
    styles: [`
        .bottom-menu {
            background-color: #ECEFF1;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        .bottom-menu h3 {
            color: #2D2D72;
        }

        .bottom-menu ul {
            list-style: none;
            padding: 0;
        }

        .bottom-menu li {
            color: #0b8d45;
            font-family: 'Roboto', sans-serif;
        }

        .bottom-menu p {
            color: #0b8d45;
            font-family: 'Roboto', sans-serif;
        }

        .left-bottom, .center-bottom, .right-bottom {
            flex-grow: 1;
            text-align: center;
        }

        .footer {
            background-color: #2d2d72;
            color: #ECEFF1;
            padding: 1vw;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
        }

        .footer-slogan {
            font-style: italic;
        }

        .footer-right {
            text-align: right;
            flex-grow: 1;
        }
        a {
            text-decoration: none;
            color: #0b8d45;
        }
        h3 a {
            color: #2d2d72;
        }
    `],
    directives: [ROUTER_DIRECTIVES]
})
export class FooterComponent {}