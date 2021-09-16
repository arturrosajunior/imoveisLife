import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-detalhe-imovel',
  templateUrl: './detalhe-imovel.component.html',
  styleUrls: ['./detalhe-imovel.component.css'],
})
export class DetalheImovelComponent implements OnInit {
  imovel: any;

  constructor() {
    this.imovel = {
      titulo: 'Casa para alugar com 3 quartos, 120m²',
      ref: '593298',
      capa: 'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
      images: [
        'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
        'https://www.quintoandar.com.br/img/med/893379697-896.0451033281681Foto8.JPG',
        'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
        'https://www.quintoandar.com.br/img/med/893379697-896.0451033281681Foto8.JPG',
        'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
        'https://www.quintoandar.com.br/img/med/893379697-896.0451033281681Foto8.JPG',
      ],
      andar: '3',
      areaconstruida: '40',
      areatotal: '56',
      banheiro: '2',
      garagem: '1',
      quartos: '3',
    };
  }

  openForm() {
    if ($('._formulario').hasClass('_active')) {
      $('._formulario').removeClass('_active');
    } else {
      $('._formulario').addClass('_active');
    }
  }
  ngOnInit(): void {}
}
