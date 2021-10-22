import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { ImoveisService } from 'src/app/services/imoveis.service';

@Component({
  selector: 'app-detalhe-imovel',
  templateUrl: './detalhe-imovel.component.html',
  styleUrls: ['./detalhe-imovel.component.css'],
})
export class DetalheImovelComponent implements OnInit {
  imovel: any;

  constructor(
    public imovelService: ImoveisService,
    private router: ActivatedRoute,
  ) {}

  openForm() {
    if ($('._formulario').hasClass('_active')) {
      $('._formulario').removeClass('_active');
    } else {
      $('._formulario').addClass('_active');
    }
  }
  
  async ngOnInit(): Promise<void> {
    this.router.params.subscribe(async (params: any) => {
      this.imovel = await this.imovelService.getItem(params['id']);
    });
  }
}
