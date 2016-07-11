import { Component } from '@angular/core';

@Component({
    selector: 'design-build',
    template: `
        <div class="design-container">
            <div class="design-content">
                <h2>Design Build</h2>
                <p class="summary">Summary about this section</p>
            </div>
        </div>
    `,
    styles: [`
        .design-container {
            background-color: #2d2d72;
            display: flex;
            justify-content: center;
        }
        .design-content {
            background-color: #fbfbfc;
            display: flex;
            flex-direction: column;
            padding: 1.25em;
            margin: 1em;
        }
        .design-content h2 {
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
export class DesignBuildComponent {}