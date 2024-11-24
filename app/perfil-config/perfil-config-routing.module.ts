import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilConfigPage } from './perfil-config.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilConfigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilConfigPageRoutingModule {}
