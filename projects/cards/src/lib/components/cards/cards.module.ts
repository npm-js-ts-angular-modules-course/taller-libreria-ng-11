import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CardItemModule } from '../card-item/card-item.module';
import { CardsComponent } from './cards.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CardsComponent],
  imports: [
    CardItemModule,
    BrowserModule
  ],
  exports: [CardsComponent]
})
export class CardsModule { }
