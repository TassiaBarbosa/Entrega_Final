
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  public currentFont: string = '';
  public currentFontSizeClass: string = '';  
  public currentContrastClass: string = ''; 

  setConfig(font: string, fontSize: string, contrast: string) {
    localStorage.setItem('config', JSON.stringify({ font, fontSize, contrast }));
  }
  
  getConfig() {
    const config = localStorage.getItem('config');
    return config ? JSON.parse(config) : null;
  }
  
}







/**
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  public currentFont: string = '';
  public currentFontSizeClass: string = '';  
  public currentContrastClass: string = ''; 

  setConfig(currentFont:string, currentFontSizeClass:string, currentContrastClass:string) {
    this.currentFont = currentFont; 
    this.currentFontSizeClass = currentFontSizeClass;
    this.currentContrastClass = currentContrastClass;
  }
  getConfig(){
    return [this.currentFont, this.currentFontSizeClass , this.currentContrastClass ];
  }
}
 */
