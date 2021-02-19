import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdopcionCrearPageRoutingModule } from './adopcion-crear-routing.module';

import { AdopcionCrearPage } from './adopcion-crear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdopcionCrearPageRoutingModule
  ],
  declarations: [AdopcionCrearPage]
})
export class AdopcionCrearPageModule {}
