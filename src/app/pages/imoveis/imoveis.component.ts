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

  myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');

    filter = input.value.toUpperCase();

    ul = document.getElementById('myUL');

    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName('label')[0];

      txtValue = a.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  }
}
