import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdopcionPageRoutingModule } from './adopcion-routing.module';

import { AdopcionPage } from './adopcion.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AdopcionPageRoutingModule
  ],
  declarations: [AdopcionPage]
})
export class AdopcionPageModule {}
