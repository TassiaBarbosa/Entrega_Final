import { Component, OnInit } from '@angular/core';
//importar seviço do firebase aqui
import { UserService } from 'src/app/services/user.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public email:string = "";
  public password: string = "";
  public newPassword: string = "";
  public newEmail: string = '';
  public currentPassword: string = '';

  constructor(private userService: UserService, 
              private alertController: AlertController,
              private loadingController: LoadingController) { }
  
  ngOnInit() {
    this.loadUserData();
    const auth = getAuth();
    const user = auth.currentUser;
    this.email = user?.email || '';
  }
  //carregar dados
  loadUserData() {
    this.email = this.userService.getUserEmail();
    this.password = this.userService.getUserPassword();

  }
  //alterar senha
  async changePassword() {
    if (this.newPassword.length < 6) {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'A senha deve ter pelo menos 6 caracteres.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }
  //mensagem de sucesso
  const success:any = this.userService.updatePassword(this.newPassword);
    if (success) {
      const alert = await this.alertController.create({
        header: 'Sucesso',
        message: 'Senha atualizada com sucesso!',
        buttons: ['OK']
      });
    await alert.present();
      this.newPassword = ''; // Limpa o campo
      } else {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Não foi possível atualizar a senha.',
        buttons: ['OK']
      });
    await alert.present();
    }
  }

  //Alterar email
  async changeEmail() {
    const loading = await this.loadingController.create({
      message: 'Atualizando e-mail...',
    });
    await loading.present();

    try {
      await this.userService.updateEmail(this.newEmail, this.currentPassword);
      await loading.dismiss();

      const alert = await this.alertController.create({
        header: 'Sucesso',
        message: 'E-mail atualizado com sucesso!',
        buttons: ['OK'],
      });
      await alert.present();

      this.email = this.newEmail; // Atualiza o e-mail exibido
      this.newEmail = '';
      this.currentPassword = '';
    } catch (error: any) {
      await loading.dismiss();

      const alert = await this.alertController.create({
        header: 'Erro',
        message: error.message || 'Não foi possível atualizar o e-mail.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}

