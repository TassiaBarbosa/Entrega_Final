
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    const config = this.configService.getConfig();
    if (config) {
      this.currentFont = config.font || 'font-default';
      this.currentFontSizeClass = config.fontSize || 'size-default';
      this.currentContrastClass = config.contrast || 'contrast-default';
    }
  }
  
  //método para mudar a fonte 
  public currentFont: string = 'font-default';
  changeFont(fontClass: string) {
    this.currentFont = fontClass;
  }

  //método para mudar o tamanho da fonte
  public currentFontSizeClass: string = 'size-default';  
  changeFontSize(fontSizeClass: string) { 
    this.currentFontSizeClass = fontSizeClass; 
  }

  //método para mudar o contraste da fonte
  public currentContrastClass: string = 'contrast-default'; 
  changeContrast(contrastClass: string) { 
    this.currentContrastClass = contrastClass; 
  }
  //método de salvar configurações
  salvarConfig() {
    this.configService.setConfig(
      this.currentFont, this.currentFontSizeClass, this.currentContrastClass
    ) 
  }

}









/**
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  constructor(private configService: ConfigService) { }

  ngOnInit() {
  }
  
  //método para mudar a fonte 
  public currentFont: string = 'font-default';
  changeFont(fontClass: string) {
    this.currentFont = fontClass;
  }

  //método para mudar o tamanho da fonte
  public currentFontSizeClass: string = 'size-default';  
  changeFontSize(fontSizeClass: string) { 
    this.currentFontSizeClass = fontSizeClass; 
  }

  //método para mudar o contraste da fonte
  public currentContrastClass: string = 'contrast-defaut'; 
  changeContrast(contrastClass: string) { 
    this.currentContrastClass = contrastClass; 
  }
  //método de salvar configurações
  salvarConfig() {
    this.configService.setConfig(
      this.currentFont, this.currentFontSizeClass, this.currentContrastClass
    ) 
  }

}
 */

