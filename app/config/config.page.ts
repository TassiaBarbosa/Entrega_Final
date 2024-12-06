import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
  fontType = 'default';
  darkMode = false;
  fontSize = 16;

  constructor(private configService: ConfigService) {}

  async ngOnInit() {
    await this.loadConfig();
  }

  async loadConfig() {
    this.fontType = (await this.configService.getConfig('fontType')) || 'default';
    this.darkMode = (await this.configService.getConfig('darkMode')) || false;
    this.fontSize = (await this.configService.getConfig('fontSize')) || 16;
  }

  async updateConfig() {
    await this.configService.setConfig('fontType', this.fontType);
    await this.configService.setConfig('darkMode', this.darkMode);
    await this.configService.setConfig('fontSize', this.fontSize);

    document.body.style.setProperty('--font-type', this.fontType);
    document.body.style.setProperty('--font-size', `${this.fontSize}px`);
    document.body.classList.toggle('dark-mode', this.darkMode);
  }
}
