import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductsComponent } from './products/products.component';
import { PopularProductsComponent } from './popular-products/popular-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    BrandsComponent,
    ProductsComponent,
    PopularProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
