import { Component, OnInit } from '@angular/core';
import { ImoveisService } from 'src/app/services/imoveis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public imoveisService: ImoveisService) {}

  ngOnInit(): void {}
}
