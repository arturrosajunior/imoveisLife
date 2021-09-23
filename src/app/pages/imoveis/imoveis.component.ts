import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-imoveis',
  templateUrl: './imoveis.component.html',
  styleUrls: ['./imoveis.component.css'],
})
export class ImoveisComponent implements OnInit {
  changeViewList = 3;
  imoveis: any;

  constructor() {
    this.imoveis = [
      {
        id: '1',
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
      },
      {
        id: '2',
        titulo: 'Casa para alugar com 3 quartos, 120m²',
        ref: '593298',
        capa: 'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
        images: [
          'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
          'https://www.quintoandar.com.br/img/lrg/893283425-529.6216484562894AlessandraSantosFotografia7.jpg',
          'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
          'https://www.quintoandar.com.br/img/lrg/893283425-529.6216484562894AlessandraSantosFotografia7.jpg',
          'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
          'https://www.quintoandar.com.br/img/lrg/893283425-529.6216484562894AlessandraSantosFotografia7.jpg',
        ],
        andar: '3',
        areaconstruida: '40',
        areatotal: '56',
        banheiro: '2',
        garagem: '1',
        quartos: '3',
      },
      {
        id: '1',
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
      },
      {
        id: '2',
        titulo: 'Casa para alugar com 3 quartos, 120m²',
        ref: '593298',
        capa: 'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
        images: [
          'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
          'https://www.quintoandar.com.br/img/lrg/893283425-529.6216484562894AlessandraSantosFotografia7.jpg',
          'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
          'https://www.quintoandar.com.br/img/lrg/893283425-529.6216484562894AlessandraSantosFotografia7.jpg',
          'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
          'https://www.quintoandar.com.br/img/lrg/893283425-529.6216484562894AlessandraSantosFotografia7.jpg',
        ],
        andar: '3',
        areaconstruida: '40',
        areatotal: '56',
        banheiro: '2',
        garagem: '1',
        quartos: '3',
      },
      {
        id: '1',
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
      },
      {
        id: '2',
        titulo: 'Casa para alugar com 3 quartos, 120m²',
        ref: '593298',
        capa: 'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
        images: [
          'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
          'https://www.quintoandar.com.br/img/lrg/893283425-529.6216484562894AlessandraSantosFotografia7.jpg',
          'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
          'https://www.quintoandar.com.br/img/lrg/893283425-529.6216484562894AlessandraSantosFotografia7.jpg',
          'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
          'https://www.quintoandar.com.br/img/lrg/893283425-529.6216484562894AlessandraSantosFotografia7.jpg',
        ],
        andar: '3',
        areaconstruida: '40',
        areatotal: '56',
        banheiro: '2',
        garagem: '1',
        quartos: '3',
      },
      {
        id: '1',
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
      },
      {
        id: '2',
        titulo: 'Casa para alugar com 3 quartos, 120m²',
        ref: '593298',
        capa: 'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
        images: [
          'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
          'https://www.quintoandar.com.br/img/lrg/893283425-529.6216484562894AlessandraSantosFotografia7.jpg',
          'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
          'https://www.quintoandar.com.br/img/lrg/893283425-529.6216484562894AlessandraSantosFotografia7.jpg',
          'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
          'https://www.quintoandar.com.br/img/lrg/893283425-529.6216484562894AlessandraSantosFotografia7.jpg',
        ],
        andar: '3',
        areaconstruida: '40',
        areatotal: '56',
        banheiro: '2',
        garagem: '1',
        quartos: '3',
      },
    ];
  }

  ngOnInit(): void {}
  openForm() {
    if ($('._filter').hasClass('_active')) {
      $('._filter').removeClass('_active');
    } else {
      $('._filter').addClass('_active');
    }
  }
}
