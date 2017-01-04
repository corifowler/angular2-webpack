import { Component } from '@angular/core';

@Component({
    selector: 'events-page',
    template: `
        <div class="events-container">
            <div class="events-content">
                <h2>Events</h2>
                <div *ngFor="let event of events"
                     class="event">
                    <h4>{{event.name}}</h4>
                    <span>{{event.date}} | {{event.location}}</span>
                    <p>{{event.description}}</p>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .events-container {
            background-color: #2d2d72;
            display: flex;
            justify-content: center;
        }
        .events-content {
            background-color: #ECEFF1;
            display: flex;
            flex-direction: column;
            padding: 1.25em;
            margin: 1em;
        }
        .events-content h2 {
            color: #0b8d45;
            align-self: center;
            margin-bottom: 0;
        }
        p {
            font-family: 'Roboto', sans-serif;
            color: #2d2d72;
            margin-top: 0.25em;
            align-self: center;
            font-style: italic;
        }
        span {
            font-family: 'Roboto', sans-serif;
            color: #0b8d45;
            margin-top: 0;
            align-self: center;
            font-weight: bold;
        }
        h4 {
            color: #0b8d45;
            margin: 0;
        }
        .event {
            padding: 1em;
            border: 1px solid #2d2d72;
            margin: 1em;
            background-color: white;
        }
    `]
})
export class EventsComponent {
    private events: Array<any> = [
        {
            name: 'HVAC Event',
            date: 'December 31, 2016',
            location: 'Charlotte, NC',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptates facilis delectus repellendus provident, commodi magni debitis alias id odit cum iusto veritatis omnis, ipsa cupiditate sapiente natus inventore vel.'
        }, 
        {
            name: 'HVAC Event',
            date: 'December 31, 2016',
            location: 'Charlotte, NC',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptates facilis delectus repellendus provident, commodi magni debitis alias id odit cum iusto veritatis omnis, ipsa cupiditate sapiente natus inventore vel.'
        }
    ];
}