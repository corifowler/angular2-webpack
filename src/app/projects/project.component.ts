import { Component } from '@angular/core';

@Component({
    selector: 'single-project',
    template: `
        <div class="project-container">
            <div class="project-content">
                <h2>Project</h2>
                <p class="summary">Summary about this section</p>
            </div>
        </div>
    `,
    styles: [`
        .project-container {
            background-color: #2d2d72;
            display: flex;
            justify-content: center;
        }
        .project-content {
            background-color: #ECEFF1;
            display: flex;
            flex-direction: column;
            padding: 1.25em;
            margin: 1em;
        }
        .project-content h2 {
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
export class ProjectComponent {}