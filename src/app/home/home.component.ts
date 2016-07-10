import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-home',
    template: `
        <div class="home-container">
            SLIDER GOES HERE
        </div>
    `,
    styles: [`
        .home-container {
            background-color: #2D2D72;
        }
    `]
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
