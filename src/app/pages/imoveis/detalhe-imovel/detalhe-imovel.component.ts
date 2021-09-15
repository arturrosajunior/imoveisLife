import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe-imovel',
  templateUrl: './detalhe-imovel.component.html',
  styleUrls: ['./detalhe-imovel.component.css'],
})
export class DetalheImovelComponent implements OnInit {
  imovel: { images: string[] };
  titulo: string;

  constructor() {
    this.titulo = 'Casa para alugar com 3 quartos, 120m²';

    this.imovel = {
      images: [
        'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
        'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
        'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
        'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
        'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
        'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
        'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
        'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
        'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
        'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
        'https://www.quintoandar.com.br/img/lrg/893293298-818.6095850131849IMG6604.jpg',
      ],
    };
  }

  ngOnInit(): void {}
}
