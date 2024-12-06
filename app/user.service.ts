import { Injectable } from '@angular/core';
// Importação correta do AngularFire
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, updateEmail, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUserPassword(): string {
    throw new Error('Method not implemented.');
  }
  getUserEmail(): string {
    throw new Error('Method not implemented.');
  }
  constructor(private afAuth: AngularFireAuth) {}

  /* Atualizar senha usando Firebase */
  async updatePassword(newPassword: string): Promise<void> {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      throw new Error('Usuário não autenticado.');
    }

    try {
      await updatePassword(user, newPassword);
    } catch (error) {
      console.error('Erro ao atualizar a senha:', error);
      throw new Error('Não foi possível atualizar a senha. Tente novamente.');
    }
  }

  /* Atualizar e-mail usando Firebase */
  async updateEmail(newEmail: string, currentPassword: string): Promise<void> {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      throw new Error('Usuário não autenticado.');
    }

    try {
      // Reautenticação do usuário
      const credential = EmailAuthProvider.credential(user.email || '', currentPassword);
      await reauthenticateWithCredential(user, credential);

      // Atualização do e-mail
      await updateEmail(user, newEmail);
    } catch (error) {
      console.error('Erro ao atualizar o e-mail:', error);
      throw new Error('Não foi possível atualizar o e-mail. Tente novamente.');
    }
  }
}


/* import { Injectable } from '@angular/core';
//minhas imports
import { AngularFireAuth } from '@angular/fire/compat/auth';
//import do chat gpt
import { getAuth, updatePassword } from 'firebase/auth';
import { getAuth, updateEmail, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class UserService { 

   private userData = {
    email: 'usuario@exemplo.com',
    password: '123456',
    newPassword:'',
  };

  constructor( ) { }

  //pegar o email e senha
  getUserEmail(): string {
    return this.userData.email;
  }
  getUserPassword(): string {
    return this.userData.password;
  }

  //atualizar senha (firebase)
  async updatePassword(newPassword: string): Promise<void> {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      await updatePassword(user, newPassword);
    } else {
      throw new Error('Usuário não autenticado.');
    }
  }
   //Atualizar email
   async updateEmail(newEmail: string, currentPassword: string): Promise<void> {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      throw new Error('Usuário não está autenticado.');
    }

    // Reautenticação do usuário
    const credential = EmailAuthProvider.credential(user.email || '', currentPassword);
    await reauthenticateWithCredential(user, credential);

    // Atualização do e-mail
    await updateEmail(user, newEmail);
  }

}
 */