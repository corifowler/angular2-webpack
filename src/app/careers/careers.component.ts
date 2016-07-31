import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'careers-page',
    template: `
        <div class="careers-container">
            <div class="careers-content">
                <h2>Careers</h2>
                <p class="summary"><a [routerLink]="['/service-careers']">Service/Controls</a></p>
                <p class="summary"><a [routerLink]="['/office-careers']">Office</a></p>
            </div>
        </div>
    `,
    styles: [`
        .careers-container {
            background-color: #2d2d72;
            display: flex;
            justify-content: center;
        }
        .careers-content {
            background-color: #ECEFF1;
            display: flex;
            flex-direction: column;
            padding: 1.25em;
            margin: 1em;
        }
        .careers-content h2 {
            color: #0b8d45;
            align-self: center;
            margin-bottom: 0.25em;
        }
        .summary {
            font-family: 'Roboto', sans-serif;
            color: #2d2d72;
            margin-top: 0.25em;
            align-self: center;
        }
        a {
            text-decoration: none;
            color: inherit;
        }
    `],
    directives: [ROUTER_DIRECTIVES]
})
export class CareersComponent {}