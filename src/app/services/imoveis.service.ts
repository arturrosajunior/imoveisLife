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
  ) { }

  async getItems() {
    let response = await this.api.read(this.endpoint);
    return response;
  }

  async getItem(id) {
    let response = await this.api.readId('', id);
    return response;
  }

}
