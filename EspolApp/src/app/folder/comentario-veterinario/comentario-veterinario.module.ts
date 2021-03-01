import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComentarioVeterinarioPageRoutingModule } from './comentario-veterinario-routing.module';

import { ComentarioVeterinarioPage } from './comentario-veterinario.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ComentarioVeterinarioPageRoutingModule
  ],
  declarations: [ComentarioVeterinarioPage]
})
export class ComentarioVeterinarioPageModule {}
