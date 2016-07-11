import { Component } from '@angular/core';

@Component({
    selector: 'facilities-management',
    template: `
        <div class="facilities-container">
            <div class="facilities-content">
                <h2>Facilities Management</h2>
                <p class="summary">Summary about this section</p>
            </div>
        </div>
    `,
    styles: [`
        .facilities-container {
            background-color: #2d2d72;
            display: flex;
            justify-content: center;
        }
        .facilities-content {
            background-color: #fbfbfc;
            display: flex;
            flex-direction: column;
            padding: 1.25em;
            margin: 1em;
        }
        .facilities-content h2 {
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
export class FacilitiesManagementComponent {}