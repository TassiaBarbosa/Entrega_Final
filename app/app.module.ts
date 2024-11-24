import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//minhas importações
import { CommonModule } from '@angular/common';
import { ConfigService } from './services/config.service';
import { NoticiasPage } from './noticias/noticias.page';


@NgModule({
  declarations: [AppComponent, NoticiasPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
