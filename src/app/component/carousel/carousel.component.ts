import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() id: any;
  @Input() data: any;
  @Input() title: any;
  @Input() fancybox: any;
  @Input() viewphoto: any;
  @Input() centermode: any;

  configSlide: any;
  slides: any;

  constructor() {}
  ngOnInit(): void {
    this.configSlide = {
      centerMode: this.centermode,
      slidesToShow: this.viewphoto,
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
}
