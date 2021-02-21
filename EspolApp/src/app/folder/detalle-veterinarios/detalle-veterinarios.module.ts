import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleVeterinariosPageRoutingModule } from './detalle-veterinarios-routing.module';

import { DetalleVeterinariosPage } from './detalle-veterinarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleVeterinariosPageRoutingModule
  ],
  declarations: [DetalleVeterinariosPage]
})
export class DetalleVeterinariosPageModule {}
