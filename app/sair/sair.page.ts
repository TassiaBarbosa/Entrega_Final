import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sair',
  templateUrl: './sair.page.html',
  styleUrls: ['./sair.page.scss'],
})
export class SairPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  goToInicio() {
    this.navCtrl.navigateForward('/inicio');
  }
  goToHome() {
    this.navCtrl.navigateForward('/home');
  }
  ngOnInit() {
  }

}
