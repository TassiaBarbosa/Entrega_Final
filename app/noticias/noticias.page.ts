import { Component, OnInit } from '@angular/core';
//import { ConfigService } from '../services/config.service'; tirar cometario depois
  
  @Component({
    selector: 'app-noticias',
    templateUrl: './noticias.page.html',
    styleUrls: ['./noticias.page.scss'],
  })
  export class NoticiasPage implements OnInit {

    constructor() { }

    ngOnInit() {
    }
  
    /*colocar este método + variaveis em todas as páginas 
    public currentFont: string = '';
    public currentFontSizeClass: string = '';  
    public currentContrastClass: string = ''; 
  
    constructor(private configService: ConfigService) { }
  
    ngOnInit() {
       let resp = this.configService.getConfig();
       this.currentFont = resp[0]; 
       this.currentFontSizeClass = resp[1];
       this.currentContrastClass = resp[2];
       console.log("getConfig = ", this.currentFont);
      }
       */
  }
  
  

