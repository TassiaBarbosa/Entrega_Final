import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilConfigPageRoutingModule } from './perfil-config-routing.module';

import { PerfilConfigPage } from './perfil-config.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilConfigPageRoutingModule
  ],
  declarations: [PerfilConfigPage]
})
export class PerfilConfigPageModule {}
