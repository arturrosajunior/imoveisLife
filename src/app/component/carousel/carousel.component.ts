import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() data: any;
  @Input() classItem: any;

  configSlide: any;
  slides: any;

  constructor() {
    this.configSlide = {
      centerMode: true,
      slidesToShow: 3,
      arrows: true,
      dots: false,
      swipeToSlide: true,

      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1,
            initialSlide: 1.5,
            centerMode: false,
          },
        },
      ],
    };
  }
  ngOnInit(): void {}
}
