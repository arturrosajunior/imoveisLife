import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-imovel',
  templateUrl: './card-imovel.component.html',
  styleUrls: ['./card-imovel.component.css'],
})
export class CardImovelComponent implements OnInit {
  @Input() item: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.item);
  }
}
