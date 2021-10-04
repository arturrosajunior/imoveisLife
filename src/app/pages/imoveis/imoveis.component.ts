import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ImoveisService } from 'src/app/services/imoveis.service';

@Component({
  selector: 'app-imoveis',
  templateUrl: './imoveis.component.html',
  styleUrls: ['./imoveis.component.css'],
})
export class ImoveisComponent implements OnInit {
  changeViewList = 3;

  constructor(public imoveisService: ImoveisService) {}

  ngOnInit(): void {}
  openForm() {
    if ($('._filter').hasClass('_active')) {
      $('._filter').removeClass('_active');
    } else {
      $('._filter').addClass('_active');
    }
  }
}
