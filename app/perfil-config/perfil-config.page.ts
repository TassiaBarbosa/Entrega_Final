import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-config',
  templateUrl: './perfil-config.page.html',
  styleUrls: ['./perfil-config.page.scss'],
})
export class PerfilConfigPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  enviarDados() {
    //terminar
  }

}

/*modelo com os metodos de acessar a câmera e o armazenamento do dispositivo (consertar e substituir por este)

import { Component, OnInit } from '@angular/core';
//minhas importações
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor() { }//consertar o constructor
  ngOnInit() {
  }
  //método de acesssar a camera
  public photo: string;

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.photo = image.dataUrl;
  }
  //métodos de acesssar o armazenamento
  async writeFile() { 
    try { await Filesystem.writeFile({ 
      path: 'my_file.txt', data: 'Hello, this is a test file!', 
      directory: Directory.Documents, encoding: Encoding.UTF8, 
      }); 
      console.log('File written successfully'); 
    } catch (e) { 
      console.error('Unable to write file', e); 
    } 
  }
  async readFile() { 
    try { 
      const contents = await Filesystem.readFile({ 
        path: 'my_file.txt', directory: Directory.Documents, encoding: Encoding.UTF8, 
      }); 
      console.log('File contents:', contents.data); 
    } catch (e) { console.error('Unable to read file', e); } }

}
*/



