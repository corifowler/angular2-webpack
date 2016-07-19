import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
    selector: 'home-carousel',
    template: `
        <div class="parent-container">
            <button class="left"
                    (click)="previousPicture()">
                <i class="fa fa-chevron-left"></i>
            </button>
            <ul class="carousel-container">
                <li *ngFor="let image of images, let i=index"
                    [class.hidden]="selectedImage !== i">
                    <img [src]="image.image">
                    <div class="text-box">
                        <h2>{{image.title}}</h2>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere possimus doloremque reprehenderit asperiores excepturi repellat sapiente. Dolores deleniti, explicabo alias ullam at, quae expedita nulla placeat dolore in quo. Nam.
                        </span>
                    </div>
                </li>
            </ul>
            <button class="right"
                    (click)="nextPicture()">
                <i class="fa fa-chevron-right"></i>
            </button>
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
        ul {
            overflow: hidden;
            width: 100%;
            height: 30em;
        }
        li {
            list-style: none;
            text-align: center;
        }
        img {
            max-width: 98%;
            opacity: 0.9;
            max-height: 90%;
        }
        .hidden {
            display: none;
        }
        .fa {
            font-size: 2.5em;
            position: absolute;
            z-index: 5;
        }
        .fa-chevron-left {
            left: 1em;
        }
        .fa-chevron-right {
            right: 1em;
        }
        .left, .right {
            position: relative;
        }
        button {
            background: none;
            border: none;
            outline: none;
        }
        .text-box {
            position: absolute;
            background-color: #434343;
            color: #eceff1;
            padding: 1em;
            top: 2em;
            left: 5em;
            width: 35%;
            opacity: 0.85;
            text-align: left;
        }
        .text-box span {
            font-family: 'Roboto', sans-serif;
        }
    `]
})
export class CarouselComponent implements OnInit {
    public images: Array<any>;

    public selectedImage: number = 0;

    constructor() {
        this.images = [
            {
                title: 'Design Build',
                image: '/images/new_construction.jpg'
            },
            {
                title: '',
                image: '/images/Charlotte-Night-Skyline.jpg'
            }
        ];

        this.selectedImage = 0;

        setInterval(() => {this.nextPicture();}, 5000);
    }

    public ngOnInit() {
        this.selectedImage = 0;
    }


    private carouselTimer() {
        setInterval(this.nextPicture, 3000);
    }

    private changeImages() {

    }

    private previousPicture() {
        let total = this.images.length - 1;
        if (this.selectedImage !== 0) {
            this.selectedImage = this.selectedImage -1;
        } 
    }

    private nextPicture() {
        let images = [
            {
                title: 'Design Build',
                image: '/images/new_construction.jpg'
            },
            {
                title: '',
                image: '/images/Charlotte-Night-Skyline.jpg'
            }
        ];
        let total = images.length - 1;
        if (this.selectedImage <= total && this.selectedImage !== total) {
            this.selectedImage = this.selectedImage + 1;
        } else {
            this.selectedImage = 0;
        }
    }

}