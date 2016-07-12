import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-carousel',
    template: `
        <div class="parent-container">
            <button class="left"><i class="fa fa-chevron-left"></i></button>
            <ul class="carousel-container">
                <li *ngFor="let image of images, let i=index"
                    [class.hidden]="selectedImage !== i">
                    <img [src]="image">
                </li>
            </ul>
            <button class="right"><i class="fa fa-chevron-right"></i></button>
        </div>
    `,
    styles: [`
        .parent-container {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .carousel-container {
            padding-left: 0;
            position: relative;
        }
        li {
            list-style: none;
            text-align: center;
        }
        img {
            max-width: 90%;
        }
        .hidden {
            display: none;
        }
        .fa {
            font-size: 3em;
            position: absolute;
            z-index: 5;
        }
        .fa-chevron-left {
            left: 4em;
        }
        .fa-chevron-right {
            right: 4em;
        }
        .left, .right {
            position: relative;
        }
        button {
            background: none;
            border: none;
        }
    `]
})
export class CarouselComponent implements OnInit {
    public images: Array<string> = [
        '/images/new_construction.jpg',
        '/images/Charlotte-Night-Skyline.jpg'
    ];
    public selectedImage: number = 0;

    public ngOnInit() {
        this.carouselTimer();
    }

    private carouselTimer() {
        // setInterval(this.changeImages, 5000);
    }

    private changeImages() {

    }

}