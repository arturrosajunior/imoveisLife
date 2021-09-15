import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() data: any;
  @Input() classItem: any;
  @Input() title: any;
  @Input() fancybox: any;

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
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            dots: true,
          },
        },
      ],
    };
  }
  ngOnInit(): void {}
}
