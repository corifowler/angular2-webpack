import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'recent-projects',
    template: `
        <div class="projects-container">
            <div class="projects-content">
                <h2>Recent Projects</h2>
                <p class="summary">Summary about this section</p>
                    <div class="projects-grid">
                        <div class="project"
                             *ngFor="let project of projects">
                            <img [src]="project.projectImage">
                            <h4>
                                <a [routerLink]="['/project', project.id]">{{project.projectTitle}}</a>
                            </h4>
                        </div>
                    </div>
            </div>
        </div> 
    `,
    styles: [`
        .projects-container {
            background-color: #2d2d72;
            display: flex;
            justify-content: center;
        }
        .projects-content {
            background-color: #ECEFF1;
            display: flex;
            flex-direction: column;
            padding: 1.25em;
            margin: 1em;
        }
        .projects-content h2 {
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
        .projects-grid {
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-flow: row wrap;
        }
        .project {
            padding: 1em;
            margin: 2em;
        }

        .project h4 {
            margin: 0;
            text-align: center;
            color: #2d2d72;
        }
        a {
            text-decoration: none;
            color: inherit;
        }
    `],
    directives: [ROUTER_DIRECTIVES]
})
export class ProjectsComponent {
    private projects: Array<any> = [
        {
            id: 1,
            projectImage: 'http://placehold.it/250x250',
            projectTitle: 'Project'
        },
        {
            id: 2,
            projectImage: 'http://placehold.it/250x250',
            projectTitle: 'Project'
        },
        {
            id: 3,
            projectImage: 'http://placehold.it/250x250',
            projectTitle: 'Project'
        },
        {
            id: 4,
            projectImage: 'http://placehold.it/250x250',
            projectTitle: 'Project'
        },
        {
            id: 5,
            projectImage: 'http://placehold.it/250x250',
            projectTitle: 'Project'
        }
    ]
}