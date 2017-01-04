import { Component } from '@angular/core';

@Component({
    selector: 'service-careers',
    template: `
        <div class="careers-container">
            <div class="careers-content">
                <h2>Service Careers</h2>
                <p class="summary">Summary about this section</p>
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
            margin-bottom: 0;
        }
        .summary {
            font-family: 'Roboto', sans-serif;
            color: #2d2d72;
            margin-top: 0;
            align-self: center;
        }
    `]
})
export class ServiceCareersComponent {}