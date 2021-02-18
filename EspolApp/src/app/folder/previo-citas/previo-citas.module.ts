import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrevioCitasPageRoutingModule } from './previo-citas-routing.module';

import { PrevioCitasPage } from './previo-citas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrevioCitasPageRoutingModule
  ],
  declarations: [PrevioCitasPage]
})
export class PrevioCitasPageModule {}
