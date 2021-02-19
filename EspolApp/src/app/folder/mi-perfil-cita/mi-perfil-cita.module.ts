import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiPerfilCitaPageRoutingModule } from './mi-perfil-cita-routing.module';

import { MiPerfilCitaPage } from './mi-perfil-cita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiPerfilCitaPageRoutingModule
  ],
  declarations: [MiPerfilCitaPage]
})
export class MiPerfilCitaPageModule {}
