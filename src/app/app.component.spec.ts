import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let translateService: TranslateService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        TranslateModule.forRoot(),
        AppComponent,
        NavbarComponent,
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should have default language set to Spanish', () => {
    expect(translateService.getDefaultLang()).toBe('es'); // Verifica que el idioma por defecto sea inglés
  });

  it('should switch languages when switchLanguage is called', () => {
    const lang = 'en';
    app.switchLanguage(lang); // Llama al método switchLanguage
    expect(translateService.currentLang).toBe(lang); // Verifica que el idioma actual haya cambiado a 'es'
  });
});
