import { Component, OnInit } from '@angular/core';

import { CarComponent } from '../carousel/carousel.component';

@Component({
    selector: 'my-home',
    template: `
        <div class="home-container">
            <home-carousel></home-carousel>
        </div>
    `,
    styles: [`
        .home-container {
            background-color: #2D2D72;
            display: flex;
            position: relative;
            align-items: center;
        }
    `],
    directives: [CarComponent]
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
