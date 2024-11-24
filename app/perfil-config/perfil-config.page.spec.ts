import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilConfigPage } from './perfil-config.page';

describe('PerfilConfigPage', () => {
  let component: PerfilConfigPage;
  let fixture: ComponentFixture<PerfilConfigPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
