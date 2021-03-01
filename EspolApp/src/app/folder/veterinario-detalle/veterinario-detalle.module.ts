import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeterinarioDetallePageRoutingModule } from './veterinario-detalle-routing.module';

import { VeterinarioDetallePage } from './veterinario-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeterinarioDetallePageRoutingModule
  ],
  declarations: [VeterinarioDetallePage]
})
export class VeterinarioDetallePageModule {}
