import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    if (!this._storage) {
      this._storage = await this.storage.create();
    }
  }

  async setConfig(key: string, value: any) {
    await this._storage?.set(key, value);
  }

  async getConfig(key: string): Promise<any> {
    return this._storage?.get(key);
  }
}






/* import { Injectable } from '@angular/core';
//minhas importações
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private storageInitialized = false;

  constructor(private storage: Storage) {
    this.init();
   }

   async init() {
    if (!this.storageInitialized) {
      await this.storage.create();
      this.storageInitialized = true;
    }
  }
  async setConfig(key: string, value: any) {
    await this.storage.set(key, value);
  }

  async getConfig(key: string): Promise<any> {
    return await this.storage.get(key);
  }
}


 */