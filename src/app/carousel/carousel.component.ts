import { Component, OnInit, OnChanges } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SlideComponent, CarouselComponent } from 'ng2-bootstrap/ng2-bootstrap';
import { CORE_DIRECTIVES } from '@angular/common';

@Component({
    selector: 'home-carousel',
    template: `
        <div class="row">
            <div class="col-md-6">
                <carousel
                    class="text-lg-center" 
                    [interval]="myInterval" 
                    [noWrap]="noWrapSlides">
                    <slide *ngFor="let slidez of slides; let index=index"
                     [active]="slidez.active">
                        <img  class="center-block" [src]="slidez.image" style="margin:auto;">

                        <div class="text-box">
                            <span>{{slidez.text}}</span>
                            <p>{{slidez.summary}}</p>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
    `,
    styles: [`
        .parent-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
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
            max-height: 85%;
        }
        .hidden {
            display: none;
        }
        .text-box {
            position: absolute;
            background-color: #434343;
            color: #eceff1;
            padding: 1em;
            top: 2.5em;
            left: 8em;
            width: 35%;
            opacity: 0.85;
            text-align: left;
        }
        .text-box span {
            font-size: 1.5em;
            color: #ECEFF1;
            font-weight: bold;
            padding: 0.5em;
        }
        .text-box p {
            font-family: 'Roboto', sans-serif;
            padding: 0.5em;
        }
        a {
            text-decoration: none;
            color: inherit;
        }
        .carousel .slide {
            width: 100vw !important;
        }
        .col-md-6 {
            width: 100vw;
            margin: 1em;
        }
    `],
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, SlideComponent, CarouselComponent]
})
export class CarComponent implements OnInit {
    private myInterval:number = 5000;
    private noWrapSlides:boolean = false;
    private slides:Array<any> = [];

    constructor() {}
    
    public ngOnInit() {
        for (let i = 0; i < 4; i++) {
            this.addSlide();
        }
    }

    private addSlide() {
        let newWidth = 600 + this.slides.length + 1;
        this.slides.push({
            text: 'Design Build',
            image: '/images/new_construction.jpg',
            route: '/design-build',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti rem dolorem modi molestias optio a aliquid voluptates provident minus unde porro esse, iure, tempore iste. Iste commodi nobis ab ducimus?'
        },
            {
            text: 'Our Business',
            image: '/images/Charlotte-Night-Skyline.jpg',
            route: '',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt eius quidem animi aperiam similique alias aliquid tempora, consectetur dolorum quia maiores id cumque tempore nulla quisquam est necessitatibus numquam. Quasi.'
        });
    }

    private removeSlide(index:number) {
        this.slides.splice(index, 1);
    }


}