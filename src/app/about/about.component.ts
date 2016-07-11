import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { NavStateActions } from '../actionCreators/navState.actions';

@Component({
    selector: 'about-page',
    template: `
        <div class="about-container">
            <div class="about-content">
                <h2>Meet the Team</h2>
                <div class="bio-content" *ngFor="let bio of bios">
                    <div class="bio-name">
                        <p class="name">{{bio.name}},</p>
                        <p class="title">{{bio.title}}</p>
                    </div>
                    <div class="bio-about">
                        <p>{{bio.about}}</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .about-container {
            background-color: #2d2d72;
            display: flex;
            justify-content: center;
        }
        .about-content {
            background-color: #ECEFF1;
            padding: 1.25em;
            margin: 1em;
            display: flex;
            flex-direction: column;
        }
        .about-content h2 {
            color: #0b8d45;
            align-self: center;
        }
        .bio-content {
            display: flex;
            flex-direction: row;
            font-family: 'Roboto', sans-serif;
            justify-content: center;
            align-items: center;
            align-content: stretch;
            padding: 1em;
        }
        .bio-name {
            color: #0b8d45;
            display: flex;
            flex-direction: column;
            min-width: 7em;
        }
        .bio-about {
            color: #2d2d72;
            max-width: 48em;
        }
        p {
            margin: 0;
        }
        .title {
            font-style: italic;
        }
        .name {
            text-transform: uppercase;
            font-weight: bold;
            font-family: 'Albertus Medium', sans-serif;
        }
    `]
})
export class AboutComponent {
    private bios = [
        {
            name: 'John Smith',
            title: 'Specialist',
            about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quisquam, itaque at minima possimus quis perspiciatis debitis temporibus vero autem accusantium atque distinctio earum explicabo? Alias expedita temporibus pariatur similique!'
        },
        {
            name: 'Jane Doe',
            title: 'Specialist',
            about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa praesentium molestias, ut quod neque optio. Corporis nam impedit nesciunt distinctio quos, culpa nisi minima, laborum. Rem consequatur quam, rerum quibusdam.'
        }
    ];

    constructor(private _store: Store<any>) {

    }
}