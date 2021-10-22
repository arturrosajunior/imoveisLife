import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';

import axios from 'axios';


@Injectable({
  providedIn: 'root',
})

export class ImoveisService {

  private endpoint: string = "/";

  imoveis: any;

  constructor(
    private api: ApiService,
  ) {

    // this.imoveis = [
    //   {
    //     id: '1',
    //     titulo: 'Casa para alugar com 3 quartos, 120m²',
    //     ref: '593298',
    //     capa: 'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
    //     images: [
    //       'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
    //       'https://www.quintoandar.com.br/img/med/893379697-896.0451033281681Foto8.JPG',
    //       'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
    //       'https://www.quintoandar.com.br/img/med/893379697-896.0451033281681Foto8.JPG',
    //       'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
    //       'https://www.quintoandar.com.br/img/med/893379697-896.0451033281681Foto8.JPG',
    //     ],
    //     andar: '3',
    //     areaconstruida: '40',
    //     areatotal: '56',
    //     banheiro: '2',
    //     garagem: '1',
    //     quartos: '3',
    //     endereco: 'rua são lucas, 100 - Jd. São Judas',
    //     categoria: ['sala', 'aluguel'],
    //   },
    //   {
    //     id: '2',
    //     titulo: 'Casa para alugar com 3 quartos, 120m²',
    //     ref: '593298',
    //     capa: 'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
    //     images: [
    //       'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
    //       'https://www.quintoandar.com.br/img/lrg/893283425-529.6216484562894AlessandraSantosFotografia7.jpg',
    //       'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
    //       'https://www.quintoandar.com.br/img/lrg/893283425-529.6216484562894AlessandraSantosFotografia7.jpg',
    //       'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
    //       'https://www.quintoandar.com.br/img/lrg/893283425-529.6216484562894AlessandraSantosFotografia7.jpg',
    //     ],
    //     andar: '3',
    //     areaconstruida: '40',
    //     areatotal: '56',
    //     banheiro: '2',
    //     garagem: '1',
    //     quartos: '3',
    //     categoria: ['casa', 'aluguel'],
    //   },
    //   {
    //     id: '1',
    //     titulo: 'Casa para alugar com 3 quartos, 120m²',
    //     ref: '593298',
    //     capa: 'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
    //     images: [
    //       'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
    //       'https://www.quintoandar.com.br/img/med/893379697-896.0451033281681Foto8.JPG',
    //       'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
    //       'https://www.quintoandar.com.br/img/med/893379697-896.0451033281681Foto8.JPG',
    //       'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
    //       'https://www.quintoandar.com.br/img/med/893379697-896.0451033281681Foto8.JPG',
    //     ],
    //     andar: '3',
    //     areaconstruida: '40',
    //     areatotal: '56',
    //     banheiro: '2',
    //     garagem: '1',
    //     quartos: '3',
    //     categoria: ['casa', 'venda'],
    //   },
    //   {
    //     id: '2',
    //     titulo: 'Casa para alugar com 3 quartos, 120m²',
    //     ref: '593298',
    //     capa: 'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
    //     images: [
    //       'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
    //       'https://www.quintoandar.com.br/img/lrg/893283425-529.6216484562894AlessandraSantosFotografia7.jpg',
    //       'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
    //       'https://www.quintoandar.com.br/img/lrg/893283425-529.6216484562894AlessandraSantosFotografia7.jpg',
    //       'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
    //       'https://www.quintoandar.com.br/img/lrg/893283425-529.6216484562894AlessandraSantosFotografia7.jpg',
    //     ],
    //     andar: '3',
    //     areaconstruida: '40',
    //     areatotal: '56',
    //     banheiro: '2',
    //     garagem: '1',
    //     quartos: '3',
    //     categoria: ['sala', 'venda'],
    //   },
    //   {
    //     id: '1',
    //     titulo: 'Casa para alugar com 3 quartos, 120m²',
    //     ref: '593298',
    //     capa: 'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
    //     images: [
    //       'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
    //       'https://www.quintoandar.com.br/img/med/893379697-896.0451033281681Foto8.JPG',
    //       'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
    //       'https://www.quintoandar.com.br/img/med/893379697-896.0451033281681Foto8.JPG',
    //       'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
    //       'https://www.quintoandar.com.br/img/med/893379697-896.0451033281681Foto8.JPG',
    //     ],
    //     andar: '3',
    //     areaconstruida: '40',
    //     areatotal: '56',
    //     banheiro: '2',
    //     garagem: '1',
    //     quartos: '3',
    //     categoria: ['casa', 'aluguel'],
    //   },
    //   {
    //     id: '2',
    //     titulo: 'Casa para alugar com 3 quartos, 120m²',
    //     ref: '593298',
    //     capa: 'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
    //     images: [
    //       'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
    //       'https://www.quintoandar.com.br/img/lrg/893283425-529.6216484562894AlessandraSantosFotografia7.jpg',
    //       'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
    //       'https://www.quintoandar.com.br/img/lrg/893283425-529.6216484562894AlessandraSantosFotografia7.jpg',
    //       'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
    //       'https://www.quintoandar.com.br/img/lrg/893283425-529.6216484562894AlessandraSantosFotografia7.jpg',
    //     ],
    //     andar: '3',
    //     areaconstruida: '40',
    //     areatotal: '56',
    //     banheiro: '2',
    //     garagem: '1',
    //     quartos: '3',
    //     categoria: ['sala', 'venda'],
    //   },
    //   {
    //     id: '1',
    //     titulo: 'Casa para alugar com 3 quartos, 120m²',
    //     ref: '593298',
    //     capa: 'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
    //     images: [
    //       'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
    //       'https://www.quintoandar.com.br/img/med/893379697-896.0451033281681Foto8.JPG',
    //       'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
    //       'https://www.quintoandar.com.br/img/med/893379697-896.0451033281681Foto8.JPG',
    //       'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
    //       'https://www.quintoandar.com.br/img/med/893379697-896.0451033281681Foto8.JPG',
    //     ],
    //     andar: '3',
    //     areaconstruida: '40',
    //     areatotal: '56',
    //     banheiro: '2',
    //     garagem: '1',
    //     quartos: '3',
    //     categoria: ['sala', 'aluguel'],
    //   },
    //   {
    //     id: '2',
    //     titulo: 'Casa para alugar com 3 quartos, 120m²',
    //     ref: '593298',
    //     capa: 'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
    //     images: [
    //       'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
    //       'https://www.quintoandar.com.br/img/lrg/893283425-529.6216484562894AlessandraSantosFotografia7.jpg',
    //       'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
    //       'https://www.quintoandar.com.br/img/lrg/893283425-529.6216484562894AlessandraSantosFotografia7.jpg',
    //       'https://www.quintoandar.com.br/img/lrg/893283425-350.4863301785256AlessandraSantosFotografia6.jpg',
    //       'https://www.quintoandar.com.br/img/lrg/893283425-529.6216484562894AlessandraSantosFotografia7.jpg',
    //     ],
    //     andar: '3',
    //     areaconstruida: '40',
    //     areatotal: '56',
    //     banheiro: '2',
    //     garagem: '1',
    //     quartos: '3',
    //     categoria: ['sala', 'aluguel'],
    //   },
    // ];

    // this.imoveis = this.getItems();

  }

  async getItems() {
    let response = await this.api.read(this.endpoint);
    return response;
  }

}
