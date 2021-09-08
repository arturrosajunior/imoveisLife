import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../component/header/header.component';
import { FooterComponent } from '../component/footer/footer.component';
import { DetalheImovelComponent } from './imoveis/detalhe-imovel/detalhe-imovel.component';
import { ImoveisComponent } from './imoveis/imoveis.component';
import { BreadcrumbComponent } from '../component/breadcrumb/breadcrumb.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselComponent } from '../component/carousel/carousel.component';

@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DetalheImovelComponent,
    ImoveisComponent,
    BreadcrumbComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    FormsModule,
    SlickCarouselModule,
  ],
})
export class PagesModule {}
